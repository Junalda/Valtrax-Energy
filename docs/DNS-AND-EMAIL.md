# Domains, DNS and form e-mail: setup plan

Status 2026-10-22. Nothing below has been changed in DNS, Vercel or Resend yet. DNS is managed
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

## 2. Form e-mail: Resend on a sending subdomain

The form sends one e-mail per enquiry **to info@valtraxenergy.com** (fixed in
`src/config/site.ts`), **from** an address on a Resend-verified domain, with the visitor's
validated address as **Reply-To**. Microsoft 365 remains the mailbox.

Recommended: verify a **subdomain** in Resend, for example `notify.valtraxenergy.com`. Then:

- the root domain's SPF record (Microsoft 365) is not touched;
- there is never a second SPF record on the same host name;
- sending reputation is separated from normal office e-mail.

Steps:

1. Resend → Domains → Add domain `notify.valtraxenergy.com`. Choose region **eu-west-1
   (Ireland)** unless there is a reason not to. The region is part of the generated MX value.
2. Resend shows the records. With a subdomain they are typically:

   | Name (at TransIP, zone valtraxenergy.com) | Type | Value                                           |
   | ----------------------------------------- | ---- | ----------------------------------------------- |
   | `resend._domainkey.notify`                | TXT  | DKIM public key shown by Resend                 |
   | `send.notify`                             | MX   | `feedback-smtp.<region>.amazonses.com` (priority as shown) |
   | `send.notify`                             | TXT  | SPF value shown by Resend (copy exactly) |

   Copy names and values exactly from Resend. Some DNS panels need a trailing dot on the MX
   target. None of these records are on `@`, so they cannot conflict with Microsoft 365.
3. Wait for "Verified" in Resend.
4. DMARC: the existing `_dmarc.valtraxenergy.com` policy also applies to the subdomain. Resend
   signs with DKIM `d=notify.valtraxenergy.com`, which aligns with the organisational domain under
   relaxed alignment. Do not create a separate `_dmarc.notify` record unless intended.
5. Vercel → Settings → Environment Variables (Production, and Preview if testing there):
   - `RESEND_API_KEY`: a Resend API key with "Sending access" only.
   - `CONTACT_FROM_EMAIL`: for example `Valtrax Energy website <website@notify.valtraxenergy.com>`.
     The code refuses a sender that is not on valtraxenergy.com or a subdomain.
6. Redeploy, then send **one** clearly labelled test enquiry with synthetic data, for example
   name "TEST Valtrax website" and message "Test enquiry, please ignore".
   - "Thank you, sent" only means Resend accepted the message.
   - Confirm actual delivery in the info@ mailbox in Microsoft 365, including the Junk folder,
     and check that Reply-To shows the test sender.
   - Check Resend → Emails for the delivery status.

If Resend is not used after all, the form keeps showing "temporarily unavailable" and sends
nothing.

## 3. After DNS is live

- Visit `https://valtraxenergy.com`, `https://www.valtraxenergy.com`, `https://valtraxenergy.nl`
  and `https://www.valtraxenergy.nl`. Check the 308 redirects and valid certificates.
- In a private browser window, check DevTools → Application: no cookies and no local or session storage
  (see the Cookie Policy review item).
- Production indexing (`SITE_INDEXING=true`) only after the legal review items in
  `src/legal/en.ts` are resolved; the build refuses otherwise. Do not submit the sitemap before.
