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
Elevation steps for surface separation using a **Numeric Scale (1-6)**. MMS uses **Layered Shadows** (multiple translucent layers) to ensure smooth, natural depth that works across Light and Dark modes.

| Level        | Logic                                   | Semantic Usage                          |
| ------------ | --------------------------------------- | --------------------------------------- |
| `shadow-none`| `none`                                  | Flat components (Sidebar, Tables)      |
| `shadow-1`   | Inset border + Micro lift               | Embedded widgets, Button classic       |
| `shadow-2`   | Subtle Surface lift                     | Cards, Segmented Controls               |
| `shadow-3`   | Floating elevation                      | Select dropdowns, DatePickers           |
| `shadow-4`   | Tactical elevation                      | Popovers, Hover states                  |
| `shadow-5`   | Strategic elevation                     | Modals, Toasts, Dialogs                |
| `shadow-6`   | Maximum Depth                           | Global Overlays, Top-level light sources|

### 🫧 The Layering Principle
Our shadows are composed of multiple stacked values to avoid the "fuzzy gray box" effect. We use **Alpha Tokens** (`--black-a*`) to ensure shadows blend perfectly with colored backgrounds like the **Aurora Background**.

## ✨ Visual Effects
- **Glassmorphism:** Use `backdrop-filter: blur(12px)` paired with alpha transparency tokens (`--white-a11` or `--black-a8`).
- **OLED Optimization:** Use pure black backgrounds (`#000000`) for specific dark mode elevation where true depth is required.

---
[[00 - Introduction|Back to Introduction]]
