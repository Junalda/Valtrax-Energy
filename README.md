# Valtrax Energy website

One-page bilingual website (English primary, Dutch at `/nl/`) for Valtrax Energy, a trading
name of Northbridge Trading B.V. Built with Astro 7 and TypeScript, deployed on Vercel.

- All pages are prerendered static HTML. The only server code is the enquiry endpoint
  (`POST /api/enquiry`), which runs as a Vercel function.
- No UI framework, analytics, cookies or third-party scripts. Fonts are self-hosted (OFL).
- Client JavaScript is a single small module (mobile menu, section-aware language switch,
  enquiry-type preselection, form submission). All content works without it.

Owner decisions still open before launch: see **[docs/OWNER-REVIEW.md](docs/OWNER-REVIEW.md)**.

## Requirements

- Node.js **≥ 22.23.4** (required by Astro 7.4; Node 24 LTS recommended, see `.nvmrc`)
- npm

## Commands

| Command             | Action                                                   |
| ------------------- | -------------------------------------------------------- |
| `npm install`       | Install dependencies                                     |
| `npm run dev`       | Dev server at `http://localhost:4321` (includes the API) |
| `npm run check`     | Astro + TypeScript diagnostics                           |
| `npm run build`     | Production build (`.vercel/output`)                      |
| `npm run preview`   | Preview the build (static pages)                         |

`python3 tools/build_logo_assets.py` regenerates logo variants and icons;
`node tools/generate-images.mjs` regenerates the Open Graph images (needs a local
Playwright install; see the header of that file).

## Environment variables

Copy `.env.example` to `.env` for local work. On Vercel, set them under
**Project → Settings → Environment Variables**.

| Variable             | Scope            | Purpose                                                                                                   |
| -------------------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| `SITE_URL`           | build            | Public origin for canonical URLs, hreflang, sitemap, Open Graph. Defaults to `https://valtraxenergy.com`. |
| `SITE_INDEXING`      | build            | `true` makes pages indexable. **Only takes effect when `VERCEL_ENV` is `production`** (or outside Vercel). |
| `RESEND_API_KEY`     | runtime (secret) | API key for [Resend](https://resend.com), used to deliver enquiries.                                      |
| `CONTACT_FROM_EMAIL` | runtime (secret) | Sender on the Resend-verified domain; must be on valtraxenergy.com or a subdomain, e.g. `Valtrax Energy website <website@notify.valtraxenergy.com>`. |

If either form variable is missing (or the sender is not on the own domain), the endpoint returns **503** and the page
tells the visitor the form is unavailable and that their message was **not** sent.
A success message is shown only after Resend accepts the message and returns a message id.

The recipient is fixed in `src/config/site.ts` (`formRecipient`: info@valtraxenergy.com); the
visitor's address is only used as Reply-To. DNS and mail setup: **[docs/DNS-AND-EMAIL.md](docs/DNS-AND-EMAIL.md)**.

## Indexing: previews vs. launch

By default every build is `noindex, nofollow`, `robots.txt` disallows all crawling and the
sitemap is empty. Preview deployments stay that way even if `SITE_INDEXING=true`
(and Vercel adds its own `X-Robots-Tag: noindex` to preview URLs).

At launch:

1. Confirm the domain, then set `SITE_URL` (Production environment) if it differs from the default.
2. Set `SITE_INDEXING=true` for the **Production** environment only.
3. Redeploy production. Check that `/robots.txt` references the sitemap, `/sitemap.xml` lists
   four URLs with alternates, and page source shows `index, follow`.
4. Submit the sitemap in Google Search Console and Bing Webmaster Tools.

## Project structure

```
src/
  config/site.ts           Verified company facts, product/enquiry option keys, logo & contact slots
  i18n/en.ts, nl.ts        All copy (typed; nl must match the en structure)
  i18n/index.ts            Language helpers and localised paths
  layouts/Base.astro       <head>: meta, canonical, hreflang, Open Graph, JSON-LD
  components/              Header, Hero, About, Expertise, Products, Markets, Process,
                           Audiences, Faq, Contact (form), Footer, LanguageSwitch, Logo
  lib/structured-data.ts   Organization / WebSite / WebPage / FAQPage graph
  lib/enquiry.ts           Shared validation and limits
  pages/                   /, /nl/, /privacy/, /nl/privacy/, 404, sitemap.xml, robots.txt
  pages/api/enquiry.ts     Form endpoint (server-rendered)
  scripts/site.ts          Progressive enhancements
  styles/global.css        Design tokens and base styles
public/                    Fonts, logo variants, icons, Open Graph images (public assets only)
brand/                     Logo master file (not published)
```

### Editing content

All visible text lives in `src/i18n/en.ts` and `src/i18n/nl.ts`; change both together.
The FAQ structured data is generated from the same entries, so it always matches the page.
Products are keyed in `src/config/site.ts` (`productKeys`); the product section and the
form dropdown both come from that list.

### Logo

The supplied master logo is `brand/valtrax-logo-original.png` (transparent PNG; no vector
source was supplied). `python3 tools/build_logo_assets.py` (needs Pillow) generates:

- `public/brand/valtrax-lockup-tagline.webp` / `-tagline-light.webp`: horizontal lockup
  with OIL TRADING, used from 48rem (header / footer)
- `public/brand/valtrax-lockup.webp` / `-light.webp`: compact lockup without the
  tagline, used on phones
- `public/brand/valtrax-logo.png|webp`: full stacked logo (structured data)
- `public/favicon.ico` and `public/apple-touch-icon.png`: from the symbol

Paths and intrinsic sizes are set in `site.logo` (`src/config/site.ts`). After changing the
logo, also run `node tools/generate-images.mjs` for the Open Graph images.

## Legal pages

`/terms/`, `/privacy/`, `/cookies/` (English) and `/nl/terms/`, `/nl/privacy/`, `/nl/cookies/`
(Dutch) are rendered by `src/components/LegalPage.astro` from `src/legal/en.ts` and
`src/legal/nl.ts`. Company details come from `src/config/site.ts` through tokens such as
`{company}` and `{email}` (see `src/legal/types.ts`).

Open legal-review and provider checks are listed in each document's internal `review` array
(never rendered). A build with `SITE_INDEXING=true` **fails** while any `review` item or `[[...]]`
marker remains, so unreviewed texts cannot reach the indexed production site. Empty a `review`
array only after the item is resolved (and the text updated if needed). Update the `UPDATED` date in both files whenever the text changes, and keep
the texts in line with the actual implementation (form fields, providers, logging, storage).

## Enquiry endpoint

`POST /api/enquiry` accepts JSON (from the page script) or a regular form post (no-JS
fallback, answered with a small localised HTML page).

Protection: same-origin check, 16 KB body limit, content-type allow-list, honeypot field,
minimum fill time, per-IP rate limit (8 per 10 minutes, in memory per function instance),
server-side validation with length limits and an allow-list for every select. Input is
normalised (control characters removed) and sent as **plain-text** email with the visitor's
address as `reply_to`. Logs record the outcome, enquiry type and product only, never names,
addresses or message content.

The in-memory rate limit is best-effort on serverless. For stronger protection add a
Vercel Firewall rate-limit rule for `POST /api/enquiry`.

## Security headers

`vercel.json` sets `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
`Permissions-Policy` and HSTS, long-term caching for fonts, and `noindex` for `/api/*`.

## Confidential material

Source documents (company profile, meeting notes, registration extract, Client Information
Sheet) must never be placed in `public/` or committed. `source-materials/` is git-ignored if
you need a local working folder.
