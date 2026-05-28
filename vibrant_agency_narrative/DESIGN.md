---
name: Vibrant Agency Narrative
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4354'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7385'
  outline-variant: '#cfc2d6'
  surface-tint: '#832ad3'
  primary: '#6200a9'
  on-primary: '#ffffff'
  primary-container: '#7e22ce'
  on-primary-container: '#e4c5ff'
  inverse-primary: '#ddb8ff'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#e1e3e4'
  on-secondary-container: '#626566'
  tertiary: '#643600'
  on-tertiary: '#ffffff'
  tertiary-container: '#864a00'
  on-tertiary-container: '#ffc593'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb8ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6800b4'
  secondary-fixed: '#e1e3e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#ffb877'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6c3a00'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
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

The design system is anchored in a philosophy of **Modern Minimalism** tailored for a high-end digital agency environment. It balances the energetic authority of vibrant purple with the professional clarity of expansive white space. The goal is to evoke a sense of creative precision and technological sophistication.

The aesthetic is characterized by:
- **Breathable Layouts:** Utilizing significant negative space to allow content to lead.
- **High-Contrast Accents:** Using a singular, powerful brand color against neutral backgrounds to direct user attention.
- **Soft Precision:** Combining geometric rigor with generous corner radii to feel approachable yet engineered.

## Colors

The palette is intentionally restrained to maximize the impact of the primary brand color. 

- **Primary Purple (#7e22ce):** Used for primary actions, active states, and brand-heavy components. It represents the "creative spark."
- **Base White (#ffffff):** The standard background for the majority of the interface to maintain a clean, "gallery" feel.
- **Section Gray (#f9fafb):** A subtle offset used for background containment, alternating sections, and tertiary card surfaces.
- **Text Hierarchy:** Dark charcoal (#111827) is used for headlines to ensure maximum legibility against the white base.

## Typography

This design system utilizes **Inter** exclusively to achieve a systematic, utilitarian, and professional look. 

Typography is used as a structural element. **Display Hero** sizes are reserved for landing page impact, utilizing tight letter spacing and aggressive line heights. **Labels** use uppercase styling to create clear visual anchors for metadata and category tags. 

Ensure that body text maintains a generous line height (1.5x - 1.6x) to preserve the feeling of "airiness" even in content-heavy sections.

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile devices.

- **Vertical Rhythm:** Sections are separated by large 120px vertical gaps to maintain the minimal aesthetic.
- **Margins:** A standard 24px gutter is used between grid items.
- **Containment:** Content should be centered within a 1280px container on large screens to prevent line lengths from becoming unreadable.
- **Padding:** Internal card padding should be generous (min. 32px) to match the overall sense of scale.

## Elevation & Depth

This design system avoids traditional heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

Depth is communicated through:
- **Surface Shifts:** Moving from #ffffff to #f9fafb to denote different functional areas.
- **Subtle Borders:** A 1px solid border (#f3f4f6) is used for cards and inputs to provide definition without adding visual weight.
- **Hover States:** Interactive elements may use a soft, ultra-diffused shadow (0px 10px 30px rgba(0,0,0,0.03)) to indicate lift upon interaction.

## Shapes

The shape language is defined by large, friendly radii that contrast with the precise typography.

- **Standard Components:** Buttons and small inputs utilize a `0.5rem` (8px) radius.
- **Containers:** Content cards and feature sections utilize `1.5rem` (24px) for a distinctive, modern "app-like" appearance.
- **Visual Harmony:** Always ensure nested elements have a smaller radius than their parent containers to maintain concentric visual alignment.

## Components

### Buttons
- **Primary:** Solid #7e22ce background with #ffffff text. High-contrast, bold, and slightly oversized.
- **Ghost (on Dark):** On purple backgrounds, use a white border with white text.
- **Secondary:** Solid #ffffff background with #7e22ce text, featuring a subtle #f3f4f6 border.

### Cards
Cards should be the primary vessel for information. Use a white background, 24px corner radius, and a 1px #f3f4f6 border. On hover, the border can transition to the primary purple.

### Input Fields
Fields should use the #f9fafb background with no border in their default state, transitioning to a white background with a 2px #7e22ce border on focus.

### Footer
The footer should be structured and high-contrast. Use the #f9fafb background or a full-bleed #7e22ce section for high impact. Group links into clear columns with uppercase labels.

### Iconography
Use professional, thin-stroke (1.5px or 2px) icons. Icons should match the primary purple color when used as decorative accents or the text color when used for navigation.