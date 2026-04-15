# Typography Specification

The Woker Design System UI is optimized for **high-density operational workflows**, prioritizing clarity, hierarchy, and neutral professional character.

## 🖋 Fonts

- **Display Font:** `Inter Display` (Semibold/Bold, used for structural headings).
- **Interface Font:** `Inter` (Functional UI elements and body text).
- **Base Size:** `14px` (`--font-size-3`) is the global standard for layout density.

## 📏 Typography Scale
These tokens ensure consistent font sizing throughout the system, mapped to the `Inter` family.

| Token | Value | Semantic Usage |
| :--- | :--- | :--- |
| **`--font-size-1`** | `11px` | Micro-labels, small navigation tags |
| **`--font-size-2`** | `12px` | Secondary text, metadata, tooltips |
| **`--font-size-3`** | `14px` | **Base Body**, Form labels, Input text |
| **`--font-size-4`** | `16px` | Titles, Modal headers, Card titles |
| **`--font-size-5`** | `18px` | Secondary headings |
| **`--font-size-6`** | `20px` | Primary page headings |

## 📐 Letter Spacing (Tracking)
Mapped for optimal legibility at various densities.
- **Default:** `--tracking-default` (-1% for body text).
- **Display:** `--tracking-display` (-2% for larger headings).

---

## 🏛 Style Guidelines
- **Mood:** Swiss, minimalist, functional, neutral, professional.
- **Transitions:** Standard color shifts use `300ms ease`.
- **Density Overload:** For extremely high-density views, downscale to `--font-size-2` (12px) for secondary values while maintaining `14px` for control labels.

---
[[00 - Introduction|Back to Introduction]]
