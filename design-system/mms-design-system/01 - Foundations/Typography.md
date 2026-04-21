# Typography Specification

The Woker Design System UI is optimized for **high-density operational workflows**, prioritizing clarity, hierarchy, and neutral professional character.

## 🖋 Font Architecture
MMS uses a tiered typography system to optimize for both high-frequency data reading and premium brand presentation.

- **Display Font:** `Inter Display`. High-fidelity font used for H1-H3 and high-impact numeric metrics. Optimized for tighter kerning.
- **Interface Font:** `Inter`. The functional workhorse used for all standard UI labels, buttons, and body text.
- **Base Size:** `14px` (`--font-size-3`) is the global standard for layout density, ensuring high information density without sacrificing legibility.

## 📏 Typography Scale
These tokens ensure consistent font sizing throughout the system, based on the **Radix UI High-Fidelity Scale**.

| Token | Size | Tracking | Usage |
| :--- | :--- | :--- | :--- |
| **`--font-size-1`** | `12px` | `+0.0025em` | **Absolute Baseline**: Micro-labels, small navigation tags |
| **`--font-size-2`** | `14px` | `0` | Secondary text, metadata, tooltips |
| **`--font-size-3`** | `16px` | `0` | **Base Body**, Form labels, Input text |

> [!IMPORTANT]
> **The 12px Ironclad Baseline**
> MMS strictly follows Radix UI Themes' 12px baseline. To maintain system-wide legibility and architectural parity, **NO font size below 12px** is permitted. Using hardcoded pixel values (e.g., 10px) is an absolute design violation.
| **`--font-size-4`** | `16px` | `-0.006em` | Titles, Modal headers, Card titles |
| **`--font-size-5`** | `18px` | `-0.01em` | Large titles |
| **`--font-size-6`** | `20px` | `-0.011em` | Primary page headings |
| **`--font-size-7`** | `24px` | `-0.014em` | Section headlines |
| **`--font-size-8`** | `32px` | `-0.018em` | Large Metrics |
| **`--font-size-9`** | `48px` | `-0.025em` | Hero Displays |

## 📐 Optical Tracking (Size-Aware Spacing)
MMS implements an automated tracking scale. As font size increases, letter spacing horizontally compresses to maintain premium visual density and professional 
character.

- **Small Text (11px):** Slightly expanded for maximum legibility.
- **Body Text (12-14px):** Natural spacing.
- **Display Text (16px+):** Progressively tighter to create a "locked-in" editorial feel.

## ✂️ Leading Trim (Cap-height Alignment)
To achieve pixel-perfect vertical centering, MMS uses a custom `leading-trim` utility. This removes the "air" above and below the characters (font metrics), allowing text to be centered strictly by its cap-height.

> [!TIP]
> All primary components like **Button**, **Badge**, and **Tabs** have Leading Trim enabled by default for perfect alignment with icons.

---

## 🏛 Style Guidelines
- **Mood:** Swiss, minimalist, functional, neutral, professional.
- **Transitions:** Standard color shifts use `300ms ease`.
- **Density Overload:** For extremely high-density views, downscale to `--font-size-2` (12px) for secondary values while maintaining `14px` for control labels.

---
[[00 - Introduction|Back to Introduction]]
