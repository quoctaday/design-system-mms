# Spacing & Grid (v4.0 Radix-Aligned)

We use a systematic spacing architecture to maintain layout balance and visual rhythm across dense operational dashboards. As of v4.0, we have moved to a **Strict Radix-Aligned Spacing Scale**.

## 📏 Modular Spacing (Radix Indices 1-9)
All layout gaps, padding, and margins must use the standard index-based scale. These tokens are **Scaling-Aware** (derived from the base unit multiplied by `--scaling`).

| Token | Pixels | Radix Step | Semantic Usage |
| :--- | :--- | :--- | :--- |
| **`--space-0`** | `0px` | 0 | Reset / No offset |
| **`--space-1`** | `4px` | 1 | Tight gaps (e.g., Label/Error pairings) |
| **`--space-2`** | `8px` | 2 | Small component gaps (e.g., Icons in Buttons) |
| **`--space-3`** | `12px` | 3 | Component inner padding (Standard small) |
| **`--space-4`** | `16px` | 4 | **Standard Container Padding**, Main page gaps |
| **`--space-5`** | `24px` | 5 | Section-level spacing |
| **`--space-6`** | `32px` | 6 | Large container gutters |
| **`--space-7`** | `40px` | 7 | Layout offsets |
| **`--space-8`** | `48px` | 8 | Hero and Empty State margins |
| **`--space-9`** | `64px` | 9 | **Global Page Section Gap** (Maximum Scale) |

## 📐 Precise Offsets (Mathematical Sub-steps)
For micro-alignments that don't fit the modular scale (like 2px strokes or precise halo offsets), we use mathematical derivatives of standard tokens:

- **2px Alignment**: `calc(var(--space-1) / 2)` — Used for focus halos and Radio dots.

## 🕸 Grid System (Layout Contract)
- **Primary Grid:** 12-column fluid grid.
- **Section Spacing:** Standard sections must be separated by `var(--space-9)` (64px) to maintain the "MMS High-Density" rhythm while providing breathing room.
- **Constraint Enforcement:** Never use hardcoded pixel values or spacing tokens outside the 1-9 indices. Use `npm run guard` to audit compliance.

---
[[00 - Introduction|Back to Introduction]]
