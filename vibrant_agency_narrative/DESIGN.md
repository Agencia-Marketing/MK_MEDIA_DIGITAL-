---
name: Vibrant High-Contrast Solid Light
colors:
  surface: '#f8f9fc'
  surface-dim: '#ffffff'
  surface-bright: '#ffffff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f9fc'
  surface-container: '#f1f0fb'
  surface-container-high: '#eae7f8'
  surface-container-highest: '#e2dff5'
  on-surface: '#0f172a'
  on-surface-variant: '#475569'
  inverse-surface: '#0f172a'
  inverse-on-surface: '#ffffff'
  outline: '#e2e8f0'
  outline-variant: '#e2e8f0'
  surface-tint: '#7e22ce'
  primary: '#7e22ce'
  on-primary: '#ffffff'
  primary-container: '#7e22ce'
  on-primary-container: '#ffffff'
  inverse-primary: '#ffd5ff'
  secondary: '#6b21a8'
  on-secondary: '#ffffff'
  background: '#ffffff'
  on-background: '#334155'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

The design system is anchored in a philosophy of **Solid Light Theme with Maximum Legibility**. To ensure absolute visual consistency and eliminate readability issues, all background gradients and dark overlay blocks are completely removed. The interface strictly transitions between solid white (`#ffffff`) for dominant areas and cards, and soft neutral-light gray (`#f8f9fc`) for alternating sections, providing clean, high-contrast structural divisions.

The aesthetic is characterized by:
- **Zero Gradients:** Every background, block, and decorative overlay uses clean, flat solid colors to prevent text contrast conflicts.
- **Strict High-Contrast Typography:** All titles use a solid deep slate-navy (`#0f172a`), and all body text uses slate-gray (`#334155`) to ensure 100% legibility in all resolutions and sections.
- **Premium Geometric Fonts:** Pair the expressive curves of **Syne** for headlines with the clean sans-serif **Outfit** for legible body text.

## Colors

- **Editorial White (#ffffff):** Base background for body and cards.
- **Slate Light Gray (#f8f9fc):** Alternating background to structure secondary sections.
- **Solid Amethyst (#7e22ce):** The solid brand purple used for interactive states, navigation items, and primary solid action buttons.
- **Dark Charcoal (#0f172a):** Headings for bold visual clarity.
- **Slate Gray (#334155):** Highly legible tone for body paragraphs.
- **Light Slate Border (#e2e8f0):** Crisp solid framing for cards, inputs, and layout grids.

## Typography

- **Syne (Headings):** Expressive curvest and high-end geometric weight for display headers.
- **Outfit (Body):** Rounded sans-serif ensuring modern legibility.

## Layout & Spacing

- **Solid Alternating Blocks:** Section blocks shift strictly between solid white and soft slate light gray.
- **Padding:** 120px vertical margins in desktop and 64px in mobile between sections.

## Elevation & Depth

- **Clean Borders:** Cards use a 1px solid `#e2e8f0` border.
- **Card Hover:** Cards translate upward by 4px and shift border-color to `#cbd5e1` with a soft lift shadow.

## Components

### Buttons
- **Primary:** Solid `#7e22ce` background with `#ffffff` text (never gradient). On hover, it deepens to `#6b21a8`.
- **Secondary:** Solid `#ffffff` background with `#334155` text and a clean `#e2e8f0` border.