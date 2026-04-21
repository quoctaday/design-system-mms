# Radius & Elevation

We use **Radix-style rounding** and subtle elevation to define component boundaries without increasing visual noise.

## 🟠 Radius Tokens
Defines the corner rounding for UI elements using a **Numeric Scale (1-6)** aligned with Radix standards. All radius tokens are **Scaling-Aware**, adjusting automatically based on the global `--scaling` factor.

| Token           | Value   | Semantic Usage                                     |
| --------------- | ------- | -------------------------------------------------- |
| `--radius-none` | `0px`   | Sharp corners (Linear/Technical)                   |
| `--radius-1`    | `3px`   | Micro elements (Small tags)                        |
| `--radius-2`    | `4px`   | Small elements (Badges, small buttons)             |
| `--radius-3`    | `6px`   | Medium elements (Checkbox, toggles)                |
| `--radius-4`    | `8px`   | Standard Actions (Buttons, Inputs) - **Default**   |
| `--radius-5`    | `12px`  | Containers (Cards, Widgets) - **12-4-8 Rule**      |
| `--radius-6`    | `16px`  | Large Layouts (Modals, Screen Sections)           |

### 📐 The Mathematical Nesting Principle
For perfect visual centering, internal elements should follow the formula: 
**Inner Radius = Outer Radius - Padding**.

- **Stability:** Structural containers (Cards, Modals) use stable numeric tokens (`radius-5`, `radius-6`).
- **Adaptability:** Action components (Buttons, Inputs) use the **Radix-style Max Logic**: `max(var(--radius-full), var(--radius-4))`.
- **Global Toggle:** The `--radius-full` variable is defined as `0px` by default and switches to `9999px` only in "Full" mode, enabling seamless transitions.

## 🏔 Shadow Depths
Elevation steps for surface separation using a **Numeric Scale (1-6)**. MMS now uses **Radix-Grade Layered Shadows** (5-6 translucent layers per step) to ensure smooth, natural depth that works across Light and Dark modes.

| Level        | Ring State | Logic                                   | Semantic Usage                          |
| ------------ | ---------- | --------------------------------------- | --------------------------------------- |
| `shadow-none`| No Ring    | `none`                                  | Flat components (Sidebar, Tables)      |
| `shadow-1`   | Inset Ring | 3-layer Inset depth                     | Embedded widgets, Button classic       |
| `shadow-2`   | **Auto**   | 5-layer Standard lift + 1px Ring       | Cards, Segmented Controls               |
| `shadow-3`   | **Auto**   | 5-layer Floating elevation + 1px Ring  | Select dropdowns, Popovers              |
| `shadow-4`   | **Auto**   | 4-layer Tactical elevation + 1px Ring  | Specialized Popovers, Hover states      |
| `shadow-5`   | **Auto**   | 3-layer Strategic elevation + 1px Ring | Modals, Toasts, DatePickers            |
| `shadow-6`   | **Auto**   | 4-layer Maximum Depth + 1px Ring       | Global Overlays, Top-level light sources|

### 🫧 The Shadow-Ring Protocol (v4.3 Automation)
MMS minimizes CSS boilerplate by integrating **Boundary Rings** directly into the elevation scale.

- **Automated Boundary**: In MMS v3.0+, all elevation tokens (`--shadow-2` through `--shadow-6`) natively include a `0 0 0 1px var(--gray-a3)` ring as their base layer. Applying these tokens fulfills the Shadow-Ring requirements for floating panels.
- **Dark Mode Optimization:** Dark mode tokens include specialized `inset` layers to maintain edge sharpness and materiality on deep black surfaces.

## 📍 Stroke System
MMS defines a standardized stroke weight scale to ensure structural integrity and visual rhythm.

| Token              | Value   | Semantic Usage                                     |
| ------------------ | ------- | -------------------------------------------------- |
| `--stroke-hairline`| `0.5px`  | Ultra-thin dividers, luxury glass borders         |
| `--stroke-width-1` | `1px*`   | Default UI element borders, inputs, buttons        |
| `--stroke-width-2` | `2px*`   | Strong borders, active states, focus rings         |

*\*Note: `--stroke-width-n` tokens are scaling-aware and adjust automatically.*

## ✨ Visual Effects
- **Glassmorphism:** Use `backdrop-filter: blur(12px)` paired with alpha transparency tokens (`--white-a11` or `--black-a8`).
- **OLED Optimization:** Use pure black backgrounds (`#000000`) for specific dark mode elevation where true depth is required.

---
[[00 - Introduction|Back to Introduction]]
