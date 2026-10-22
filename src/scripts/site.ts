/**
 * Progressive enhancements only. All content and navigation work without JavaScript.
 *  - mobile menu (aria-expanded, Escape, focus return)
 *  - language switch keeps the current section anchor
 *  - current-section indicator in the navigation
 *  - enquiry type preselection from the buyer/supplier blocks
 *  - enquiry form: localised validation and honest delivery states
 */

// --- Mobile menu ------------------------------------------------------------------
const header = document.querySelector<HTMLElement>('[data-header]');
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
const toggleLabel = toggle?.querySelector<HTMLElement>('.menu-toggle__label');
const desktop = window.matchMedia('(min-width: 80rem)');

function setMenu(open: boolean, returnFocus = false) {
  if (!header || !toggle) return;
  toggle.setAttribute('aria-expanded', String(open));
  header.toggleAttribute('data-open', open);
  if (toggleLabel) toggleLabel.textContent = (open ? toggleLabel.dataset.labelClose : toggleLabel.dataset.labelOpen) ?? '';
  if (!open && returnFocus) toggle.focus();
}

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  setMenu(open);
  if (open) menu?.querySelector<HTMLElement>('a')?.focus();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header?.hasAttribute('data-open')) setMenu(false, true);
});
menu?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('a')) setMenu(false);
});
document.addEventListener('click', (e) => {
  if (header?.hasAttribute('data-open') && !header.contains(e.target as Node)) setMenu(false);
});
desktop.addEventListener('change', (e) => {
  if (e.matches) setMenu(false);
});

// --- Current section + language switch anchor ------------------------------------
const switchLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]'));
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
const sections = navLinks
  .map((a) => document.getElementById(a.dataset.navLink ?? ''))
  .filter((el): el is HTMLElement => !!el);

function setAnchor(id: string | null) {
  for (const link of switchLinks) {
    const url = new URL(link.href);
    url.hash = id ? `#${id}` : '';
    link.href = url.toString();
  }
  for (const a of navLinks) {
    if (a.dataset.navLink === id) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  }
}

if (sections.length && 'IntersectionObserver' in window) {
  const visible = new Map<string, number>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
      let best: string | null = null;
      let bestRatio = 0;
      for (const [id, ratio] of visible) {
        if (ratio > bestRatio) {
          best = id;
          bestRatio = ratio;
        }
      }
      setAnchor(best);
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.01, 0.5, 1] },
  );
  sections.forEach((s) => observer.observe(s));
}
if (location.hash) setAnchor(location.hash.slice(1));

// --- Enquiry form -----------------------------------------------------------------
type Messages = {
  validation: Record<'required' | 'email' | 'tooLong' | 'tooShort' | 'invalid', string>;
  status: Record<'success' | 'unavailable' | 'error' | 'rateLimited' | 'invalid' | 'tooFast' | 'network', string>;
  sending: string;
  submit: string;
  summary: string;
};

const form = document.querySelector<HTMLFormElement>('[data-enquiry-form]');

function preselectType(value: string | null) {
  const select = form?.querySelector<HTMLSelectElement>('[data-enquiry-select]');
  if (!select || !value) return;
  if (Array.from(select.options).some((o) => o.value === value)) select.value = value;
}

preselectType(new URLSearchParams(location.search).get('type'));
document.querySelectorAll<HTMLAnchorElement>('[data-enquiry-type]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    preselectType(link.dataset.enquiryType ?? null);
    const contact = document.getElementById('contact');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    contact?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    history.replaceState(null, '', '#contact');
    // Move focus to the first empty field so keyboard users continue in the form.
    window.setTimeout(() => form?.querySelector<HTMLInputElement>('#f-name')?.focus({ preventScroll: true }), reduce ? 0 : 450);
  });
});

if (form) initForm(form);

function initForm(form: HTMLFormElement) {
  const messages = JSON.parse(form.dataset.messages ?? '{}') as Messages;
  const status = form.querySelector<HTMLElement>('[data-form-status]')!;
  const summary = form.querySelector<HTMLElement>('[data-form-summary]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]')!;
  const startedAt = form.querySelector<HTMLInputElement>('[data-started-at]');
  if (startedAt) startedAt.value = String(Date.now());
  form.noValidate = true;
  let busy = false;

  const fields = () =>
    Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input, select, textarea')).filter(
      (el) => el.name && el.type !== 'hidden' && el.name !== 'website',
    );

  const errorEl = (name: string) => form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);

  function setError(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, code: keyof Messages['validation'] | null) {
    const target = errorEl(el.name);
    if (code) {
      el.setAttribute('aria-invalid', 'true');
      if (target) target.textContent = messages.validation[code];
    } else {
      el.removeAttribute('aria-invalid');
      if (target) target.textContent = '';
    }
  }

  function check(el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): keyof Messages['validation'] | null {
    const v = el.validity;
    const value = el.value.trim();
    if (el.required && !value) return 'required';
    if (v.typeMismatch) return 'email';
    if (v.patternMismatch) return 'invalid';
    if (el instanceof HTMLTextAreaElement && value && el.minLength > 0 && value.length < el.minLength) return 'tooShort';
    if (v.tooLong) return 'tooLong';
    return null;
  }

  function validate(): HTMLElement | null {
    let first: HTMLElement | null = null;
    for (const el of fields()) {
      const code = check(el);
      setError(el, code);
      if (code && !first) first = el;
    }
    return first;
  }

  // Revalidate a field once the user has interacted with it after an error.
  form.addEventListener('input', (e) => {
    const el = e.target as HTMLInputElement;
    if (el.getAttribute('aria-invalid') === 'true') setError(el, check(el));
  });
  form.addEventListener('change', (e) => {
    const el = e.target as HTMLSelectElement;
    if (el.getAttribute('aria-invalid') === 'true') setError(el, check(el));
  });

  function showStatus(state: 'success' | 'error' | '', text: string) {
    status.dataset.state = state;
    status.textContent = text;
  }

  function setBusy(on: boolean) {
    busy = on;
    submit.setAttribute('aria-disabled', String(on));
    submitLabel.textContent = on ? messages.sending : messages.submit;
    form.setAttribute('aria-busy', String(on));
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (busy) return;
    showStatus('', '');
    summary.hidden = true;

    const firstInvalid = validate();
    if (firstInvalid) {
      // Open the optional section if the problem is inside it.
      firstInvalid.closest('details')?.setAttribute('open', '');
      summary.textContent = messages.summary;
      summary.hidden = false;
      firstInvalid.focus();
      return;
    }

    setBusy(true);
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { status?: string; errors?: Record<string, string> };

      if (res.ok && data.status === 'sent') {
        form.reset();
        if (startedAt) startedAt.value = String(Date.now());
        showStatus('success', messages.status.success);
        return;
      }
      if (data.errors) {
        let first: HTMLElement | null = null;
        for (const [name, code] of Object.entries(data.errors)) {
          const el = form.elements.namedItem(name);
          if (el instanceof HTMLElement && 'value' in el) {
            setError(el as HTMLInputElement, (code in messages.validation ? code : 'invalid') as keyof Messages['validation']);
            first ??= el;
          }
        }
        first?.closest('details')?.setAttribute('open', '');
        summary.textContent = messages.summary;
        summary.hidden = false;
        summary.focus();
        return;
      }
      const key = (data.status ?? 'error') as keyof Messages['status'];
      showStatus('error', messages.status[key] ?? messages.status.error);
    } catch {
      showStatus('error', messages.status.network);
    } finally {
      setBusy(false);
    }
  });
}
