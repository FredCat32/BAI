import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { posts } from './pages/blog/BlogPost'
import locations from './pages/locations/locations'

export const routes = [
  '/',
  '/about',
  '/tech',
  '/contact',
  '/blog',
  ...Object.keys(posts).map((id) => `/blog/${id}`),
  ...locations.map((l) => `/${l.slug}`),
]

export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  )
  return { html, helmet: helmetContext.helmet }
}
