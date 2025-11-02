# 🌿 Greenscape Landscaping Demo

A responsive, SEO-optimized demo built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **TypeScript** for local service businesses.

## 🚀 Tech Stack
- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion (client components)
- next-sitemap (sitemap + robots.txt)

## 🛠️ Scripts
```bash
npm install
npm run dev
npm run build
npm run export
npm run sitemap
```

## 📁 Structure
```
src/
  app/
    layout.tsx
    page.tsx
    services/
      page.tsx
      [slug]/page.tsx
    contact/page.tsx
  components/
  styles/globals.css
```

## ⚙️ next.config.js
```js
export default { output: 'export', images: { unoptimized: true }, trailingSlash: true };
```

## 🧭 Static Export Notes
- Provide `generateStaticParams` for `/services/[slug]`.
- In Next 15, `params` may be a Promise; `const { slug } = await params`.

## 🌐 SEO
- Use Metadata API in `layout.tsx` and per-page overrides.
- Generate sitemap/robots with `next-sitemap`.

## 🗺️ Map Options
- Static image (fastest)
- Iframe embed (interactive, no API)
- JS API via `@react-google-maps/api` (requires key)

## 📦 Deploy
Upload the `/out` folder (including `/_next/static/**`) to your host (Hostinger `public_html`, Netlify, Vercel, etc.).

© 2025 Chris Owens / Elevate DevWorks. All rights reserved.
