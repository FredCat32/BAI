# CLAUDE.md

Guidance for AI coding assistants (Claude Code, Warp/Oz) working in this repository. `WARP.md` is a symlink to this file.

## Project Overview

BerksAI is the marketing website for a small AI training and consulting business based in Oley, PA, serving Berks County and Eastern Pennsylvania.

**Positioning (keep copy consistent with this):**
1. **On-site AI prompt training is the #1 offering**, with an emphasis on ROI from tools clients already pay for.
2. AI strategy and ROI assessment.
3. Machine learning on client data, workflow automation, custom assistants, document processing, data/systems integration, leadership workshops, ongoing support.

Tools the business trains on and supports: Microsoft Copilot, ChatGPT, Claude and Claude Cowork, Google Gemini, Grok, GitHub Copilot, Perplexity.

**Content rules:**
- Do not invent statistics, client results, testimonials, or client types. The business is new; the blog post "Why I'm Starting an AI Consulting Business in Berks County" says so. Anything quantitative must have a real source.
- n8n and Activepieces are retired. Do not reference them.
- Pricing is not published on the site.
- Engagements are described as a process, not a package: look at current AI use, baseline a few real tasks, train on those tasks, re-measure, recommend a next step. Do not promise specific results, savings, or timelines.

## Development Commands

```bash
npm run dev       # Vite dev server on http://localhost:5173
npm run build     # Production build to dist/
npm run preview   # Preview the production build
npm run lint      # ESLint
```

The chatbot backend scripts (`npm run dev:server`, `npm run dev:all`) still exist but the chatbot is not currently shown on the site. See `CHATBOT-README.md`.

## Hosting and Deployment

- Hosted on **Vercel**. The `berksai.com` and `www.berksai.com` domains are attached to the Vercel project; DNS is managed at Namecheap.
- Pushing to `main` on GitHub (`FredCat32/BAI`) triggers a production deploy automatically.
- `vercel.json` provides the SPA rewrite (all routes to `index.html`) and long-term cache headers for `/assets/*`.
- The old DigitalOcean droplet is gone. `deploy.sh`, `server-setup.sh`, and `nginx-config.conf` are legacy and unused.
- Email is Google Workspace (@berksai.com). Do not remove the MX, SPF, DKIM, DMARC, SendGrid, or Google verification DNS records.

See `DEPLOYMENT.md` for details.

## Architecture

React 18 single-page app, Vite 4, React Router 6, `react-helmet-async` for per-page meta tags (the app is wrapped in `HelmetProvider` in `src/main.jsx`).

### Routes (`src/App.jsx`)
- `/` Home
- `/about` About
- `/tech` Tools we train on and support
- `/contact` Contact (email and phone buttons; all "book a consultation" CTAs link here. A hosted form is planned, see ACTION-PLAN.md)
- `/blog` and `/blog/:postId` Blog index and posts (post components live in `src/pages/blog/posts/`)

### Components
- `src/components/Header.jsx` responsive header and nav
- `src/components/BlogAuthor.jsx` author box used in blog posts
- `src/components/ChatbotWidget/` chatbot UI (currently not rendered; see below)

### Styling
Each page or component has a co-located CSS file. Theme variables live in `src/index.css`:

- Palette: off-white background (`--color-bg`), deeper cream for alternating sections (`--color-bg-alt`), lighter card surface (`--color-surface`), warm near-black text (`--color-ink`), muted body text (`--color-muted`), warm borders (`--color-border`), and the logo red as the single accent (`--color-accent`).
- Headings use a serif stack (Georgia); body uses the system sans stack.
- Legacy variable names (`--color-black`, `--color-white`, `--color-gray`, `--color-gray-light`, `--color-red`) are aliased to the new palette so older CSS keeps working. Prefer the new names in new code. The aliases are inverted from their names: `--color-black` is the light background and `--color-white` is the dark text.
- The header logo uses `mix-blend-mode: multiply` so its white background disappears on the off-white header.

Avoid generic AI-site styling (gradient text, glows, emoji icons, dark blue/purple themes).

### Public assets
`public/` holds `logo.webp`/`logo.png`, `headshot.webp`/`.png`, `about-image.webp`/`.jpg`, `robots.txt`, and `sitemap.xml`. Use the WebP files in code and include `width`/`height` on images. `og-image.jpg` is referenced in some meta tags but does not exist yet. Favicons are a square red "B" mark (`favicon.svg` is the source; `favicon.ico`, `favicon-48.png`, `favicon-96.png`, `icon-192.png`, `icon-512.png`, and `apple-touch-icon.png` are generated from it). Do not use the wide `logo.png` as a favicon; Google needs a square icon.

### SEO
- Per-page title, description, and canonical via `Helmet` in each page component.
- Update `public/sitemap.xml` whenever a page or blog post is added.
- `index.html` contains the Organization/ProfessionalService JSON-LD.

## Chatbot (currently disabled)

A Claude-powered chatbot exists (`server/` Express backend plus `src/components/ChatbotWidget/`) but is not mounted in `App.jsx` and the backend is not deployed, because its in-memory rate limiting and budget tracking do not work on Vercel serverless functions. Re-enabling it means moving the backend to serverless functions with external state (for example Vercel KV/Redis) or hosting it separately. Details in `CHATBOT-README.md`.

## Other docs

- `DEPLOYMENT.md` Vercel and DNS setup
- `CHATBOT-README.md` chatbot design and how to bring it back
- `ACTION-PLAN.md` and `FULL-AUDIT-REPORT.md` March 2026 SEO audit and task list, with status notes at the top
