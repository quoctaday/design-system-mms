# Color Specification (v3.0)

The Woker Design System utilizes a **Canonical Radix-Based Architecture**, organized into functional semantic branches. Each branch maps strictly to the 12-step perceptual scale for consistent contrast and accessibility.

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
| **Subtle (Alpha)** | A4 | `--border-subtle` | Flat-Premium structural borders, cards, internal dividers |
| **Default (Solid)** | S7 | `--border-default` | UI element outlines, interactive form controls |
| **Strong (Solid)** | S8 | `--border-strong` | Focused/Active state outlines |
| **Divider (Alpha)**| A6 | `--border-divider` | Alpha-transparent lines for complex surfaces & splitters |

> **Hybrid Alpha Strategy (v4.0)**: To achieve a hyper-flat premium aesthetic comparable to Radix Themes native components, structural boundaries (`--border-subtle`, `--border-divider`) use the transparent **Alpha Scale**, while interactive boundaries (`--border-default`) strictly retain the **Solid Scale** to ensure WCAG 3:1 contrast compliance.

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
- **`--gray-a1..a12`**: Context-aware transparency for high-luxury overlays.

---

<a name="charts"></a>
## 📊 Categorical Chart Palette
To ensure high-performance data visualization across many charts, we use a **Categorical Sequential Scale**. 

- **Token Logic**: `--chart-1` up to `--chart-10`.
- **Identity Link**: `--chart-1` is dynamically bound to the current Brand's Step 9 (Solid) to maintain visual hierarchy.
- **High-Contrast Sequence**: Steps 2-10 use a pre-defined sequence of high-contrast hues (Indigo, Teal, Amber, Purple, Pink, Green, Orange, Red, Sky).
- **SVG Protocol**: Because SVG attributes often fail to resolve layered CSS variables, chart tokens are injected as **direct hex values** at runtime via `BrandContext.tsx`.

---

## 🎨 Dynamic Brand Configuration (Whitelabel Engine)
The MMS Design System is headless by default. Specific brand identities (e.g., Unipay Blue, OCB Green) are injected at runtime via mathematical scale generation using `chroma.js`.

- **Scales**: `generateRadixScale` and `generateDarkRadixScale` are used to build consistent 12-step ramps.
- **Injection**: Tokens are injected into a `<style id="mms-dynamic-brand">` tag in the document `<head>`.
- **Inheritance**: Dynamic tokens override static definitions in `theme.css`.

---

## 🛠 Developer Guidelines (The Golden Rules)
- **Zero-Hardcoding**: Never use hex codes for borders, backgrounds, or text. Always use semantic tokens.
- **SVG Safety**: For SVG components, use `style={{ fill: 'var(--chart-n)' }}` instead of the `fill` attribute to ensure robust CSS variable resolution.
- **Exception Rule**: `AuroraBackground` is the only component exempt from strict tokenization to maintain its specialized atmospheric effect.

---
[[00 - Introduction|Back to Introduction]]
