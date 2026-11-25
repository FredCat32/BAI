// Build-time prerendering: render every route to static HTML so search engines
// and link previews see the real content, title, and meta tags without running
// JavaScript. Runs after `vite build` (client) and `vite build --ssr` (server).
//
// Output uses Vercel's cleanUrls: /about is served from dist/about.html.
// dist/spa.html is the untouched shell, used as the fallback for unknown routes.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const { render, routes } = await import(path.join(root, 'dist-ssr', 'entry-server.js'))

fs.writeFileSync(path.join(dist, 'spa.html'), template)

const attr = (tags, name, key) => {
  const re = new RegExp(`<meta[^>]*${key}="${name}"[^>]*content="([^"]*)"`)
  return tags.match(re)?.[1]
}

for (const url of routes) {
  const { html, helmet } = render(url)
  const title = helmet.title.toString()
  const meta = helmet.meta.toString()
  const link = helmet.link.toString()

  // Page-level values from Helmet replace the generic defaults in index.html.
  let page = template.replace(/<title>[\s\S]*?<\/title>/, title)
  for (const prop of ['og:title', 'og:description', 'og:type']) {
    if (meta.includes(`property="${prop}"`)) {
      page = page.replace(new RegExp(`\\s*<meta property="${prop}"[^>]*>`), '')
    }
  }
  const pageTitle = attr(meta, 'og:title', 'property')
  const pageDesc = attr(meta, 'description', 'name')
  if (pageTitle) page = page.replace(/(<meta property="twitter:title" content=")[^"]*/, `$1${pageTitle}`)
  if (pageDesc) page = page.replace(/(<meta property="twitter:description" content=")[^"]*/, `$1${pageDesc}`)
  page = page
    .replace('</head>', `    ${meta}\n    ${link}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`
  fs.mkdirSync(path.dirname(path.join(dist, file)), { recursive: true })
  fs.writeFileSync(path.join(dist, file), page)
  console.log(`prerendered ${url} -> dist/${file}`)
}
