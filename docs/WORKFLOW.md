# Release workflow: staging first, live after approval

| Branch    | Vercel environment | Address                            | Indexed |
| --------- | ------------------ | ---------------------------------- | ------- |
| `staging` | Preview            | https://staging.valtraxenergy.com  | No      |
| `main`    | Production         | https://valtraxenergy.com          | Yes     |

1. Every change is made on a short-lived branch (for example `claude/...`) and opened as a
   pull request **into `staging`**. After the checks (`npm run check`, build, tests) it is
   merged into `staging`, and Vercel deploys it to staging.valtraxenergy.com.
2. The owner reviews staging. Only after the owner explicitly says "merge" is a pull request
   from `staging` **into `main`** opened and merged. Vercel then deploys valtraxenergy.com.
3. Never commit or merge directly to `main` without that approval.

Staging builds are Vercel previews, so they are always `noindex` with an empty sitemap, show a
"Staging" banner at the top of every page, and form e-mails get `[STAGING]` in the subject.

Form delivery on staging needs `RESEND_API_KEY` for the Preview environment (Vercel →
Settings → Environment Variables). Without it the staging form reports "temporarily
unavailable" and sends nothing.

DNS (TransIP, zone valtraxenergy.com): `staging` CNAME `964a2fc4d37e159d.vercel-dns-016.com.`
(value shown by Vercel for this project).
