/**
 * Start page (/start): route choice, the buyer/supplier calls to action and the enquiry form.
 * Everything works without JavaScript; this adds route switching, inline validation, an honest
 * delivery state and anonymous analytics events (route and position only, never form content).
 */
import { track } from '@vercel/analytics';

type Role = 'buyer' | 'supplier';
type Code = 'required' | 'email' | 'tooLong' | 'tooShort' | 'invalid';
type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type Messages = {
  validation: Record<Code, string>;
  status: Record<'success' | 'unavailable' | 'error' | 'rateLimited' | 'invalid' | 'tooFast' | 'network', string>;
  sending: string;
  submit: Record<Role | 'none', string>;
  success: Record<Role, string>;
  summary: string;
};

const isRole = (value: unknown): value is Role => value === 'buyer' || value === 'supplier';

function safeTrack(name: string, props: Record<string, string>) {
  try {
    track(name, props);
  } catch {
    // Analytics must never break the page.
  }
}

const form = document.querySelector<HTMLFormElement>('[data-start-form]');
if (form) init(form);

function init(form: HTMLFormElement) {
  const messages = JSON.parse(form.dataset.messages ?? '{}') as Messages;
  const routes = Array.from(form.querySelectorAll<HTMLFieldSetElement>('[data-route]'));
  const roleInputs = Array.from(form.querySelectorAll<HTMLInputElement>('[data-role-input]'));
  const prompt = form.querySelector<HTMLElement>('[data-choose-prompt]');
  const summary = form.querySelector<HTMLElement>('[data-form-summary]')!;
  const status = form.querySelector<HTMLElement>('[data-form-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]')!;
  const startedAt = form.querySelector<HTMLInputElement>('[data-started-at]');
  const success = document.querySelector<HTMLElement>('[data-form-success]');
  const successText = success?.querySelector<HTMLElement>('[data-success-text]');
  const section = document.getElementById('enquiry');
  form.noValidate = true;
  let busy = false;

  const stamp = () => {
    if (startedAt) startedAt.value = String(Date.now());
  };
  stamp();

  const currentRole = (): Role | null => {
    const value = roleInputs.find((r) => r.checked)?.value;
    return isRole(value) ? value : null;
  };

  /** Show only the chosen route; its fields become required, the other route is not submitted. */
  function applyRole(role: Role | null) {
    for (const fs of routes) {
      const active = fs.dataset.route === role;
      fs.hidden = !active;
      fs.disabled = !active;
      fs.querySelectorAll<Field>('[data-route-required]').forEach((el) => (el.required = active));
    }
    if (prompt) prompt.hidden = role !== null;
    submitLabel.textContent = role ? messages.submit[role] : messages.submit.none;
    if (role) setError(roleInputs[0], null);
  }

  function selectRole(role: Role) {
    const input = roleInputs.find((r) => r.value === role);
    if (input) input.checked = true;
    applyRole(role);
  }

  // --- Errors ----------------------------------------------------------------------
  const errorEl = (name: string) => form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);

  function setError(el: Field, code: Code | null) {
    const target = errorEl(el.name);
    const group = el.type === 'radio' ? roleInputs : [el];
    for (const g of group) {
      if (code) g.setAttribute('aria-invalid', 'true');
      else g.removeAttribute('aria-invalid');
    }
    if (target) target.textContent = code ? messages.validation[code] : '';
  }

  function check(el: Field): Code | null {
    if (el.type === 'radio') return currentRole() ? null : 'required';
    const value = el.value.trim();
    if (el.required && !value) return 'required';
    if (el.validity.typeMismatch) return 'email';
    if (el.validity.patternMismatch) return 'invalid';
    if (el.validity.tooLong) return 'tooLong';
    return null;
  }

  const fields = () =>
    Array.from(form.querySelectorAll<Field>('input, select, textarea')).filter(
      (el) => el.name && el.type !== 'hidden' && el.name !== 'website' && !el.matches(':disabled') && (el.type !== 'radio' || el === roleInputs[0]),
    );

  function validate(): Field | null {
    let first: Field | null = null;
    for (const el of fields()) {
      const code = check(el);
      setError(el, code);
      if (code && !first) first = el;
    }
    return first;
  }

  form.addEventListener('input', (e) => {
    const el = e.target as Field;
    if (el.getAttribute('aria-invalid') === 'true') setError(el, check(el));
  });
  form.addEventListener('change', (e) => {
    const el = e.target as Field;
    if (el.type === 'radio' && isRole(el.value)) {
      applyRole(el.value);
      safeTrack('start_route_selected', { role: el.value, position: 'form' });
      return;
    }
    if (el.getAttribute('aria-invalid') === 'true') setError(el, check(el));
  });

  // --- Calls to action ---------------------------------------------------------------
  document.querySelectorAll<HTMLAnchorElement>('[data-start-cta]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const role = link.dataset.startCta;
      if (!isRole(role) || !section) return;
      e.preventDefault();
      if (success && !success.hidden) showForm();
      selectRole(role);
      safeTrack('start_cta_click', { role, position: link.dataset.ctaPosition ?? 'unknown' });
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      section.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      history.replaceState(null, '', '#enquiry');
      // Continue in the first field; the route is already chosen.
      window.setTimeout(() => form.querySelector<HTMLInputElement>('#sf-name')?.focus({ preventScroll: true }), reduce ? 0 : 450);
    });
  });

  const fromUrl = new URLSearchParams(location.search).get('role');
  applyRole(null);
  if (isRole(fromUrl)) selectRole(fromUrl);
  else if (currentRole()) applyRole(currentRole()); // restored by the browser after back/forward

  // --- Submit -------------------------------------------------------------------------
  function setBusy(on: boolean) {
    busy = on;
    submit.setAttribute('aria-disabled', String(on));
    const role = currentRole();
    submitLabel.textContent = on ? messages.sending : role ? messages.submit[role] : messages.submit.none;
    form.setAttribute('aria-busy', String(on));
  }

  function showSummary() {
    summary.textContent = messages.summary;
    summary.hidden = false;
  }

  function showForm() {
    if (success) success.hidden = true;
    form.hidden = false;
  }

  success?.querySelector<HTMLButtonElement>('[data-form-again]')?.addEventListener('click', () => {
    showForm();
    applyRole(null);
    stamp();
    roleInputs[0]?.focus();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (busy) return;
    status.textContent = '';
    summary.hidden = true;

    const firstInvalid = validate();
    if (firstInvalid) {
      showSummary();
      firstInvalid.focus();
      return;
    }

    const role = currentRole()!;
    const product = (form.elements.namedItem('product') as HTMLSelectElement | null)?.value ?? '';
    const payload = Object.fromEntries(new FormData(form).entries());
    setBusy(true);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'content-type': 'application/json', accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { status?: string; errors?: Record<string, string> };

      if (res.ok && data.status === 'sent') {
        safeTrack('start_enquiry_sent', { role, product });
        form.reset();
        applyRole(null);
        stamp();
        if (success && successText) {
          successText.textContent = messages.success[role];
          form.hidden = true;
          success.hidden = false;
          success.focus();
        } else {
          status.textContent = messages.success[role];
        }
        return;
      }
      if (data.errors) {
        let first: Field | null = null;
        for (const [name, code] of Object.entries(data.errors)) {
          const el = form.elements.namedItem(name);
          const target = el instanceof RadioNodeList ? roleInputs[0] : el;
          if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) {
            setError(target, (code in messages.validation ? code : 'invalid') as Code);
            first ??= target;
          }
        }
        showSummary();
        (first ?? summary).focus();
        return;
      }
      const key = (data.status ?? 'error') as keyof Messages['status'];
      status.textContent = messages.status[key] ?? messages.status.error;
    } catch {
      status.textContent = messages.status.network;
    } finally {
      setBusy(false);
    }
  });
}
