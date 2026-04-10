# Color Specification (v3.0)

The Woker Design System utilizes a **Canonical Radix-Based Architecture**, organized into functional semantic branches. Each branch maps strictly to the 12-step perceptual scale for consistent contrast and accessibility.

## 🏛 Semantic Token Architecture

### 1. Surface (Backgrounds & Elevation)
Used for the physical layers of the interface.

| Role | Step | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| **App BG** | S1 | `--surface-app` | Root page background (OLED safe) |
| **Panel** | White | `--surface-panel` | Card surfaces, persistent menus, modals |
| **Subtle** | S2 | `--surface-subtle` | Sidebar tracks, secondary container fills |
| **Component** | S3 | `--surface-component` | Default background for input fields and tags |
| **Hover** | S4 | `--surface-hover` | Hover highlights for interactive surfaces |
| **Active** | S5 | `--surface-active` | Pressed/Active state highlights |
| **Solid** | S9 | `--surface-solid` | High-intent action backgrounds (Brand Blue) |

---

### 2. Content (Text & Icons)
Used for all readable and informative elements.

| Role | Step | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Strong** | S12 | `--content-strong` | Primary headings, labels, key information |
| **Subtle** | S11 | `--content-subtle` | Standard body text, descriptive captions |
| **Placeholder**| S9/S10 | `--content-placeholder` | Inactive fields, secondary chart legends |
| **Accent** | A11 | `--content-accent` | Brand-colored typography for emphasis |
| **On Solid** | White | `--content-on-solid` | High-contrast text on top of S9 backgrounds |

---

### 3. Border (Lines & Dividers)
Used for structural separation and outlines.

| Role | Step | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Subtle** | S6 | `--border-subtle` | Internal dividers, low-contrast separators |
| **Default** | S7 | `--border-default` | UI element outlines, standard grid-lines |
| **Strong** | S8 | `--border-strong` | Focused/Active state outlines |
| **Divider** | A6 | `--border-divider` | Alpha-transparent lines for complex surfaces |

---

## 🚦 Status Semantics (Feedback Matrix)

Feedback colors derive from localized 12-step palettes (Red, Green, Amber, Blue).

| Category | Surface (S3/S9) | Content (S11) | Border (S7) |
| :--- | :--- | :--- | :--- |
| **Danger** | `--surface-danger-*` | `--content-danger` | `--border-danger` |
| **Success** | `--surface-success-*` | `--content-success` | `--border-success` |
| **Warning** | `--surface-warning-*` | `--content-warning` | `--border-warning` |
| **Info** | `--surface-info-*` | `--content-info` | `--border-info` |

---

## 💎 Alpha Scale (Radix UI)
Used for Glassmorphism, overlays, and dynamic highlights. These tokens ensure perceptual consistency across Light and Dark modes.

- **`--black-a1..a12`**: Light mode transparency.
- **`--white-a1..a12`**: Dark mode transparency (OLED-optimized).

---

## 🎨 Dynamic Brand Configuration
Brands are injected at runtime via mathematical scale generation (`chroma.js`).
To ensure absolute theme consistency:
- **Light Scale:** Generated using `generateRadixScale`.
- **Dark Scale:** Generated using `generateDarkRadixScale` (Ensures dark variants map to deep slates/navies, never bright pastels).
- **Injection:** Scales are injected via a `<style id="mms-dynamic-brand">` attached to the document `<head>`, creating discrete `:root` and `.dark` CSS blocks rather than inline variables. This guarantees correct CSS specificity.

---

## 🛠 Developer Guidelines
- **Never Hardcode Steps**: Avoid `var(--gray-3)`. Always use `var(--surface-component)`.
- **Branch Specificity**: Do not use "Surface" tokens for text, or "Content" tokens for borders.
- **Theme Parity**: Each token is pre-configured for both Light and Dark modes.
- **Zero Hardcoded Whites**: Never use `background: white` or `color: #fff`. These completely break Dark Mode. Always map to `--surface-panel`, `--white` (token), or `--content-on-solid`.

---
[[00 - Introduction|Back to Introduction]]
