# Domains, DNS and form e-mail: setup plan

Status 2026-10-28. The website domain and the Resend records are live (sections 1 and 2). DNS is managed
at **TransIP**; mail runs on **Microsoft 365** and must keep working throughout.

Verification values are generated per account/project. **Never type them from memory or from
this document: copy them from the Vercel and Resend dashboards.** Where this file shows a value,
it is marked as an example.

## 0. Before changing anything

The current records could not be read from the build environment (outbound DNS was blocked),
so take a snapshot first:

1. TransIP control panel → Domains → `valtraxenergy.com` → DNS: export or screenshot all records.
2. Do the same for `valtraxenergy.nl`.
3. Note in particular the Microsoft 365 records for `valtraxenergy.com`, which must stay unchanged:
   - `MX @` → `<tenant>.mail.protection.outlook.com` (exact value per tenant)
   - `TXT @` with the SPF record (`v=spf1 include:spf.protection.outlook.com -all` or similar)
   - `CNAME selector1._domainkey` and `selector2._domainkey` (DKIM)
   - `TXT _dmarc` (DMARC policy)
   - `CNAME autodiscover` (if present)
4. Check for an existing `A`/`AAAA`/`CNAME` on `@` and `www` (for example a TransIP parking page). These are
   the only records that will be replaced.

## 1. Website: valtraxenergy.com on Vercel

In Vercel (project `valtrax-energy`) → Settings → Domains:

| Domain                  | Setting in Vercel                                  |
| ----------------------- | -------------------------------------------------- |
| `valtraxenergy.com`     | Primary production domain                          |
| `www.valtraxenergy.com` | Redirect to `valtraxenergy.com` (308, permanent)   |
| `valtraxenergy.nl`      | Redirect to `valtraxenergy.com` (308, permanent)   |
| `www.valtraxenergy.nl`  | Redirect to `valtraxenergy.com` (308, permanent)   |

After adding each domain, Vercel shows the exact DNS records it needs (also via
`vercel domains inspect <domain>`). Add those at TransIP:

| Zone                | Name  | Type  | Value                                                             |
| ------------------- | ----- | ----- | ----------------------------------------------------------------- |
| `valtraxenergy.com` | `@`   | A     | value shown by Vercel (Vercel docs example: `76.76.21.21`)        |
| `valtraxenergy.com` | `www` | CNAME | value shown by Vercel (docs example: `cname.vercel-dns-0.com`)     |
| `valtraxenergy.nl`  | `@`   | A     | value shown by Vercel                                             |
| `valtraxenergy.nl`  | `www` | CNAME | value shown by Vercel                                             |

- Replace only an existing `A`/`AAAA`/`CNAME` on `@`/`www`. Leave MX, TXT (SPF), DKIM CNAMEs,
  DMARC and autodiscover unchanged.
- Remove any `AAAA` record on `@`/`www` that points elsewhere, otherwise IPv6 visitors bypass Vercel.
- If Vercel asks for a `TXT _vercel` ownership record, add exactly the value it shows.
- `vercel.json` also contains host-based 308 redirects for `www.valtraxenergy.com`,
  `valtraxenergy.nl` and `www.valtraxenergy.nl`. They take effect once those domains point to
  this project, and back up the dashboard redirects.
- Does `valtraxenergy.nl` receive e-mail? If it has MX records, leave them untouched as well.

The site URL is already `https://valtraxenergy.com` (`SITE_URL` default in `astro.config.mjs`),
so canonical URLs, hreflang and the sitemap already use the preferred domain.

## 2. Form e-mail: Resend on the root domain (done)

The form sends one e-mail per enquiry **to info@valtraxenergy.com** (fixed in
`src/config/site.ts`), **from** `Valtrax Energy website <website@valtraxenergy.com>`, with the
visitor's validated address as **Reply-To**. Microsoft 365 remains the mailbox.

Set up on 2026-10-28:

- Resend domain: `valtraxenergy.com` (root domain), region **North Virginia (us-east-1)**.
  Status: Verified. The Resend account is held by webmaister (the web agency), which matters
  for the processor chain in the privacy review.
- Records added at TransIP (zone valtraxenergy.com), copied from Resend:

  | Name                 | Type  | Value                        |
  | -------------------- | ----- | ---------------------------- |
  | `resend._domainkey`  | TXT   | DKIM public key from Resend  |
  | `send`               | CNAME | `send.forge.rmta.net.`       |
  | `rsend`              | CNAME | `rsend.forge.rmta.net.`      |

  None of these are on `@`, so the Microsoft 365 MX, SPF, DKIM and DMARC records are untouched.
- Vercel environment variables: `RESEND_API_KEY` (Production only, sensitive) and
  `CONTACT_FROM_EMAIL` (Production and Preview). Preview deployments have no key, so the form
  there shows "temporarily unavailable" and sends nothing.

Test after each change: send **one** clearly labelled enquiry with synthetic data, for example
name "TEST Valtrax website" and message "Test enquiry, please ignore".

- "Thank you, sent" only means Resend accepted the message.
- Confirm actual delivery in the info@ mailbox in Microsoft 365, including the Junk folder,
  and check that Reply-To shows the test sender.
- Check Resend → Emails for the delivery status.

## 3. After DNS is live

- Visit `https://valtraxenergy.com`, `https://www.valtraxenergy.com`, `https://valtraxenergy.nl`
  and `https://www.valtraxenergy.nl`. Check the 308 redirects and valid certificates.
- In a private browser window, check DevTools → Application: no cookies and no local or session storage
  (see the Cookie Policy review item).
- Production indexing (`SITE_INDEXING=true`) only after the legal review items in
  `src/legal/en.ts` are resolved; the build refuses otherwise. Do not submit the sitemap before.
