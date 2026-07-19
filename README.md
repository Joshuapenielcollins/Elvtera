# ELVTERA E-Solutions — Enterprise Website

**Engineering Business Systems That Scale.**

Production-ready corporate website for ELVTERA E-Solutions, a business
technology company delivering ERP, CRM, custom software, business process
automation, AI business solutions and cloud infrastructure.

## Tech stack

- **Next.js 15** (App Router, Server Components, static prerendering)
- **TypeScript** (strict)
- **Tailwind CSS 4** (design tokens in `app/globals.css`)
- **Framer Motion** (subtle fade-up reveals and counters only)
- **Lucide** icons · **Manrope / Inter** via `next/font`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — all routes prerender statically
npm start
```

## Architecture

```
app/                    Routes (one folder per page; [slug] for dynamic pages)
  services/[slug]/      11 SEO-optimized service pages
  industries/[slug]/    10 SEO-optimized industry pages
  case-studies/[slug]/  Case study detail pages
  sitemap.ts, robots.ts Generated from content — never drift
components/
  layout/               Header, footer, logo
  sections/             Page building blocks (heroes, cards, stats, FAQ, CTA)
  motion/               Reveal + Counter (the site's only animation primitives)
  forms/                Contact + careers forms (client components)
  ui/                   Button (cva), accordion, icon registry
content/                Typed marketing content — services, industries,
                        case studies, insights, testimonials, FAQs
lib/                    Site config, SEO/schema helpers, utils
```

**Adding a service, industry or case study is a data change, not a code
change** — add an entry to the relevant file in `content/` and the page,
sitemap entry, footer link and cards are generated automatically.

## Design system

| Token       | Value     | Use                          |
| ----------- | --------- | ---------------------------- |
| `primary`   | `#0F172A` | Headings, footer, buttons    |
| `secondary` | `#2563EB` | Links, actions, icon badges  |
| `accent`    | `#FF6B00` | Sparse emphasis only         |
| `surface`   | `#F8FAFC` | Alternating section bg       |

Headings: **Manrope** · Body: **Inter** · Cards: `rounded-2xl`, hairline
border, soft layered shadows. Light theme only, by design.

## SEO & accessibility

- Per-page metadata + canonical URLs (`lib/seo.ts`), OG/Twitter tags
- JSON-LD: Organization (global), Service, FAQPage, BreadcrumbList, ContactPage
- Semantic HTML, single `h1` per page, skip-to-content link, visible focus
  states, `prefers-reduced-motion` respected — WCAG AA targeted
- `sitemap.xml` and `robots.txt` generated at build time

## Before launch

- [ ] Wire `components/forms/contact-form.tsx` and `application-form.tsx`
      to a CRM/API endpoint (marked with `TODO`)
- [ ] Replace placeholder wordmarks in `components/sections/logo-row.tsx`
      with licensed client logos
- [ ] Swap the map placeholder on `/contact` for a Google Maps embed
- [ ] Have counsel review `/privacy-policy` and `/terms` drafts
- [ ] Confirm final contact details in `lib/site.ts` and the production
      domain in `site.url`
