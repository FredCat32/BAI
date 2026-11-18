# Deployment

The site is a static Vite/React build hosted on **Vercel**, with the code on GitHub at `FredCat32/BAI`.

> The previous DigitalOcean droplet (Nginx + PM2 + Express) was decommissioned. `deploy.sh`, `server-setup.sh`, and `nginx-config.conf` are legacy files and no longer used.

## How deploys work

1. Commit and push to `main`.
2. Vercel builds with `npm run build` and publishes `dist/`.
3. The production domains `berksai.com` and `www.berksai.com` update automatically.

Pushes to other branches create preview deployments with their own URLs.

Config lives in `vercel.json`:
- `buildCommand`: `npm run build`
- `outputDirectory`: `dist`
- Rewrite of every route to `/index.html` so React Router deep links (`/about`, `/blog/...`) work
- `Cache-Control: public, max-age=31536000, immutable` on `/assets/*`

## Local check before pushing

```bash
npm run build     # must succeed
npm run preview   # look at the production build locally
npm run lint
```

## Domain and DNS

DNS is managed at **Namecheap** (Advanced DNS). Vercel expects:

| Type  | Host  | Value |
| ----- | ----- | ----- |
| A     | `@`   | the IP shown under the project's Settings > Domains |
| CNAME | `www` | the project-specific target shown under Settings > Domains |

Notes:
- Use the exact values Vercel shows in Settings > Domains for this project. They are project-specific and can change.
- There must be **no** `A` record for `www` alongside the CNAME. A leftover `A www` pointing at the old droplet is what kept `www` invalid.
- The old droplet IP (167.99.49.15) should not appear on any record that serves the website. The `forms` subdomain also pointed at it, so `forms.berksai.com` (the contact form linked from the site) will not work unless that service is rehosted.

### Email records: do not delete

Email is Google Workspace plus SendGrid. Keep these records:
- MX records for Google
- `TXT @` SPF (`v=spf1 include:_spf.google.com ~all`)
- `TXT google._domainkey` DKIM
- `TXT _dmarc` DMARC
- SendGrid `CNAME` records (`em...`, `s1._domainkey`, `s2._domainkey`)
- Google site verification `TXT` and the Google-hosted `CNAME`

## Environment variables

None are needed for the static site. If the chatbot backend is brought back, `ANTHROPIC_API_KEY` and `DAILY_BUDGET_CAP` must be set in Vercel (Settings > Environment Variables), never committed. See `CHATBOT-README.md`.

## Rollback

In the Vercel dashboard, open Deployments, pick a previous good deployment, and choose Promote to Production (or Instant Rollback).

## Troubleshooting

- **Domain shows "Invalid Configuration":** compare the Namecheap records to Settings > Domains, remove conflicting `A`/`AAAA`/`CNAME` records for the same host, then press Refresh. Propagation can take a few minutes to a few hours.
- **404 on a deep link:** confirm `vercel.json` still contains the SPA rewrite.
- **Build fails on Vercel but not locally:** check the Node version in Project Settings and the build log.
- **Old content still showing:** hard refresh. Assets are cached for a year but filenames are hashed, so new builds get new URLs.
