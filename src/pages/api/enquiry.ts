import type { APIRoute } from 'astro';
import { RESEND_API_KEY, CONTACT_FROM_EMAIL } from 'astro:env/server';
import { site } from '../../config/site';
import {
  MAX_BODY_BYTES,
  MIN_FILL_MS,
  validateEnquiry,
  validateStartEnquiry,
  type Enquiry,
  type StartEnquiry,
} from '../../lib/enquiry';
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

/** Which form posted: the contact page form or the start page form. */
type FormKind = 'contact' | 'start';

/** Minimal localised page for browsers that submitted without JavaScript. */
function htmlPage(lang: Lang, status: Status, kind: FormKind, role?: string): Response {
  const dict = t(lang);
  const success = kind === 'start' ? (role === 'supplier' ? dict.start.form.success.supplier : dict.start.form.success.buyer) : dict.form.status.success;
  const message = status === 'sent' ? success : dict.form.status[status];
  const back = kind === 'start' ? `${pathFor('start', lang)}#enquiry` : `${pathFor('contact', lang)}#contact`;
  const body = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${escapeHtml(dict.form.legend)} | Valtrax Energy</title><style>body{font:1.0625rem/1.6 system-ui,sans-serif;color:#022449;background:#f4f5f7;margin:0;display:grid;place-items:center;min-height:100vh;padding:1rem}main{background:#fff;max-width:36rem;padding:2.5rem;border-top:3px solid #be8a22}a{color:#022449;font-weight:600}</style></head><body><main><p role="${status === 'sent' ? 'status' : 'alert'}">${escapeHtml(message)}</p><p><a href="${back}">${escapeHtml(dict.form.noJsBack)}</a></p></main></body></html>`;
  return new Response(body, {
    status: httpStatus[status],
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
  });
}

function respond(
  request: Request,
  lang: Lang,
  status: Status,
  extra?: Record<string, unknown>,
  kind: FormKind = 'contact',
  role?: string,
): Response {
  if (!wantsJson(request)) return htmlPage(lang, status, kind, role);
  return new Response(JSON.stringify({ status, ...extra }), {
    status: httpStatus[status],
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

// --- Delivery ----------------------------------------------------------------------
const labels = t('en');
const OWN_DOMAIN = new URL(site.website).hostname;

/** True when the From address (plain or "Name <addr>") is on the own domain or a subdomain of it. */
function isOwnDomainSender(from: string): boolean {
  const address = (from.match(/<([^>]+)>/)?.[1] ?? from).trim().toLowerCase();
  const domain = address.split('@')[1] ?? '';
  return domain === OWN_DOMAIN || domain.endsWith(`.${OWN_DOMAIN}`);
}

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

function composeStartEmail(e: StartEnquiry): { subject: string; text: string } {
  const f = labels.start.form;
  const route = e.role === 'buyer' ? 'Buying requirement' : 'Supply opportunity';
  const product = labels.products.items.find((p) => p.key === e.product)?.name ?? e.product;
  const subject = `Start page: ${route} · ${product} · ${e.company}`.slice(0, 200);
  const rows: [string, string | undefined][] = [
    ['Route', route],
    ['Name', e.name],
    ['Company', e.company],
    ['Email', e.email],
    ['Company website', e.companyWebsite],
    ['Country', e.country],
    ['Product', product],
    [e.role === 'buyer' ? 'Required volume' : 'Available or indicative volume', `${e.volume} ${labels.form.units[e.unit]}`],
    ['One-off or recurring', e.frequency ? f.frequencies[e.frequency] : undefined],
    [e.role === 'buyer' ? 'Delivery location' : 'Loading or delivery location', e.location],
    [e.role === 'buyer' ? 'Preferred timing' : 'Availability period', e.period],
    ['Role in the transaction', e.supplierRole ? f.supplierRoles[e.supplierRole] : undefined],
    ['Source page', e.sourcePage],
    ['Site language', e.lang.toUpperCase()],
  ];
  const text = [
    'New enquiry submitted through the start page of the Valtrax Energy website.',
    '',
    ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    '',
    e.role === 'buyer' ? 'Specification and delivery basis:' : 'Product specification and terms:',
    e.notes ?? '(not provided)',
    '',
    'Reply directly to this email to respond to the sender.',
  ].join('\n');
  return { subject, text };
}

async function deliver(
  e: Enquiry | StartEnquiry,
  kind: FormKind,
  config: { apiKey: string; to: string[]; from: string },
) {
  const { subject, text } = kind === 'start' ? composeStartEmail(e as StartEnquiry) : composeEmail(e as Enquiry);
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
  const kind: FormKind = input.form === 'start' ? 'start' : 'contact';
  const role = typeof input.role === 'string' ? input.role : undefined;
  const reply = (status: Status, extra?: Record<string, unknown>) => respond(request, lang, status, extra, kind, role);

  // Honeypot: a hidden field that people never see or fill in.
  if (typeof input.website === 'string' && input.website.trim() !== '') {
    log('rejected', { reason: 'honeypot' });
    return reply('invalid');
  }

  // Time-to-submit check (field is set by the page script; absent for no-JS submissions).
  const startedAt = Number(input.startedAt);
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_MS) {
    log('tooFast');
    return reply('tooFast');
  }

  const now = Date.now();
  if (rateLimited(clientAddress || request.headers.get('x-real-ip') || 'unknown', now)) {
    log('rateLimited');
    return reply('rateLimited');
  }

  const result = kind === 'start' ? validateStartEnquiry(input) : validateEnquiry(input);
  if (!result.ok) {
    log('invalid', { form: kind, fields: Object.keys(result.errors).join(',') });
    return reply('invalid', { errors: result.errors });
  }

  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL) {
    // Honest failure: nothing is sent and the visitor is told so.
    log('unavailable', { reason: 'not-configured' });
    return reply('unavailable');
  }
  if (!isOwnDomainSender(CONTACT_FROM_EMAIL)) {
    // The sender must be an address on the company's own (Resend-verified) domain.
    log('unavailable', { reason: 'sender-not-own-domain' });
    return reply('unavailable');
  }

  try {
    // Single fixed recipient (site.formRecipient); the visitor's address is only used as Reply-To.
    const delivery = await deliver(result.data, kind, {
      apiKey: RESEND_API_KEY,
      to: [site.formRecipient],
      from: CONTACT_FROM_EMAIL,
    });
    if (!delivery.ok) {
      log('error', { provider: delivery.httpStatus });
      return reply('error');
    }
  } catch (err) {
    log('error', { provider: err instanceof Error ? err.name : 'unknown' });
    return reply('error');
  }

  const type = 'role' in result.data ? result.data.role : result.data.enquiryType;
  log('sent', { form: kind, type, product: result.data.product, lang: result.data.lang });
  return reply('sent');
};

export const ALL: APIRoute = () =>
  new Response(null, { status: 405, headers: { allow: 'POST' } });
