# Radius & Elevation

We use **Radix-style rounding** and subtle elevation to define component boundaries without increasing visual noise.

## 🟠 Radius Tokens
Defines the corner rounding for UI elements.

| Token | Value | Semantic Usage |
|-------|-------|----------------|
| `--radius-none` | `0px` | Linear sharp corners |
| `--radius-xs` | `4px` | Tiny elements (tags, badges) |
| `--radius-sm` | `8px` | Classic small components (checkbox, small buttons) |
| `--radius-md` | `12px` | Standard interface (inputs, regular buttons) |
| `--radius-lg` | `16px` | Floating cards, primary containers |
| `--radius-xl` | `20px` | Large modals, layouts |
| `--radius-full` | `999px` | Fully rounded (Pills/Circles/Icons) |

## 🏔 Shadow Depths
Elevation steps for surface separation.

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-xsmall` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-small` | `0 2px 4px rgba(0,0,0,0.05)` | Cards, buttons |
| `--shadow-medium` | `0 4px 8px rgba(0,0,0,0.04)` | Modals, dropdowns |

## ✨ Visual Effects
- **Glassmorphism:** Use `backdrop-filter: blur(12px)` paired with alpha transparency tokens (`--white-a11` or `--black-a8`).
- **OLED Optimization:** Use pure black backgrounds (`#000000`) for specific dark mode elevation where true depth is required.

---
[[00 - Introduction|Back to Introduction]]
