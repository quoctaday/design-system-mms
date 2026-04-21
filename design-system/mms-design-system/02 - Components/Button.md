# Button

The primary action component for the MMS Platform, optimized for both high-impact CTAs and dense operational navigation.

## 📏 Sizing (Radix 3.0 Standard)
Buttons follow the standardized height tokens for operational density, matching Input and Select grids.

| Prop | Height | Usage |
| :--- | :--- | :--- |
| **`size="1"`** | `24px` | Micro actions, compact tables |
| **`size="2"`** | `32px` | Standard UI actions (Default) |
| **`size="3"`** | `40px` | Primary CTA, Large modals |
| **`size="4"`** | `56px` | Large emphasis actions and hero-grade CTAs |

## ⤗ Radius (5-Level Ironclad)
Buttons use the semantic radius scale. For a modern, organic look, `radius="full"` creates a pill-shaped button.

| Prop | Logic | Note |
| :--- | :--- | :--- |
| **`radius="none"`** | `0px` | Sharp corners |
| **`radius="small"`** | `var(--radius-1)` | Micro rounding |
| **`radius="medium"`**| `var(--radius-2)` | Standard rounding (Default) |
| **`radius="large"`** | `var(--radius-3)` | Soft rounding |
| **`radius="full"`**  | `9999px` | Pill shape |

## 🎨 Variants
- **Solid**: High-intent actions using solid brand/semantic backgrounds (`--surface-solid`).
- **Soft**: Low-emphasis actions with subtle backgrounds and high-contrast text.
- **Outline**: Secondary actions with defined borders and transparent backgrounds.
- **Ghost**: Minimal actions within list items or headers (No background until hover).
- **Surface**: High-precision buttons with both borders and subtle backgrounds.

## 🛡️ Focus Halo Standard
All Buttons implement the `mms-focus-halo` system with color-aware focus-visible rings. Brand and semantic colors must preserve sharp, accessible focus feedback across all supported themes.

## 🎨 Color Contract
- **Canonical MMS semantics**: `brand`, `success`, `error`, `warning`, `gray`
- **Extended palette / legacy support**: `secondary`, `black`, `orange`, `blue`, `purple`, `sky`, `pink`, `teal`
- **Rule**: Mechanical behavior mirrors Radix, but color meaning must follow MMS semantic tokens and white-label-ready accent logic.

## 🎨 Token Specs
- **Variants**: `solid` (Layered Elevation), `soft`, `outline`, `surface` (Premium Depth), `ghost`.
- **Primary Fill**: `var(--accent-9)` or semantic color equivalents.
- **Border Logic**: Using `box-shadow: inset` with `var(--stroke-width-1)` for precise scaling across all resolutions.
- **Radius**: `max(var(--radius-full), var(--radius-4))` (Defaults to Radius-4 for a High-Density operational feel).
- **Active State**: Implements a multi-layered "Pressed" effect via `box-shadow: inset`, preserving layout stability and avoiding the visual jitter often associated with transform-based scaling.
- **Centering**: Utilizes the custom **WokerDS leading-trim** for the `mms-button-content` to achieve pixel-perfect vertical text alignment.

---
**Related:** [[02 - Components/Button Contract|Button Contract]] • [[02 - Components/DropdownMenu|DropdownMenu]] • [[01 - Foundations/Colors|Colors Foundation]] • [[02 - Components/Badge|Badge]]
