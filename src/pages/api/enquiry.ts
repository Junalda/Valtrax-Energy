import type { APIRoute } from 'astro';
import { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } from 'astro:env/server';
import { MAX_BODY_BYTES, MIN_FILL_MS, validateEnquiry, type Enquiry } from '../../lib/enquiry';
import { t, pathFor, type Lang } from '../../i18n';

// The only server-rendered route: runs as a Vercel function. All pages stay prerendered.
export const prerender = false;

type Status = 'sent' | 'invalid' | 'tooFast' | 'rateLimited' | 'unavailable' | 'error';

// --- Abuse protection -------------------------------------------------------------
// Best-effort in-memory limiter per function instance. For stronger guarantees add a
// Vercel Firewall rate-limit rule on POST /api/enquiry (see README).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();

// IP addresses are held in memory only, never logged or stored, and are dropped once the
// window has passed (the privacy policy states this, so keep the behaviour in sync).
function rateLimited(key: string, now: number): boolean {
  for (const [k, v] of hits) if (v.every((ts) => now - ts >= WINDOW_MS)) hits.delete(k);
  const recent = (hits.get(key) ?? []).filter((ts) => now - ts < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_PER_WINDOW;
}

// --- Logging: outcome only, never personal data or message content ------------------
function log(status: Status | 'rejected', detail?: Record<string, string | number>) {
  console.info(JSON.stringify({ event: 'enquiry', status, ...detail }));
}

// --- Response helpers --------------------------------------------------------------
function wantsJson(request: Request): boolean {
  return (request.headers.get('accept') ?? '').includes('application/json');
}

const httpStatus: Record<Status, number> = {
  sent: 200,
  invalid: 400,
  tooFast: 400,
  rateLimited: 429,
  unavailable: 503,
  error: 502,
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

/** Minimal localised page for browsers that submitted without JavaScript. */
function htmlPage(lang: Lang, status: Status): Response {
  const dict = t(lang);
  const message = status === 'sent' ? dict.form.status.success : dict.form.status[status];
  const back = `${pathFor('home', lang)}#contact`;
  const body = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${escapeHtml(dict.form.legend)} | Valtrax Energy</title><style>body{font:1.0625rem/1.6 system-ui,sans-serif;color:#022449;background:#f4f5f7;margin:0;display:grid;place-items:center;min-height:100vh;padding:1rem}main{background:#fff;max-width:36rem;padding:2.5rem;border-top:3px solid #be8a22}a{color:#022449;font-weight:600}</style></head><body><main><p role="${status === 'sent' ? 'status' : 'alert'}">${escapeHtml(message)}</p><p><a href="${back}">${escapeHtml(dict.form.noJsBack)}</a></p></main></body></html>`;
  return new Response(body, {
    status: httpStatus[status],
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
  });
}

function respond(request: Request, lang: Lang, status: Status, extra?: Record<string, unknown>): Response {
  if (!wantsJson(request)) return htmlPage(lang, status);
  return new Response(JSON.stringify({ status, ...extra }), {
    status: httpStatus[status],
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

// --- Delivery ----------------------------------------------------------------------
const labels = t('en');

function composeEmail(e: Enquiry): { subject: string; text: string } {
  const type = labels.form.enquiryTypes[e.enquiryType];
  const product = labels.products.items.find((p) => p.key === e.product)?.name ?? e.product;
  const subject = `Website enquiry: ${type} · ${product} · ${e.company}`.slice(0, 200);
  const rows: [string, string | undefined][] = [
    ['Name', e.name],
    ['Company', e.company],
    ['Email', e.email],
    ['Country', e.country],
    ['Enquiry type', type],
    ['Product', product],
    ['Volume', e.volume ? `${e.volume}${e.unit ? ` ${labels.form.units[e.unit]}` : ''}` : undefined],
    ['Delivery destination', e.destination],
    ['Preferred delivery basis', e.basis ? labels.form.deliveryBases[e.basis] : undefined],
    ['Telephone', e.phone],
    ['Site language', e.lang.toUpperCase()],
  ];
  const text = [
    'New enquiry submitted through the Valtrax Energy website.',
    '',
    ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    '',
    'Message / requirements:',
    e.message,
    '',
    'Reply directly to this email to respond to the sender.',
  ].join('\n');
  return { subject, text };
}

async function deliver(e: Enquiry, config: { apiKey: string; to: string[]; from: string }) {
  const { subject, text } = composeEmail(e);
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${config.apiKey}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from: config.from, to: config.to, reply_to: e.email, subject, text }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) return { ok: false as const, httpStatus: res.status };
  const json = (await res.json().catch(() => null)) as { id?: string } | null;
  // Success only when the provider confirms acceptance with a message id.
  return json?.id ? { ok: true as const } : { ok: false as const, httpStatus: res.status };
}

// --- Handler -----------------------------------------------------------------------
export const POST: APIRoute = async ({ request, clientAddress, url }) => {
  let lang: Lang = 'en';

  // Same-origin only: browsers always send Origin on cross-site POSTs.
  const origin = request.headers.get('origin');
  if (origin && origin !== url.origin) {
    log('rejected', { reason: 'origin' });
    return new Response(null, { status: 403 });
  }

  const declared = Number(request.headers.get('content-length') ?? 0);
  if (declared > MAX_BODY_BYTES) {
    log('rejected', { reason: 'size' });
    return new Response(null, { status: 413 });
  }

  const contentType = request.headers.get('content-type') ?? '';
  let input: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
      log('rejected', { reason: 'size' });
      return new Response(null, { status: 413 });
    }
    if (contentType.includes('application/json')) {
      const parsed: unknown = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('shape');
      input = parsed as Record<string, unknown>;
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      input = Object.fromEntries(new URLSearchParams(raw));
    } else {
      log('rejected', { reason: 'content-type' });
      return new Response(null, { status: 415 });
    }
  } catch {
    log('rejected', { reason: 'parse' });
    return respond(request, lang, 'invalid');
  }
  if (input.lang === 'nl') lang = 'nl';

  // Honeypot: a hidden field that people never see or fill in.
  if (typeof input.website === 'string' && input.website.trim() !== '') {
    log('rejected', { reason: 'honeypot' });
    return respond(request, lang, 'invalid');
  }

  // Time-to-submit check (field is set by the page script; absent for no-JS submissions).
  const startedAt = Number(input.startedAt);
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS) {
    log('tooFast');
    return respond(request, lang, 'tooFast');
  }

  const now = Date.now();
  if (rateLimited(clientAddress || request.headers.get('x-real-ip') || 'unknown', now)) {
    log('rateLimited');
    return respond(request, lang, 'rateLimited');
  }

  const result = validateEnquiry(input);
  if (!result.ok) {
    log('invalid', { fields: Object.keys(result.errors).join(',') });
    return respond(request, lang, 'invalid', { errors: result.errors });
  }

  const to = (CONTACT_TO_EMAIL ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || to.length === 0) {
    // Honest failure: nothing is sent and the visitor is told so.
    log('unavailable', { reason: 'not-configured' });
    return respond(request, lang, 'unavailable');
  }

  try {
    const delivery = await deliver(result.data, { apiKey: RESEND_API_KEY, to, from: CONTACT_FROM_EMAIL });
    if (!delivery.ok) {
      log('error', { provider: delivery.httpStatus });
      return respond(request, lang, 'error');
    }
  } catch (err) {
    log('error', { provider: err instanceof Error ? err.name : 'unknown' });
    return respond(request, lang, 'error');
  }

  log('sent', { type: result.data.enquiryType, product: result.data.product, lang: result.data.lang });
  return respond(request, lang, 'sent');
};

export const ALL: APIRoute = () =>
  new Response(null, { status: 405, headers: { allow: 'POST' } });
