# AGENTS — Plantilla 1 | Agencia Digital

## Project Overview

Professional landing page template for a digital marketing agency. Built with Astro + Tailwind CSS, deployable to Cloudflare Pages. Includes standalone HTML version for quick delivery.

## Critical Conventions

- **Two variants coexist**: `src/` (Astro with local Tailwind + PostCSS) and `html/` (standalone HTML with Tailwind CDN + inline CSS). Keep both in sync when making visual/style changes.
- **All brand colors**: defined as CSS custom properties in `:root` in both `src/styles/global.css` and each HTML file's `<style>` block. Also mirrored in `tailwind.config.mjs` (Astro) and the inline `tailwind.config` (HTML).
- **Tailwind is v3**, not v4. Use `@tailwind base/components/utilities` directives, not `@import "tailwindcss"`.
- **PostCSS + Autoprefixer** — handled by `postcss.config.mjs`.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview build locally |

No linter or typecheck commands configured.

## Project Structure

```
├── src/
│   ├── layouts/Layout.astro      # Global layout (nav, footer, head)
│   ├── pages/
│   │   ├── index.astro           # Landing page
│   │   ├── nosotros.astro        # About us
│   │   ├── contacto.astro        # Contact
│   │   └── servicios/            # 9 service pages
│   └── styles/global.css
├── html/                         # Standalone CDN version (12 files)
│   ├── index.html
│   ├── nosotros.html
│   ├── contacto.html
│   └── servicios/
├── tailwind.config.mjs
├── astro.config.mjs
└── postcss.config.mjs
```

## Design System

Brand: **MK Media Digital**. Source of truth is `Manual de identidad-MK MEDIA DIGITAL.pdf`
(section 5.1 colors, 4.1/4.2 typography, 6.1/6.2 logo versions).

### Colors — defined in `:root`
The manual defines four solid corporate colors: `#623D91` (purple), `#123274` (navy),
`#009CDD` (cyan), `#000000`. Role assignment in the site:
- `--color-primary: #623D91` — corporate purple, main brand color
- `--color-primary-dark: #4e3075` — hover state
- `--color-primary-fixed: #ede7f5` — light tint (icon backgrounds)
- `--color-primary-fixed-dim: #ddd1ec`
- `--color-inverse-primary: #009CDD` — corporate cyan accent on dark backgrounds
- `--color-accent: #009CDD` / `--color-navy: #123274` — corporate tokens
- `--color-on-primary: #ffffff`
- `--color-on-primary-fixed: #123274` — corporate navy
- `--color-surface: #ffffff`
- `--color-surface-dim: #f7f6fb`
- `--color-on-surface: #101b33`
- `--color-on-surface-variant: #4a5570`
- `--color-body-text: #3b4560`
- `--color-outline: #e3e0ec`
- `--color-footer-bg: #123274`

### RGB variants used for `rgba()` shadows
- `--color-primary-rgb: 98, 61, 145`
- `--color-accent-rgb: 0, 156, 221`
- `--color-on-surface-rgb: 16, 27, 51`
- `--color-body-text-rgb: 59, 69, 96`

### Logo
Trimmed web versions live in `public/logos/` (and mirrored in `html/logos/`):
`logo-color` · `logo-negro` · `logo-blanco` (imagotipo, 393×300) and
`icono-color` · `icono-negro` · `icono-blanco` (icon, 512×512).
The imagotipo already contains the "MEDIA DIGITAL" wordmark, so the Layout hides
the text brand name when `logo.image` is set. The header uses a light surface
background so the color imagotipo stays legible (manual 7.3).

### Rebranding flow
Change colors in TWO places:
1. `:root` block in `src/styles/global.css` (and each HTML file's `<style>`)
2. `theme.extend.colors` in `tailwind.config.mjs` (and inline config in HTMLs)

### Typography
Per manual 4.1/4.2 — the original font files shipped by the brand are in
`public/fonts/`; Google Fonts is used at runtime for the full weight range.
- **Display/Headings**: Montserrat (corporate typeface, Bold)
- **Body**: Poppins (secondary typeface, Regular)
- **Label**: Poppins 600, 0.05em tracking

### Spacing tokens
- `gutter: 24px`, `container-max: 1280px`
- `section-padding-desktop: 120px`, `section-padding-mobile: 64px`

## Key CSS Classes (custom)

| Class | What it does |
|---|---|
| `.btn-magnetic` | Button with lift + translateX icon-wrap on hover |
| `.press-effect` | Scale(0.97) on active |
| `.card-hover` | Card with translateY(-6px) + shadow on hover |
| `.glass-card` | Semi-transparent white card for dark sections |
| `.stagger-fade` | Staggered fade-in animation (9 children) |
| `.reveal` | Single fade-up on scroll via `.in-view` |
| `.icon-wrap` | Inline icon-wrapper with translateX on parent hover |
| `.hover-lift` | Simple translateY(-3px) on hover |

## Deployment

Push to `main` on GitHub → Cloudflare Pages auto-builds.

## Pricing policy

**The site does not publish prices.** Service and plan names come verbatim from
`Catálogo MK Media Digital 2026.pdf`; plan cards and `/producto` show
"Precio a consultar" and route to WhatsApp for a quote. Plan data lives in
`src/content/settings/plans.json` and is rendered by
`src/components/PlanesServicio.astro` — never hardcode plan cards in a page.

## Ecommerce (planned)

Stripe Checkout + Cloudflare Worker for selling service packages. No backend.
