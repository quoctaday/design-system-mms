# Checkbox

A control that allows the user to select one or more options from a set of related choices.

## 📏 Sizing
Available in three standard operational sizes to fit various design densities.

| Prop | Root Size | Indicator Size | Usage |
| :--- | :--- | :--- | :--- |
| `size="1"` | `14x14px` | `9px` | High-density forms, compact data tables |
| `size="2"` | `16x16px` | `10px` | Standard UI interactions (Default) |
| `size="3"` | `20x20px` | `12px` | Touch-friendly interfaces, promotional sections |

## ⤗ Radius (Modernized)
Standardized rounding options that synchronize with the global WokerDS UI protocol.

| Prop | Value | Note |
| :--- | :--- | :--- |
| `radius="none"` | `0px` | Sharp, technical corners |
| `radius="sm"` | `8px` | Classic rounded (Default for Checkbox) |
| `radius="md"` | `12px` | Standard modern rounded |
| `radius="lg"` | `16px` | Premium high-radius rounded |
| `radius="full"` | `999px` | Fully circular checkbox |

## 💎 Design Standards

- **Internal Whitespace**: Maintains a strict icon-to-container ratio to ensure the checkmark feels balanced and premium.
- **Physical Materiality**: Uses layered inset shadows to create the appearance of a recessed track when unchecked.

## 🎨 Token Specs
- **Indicator Dimensions**: Hardcoded to specific precision scales to ensure absolute consistency across components.
- **Border Architecture**: Utilizes `box-shadow: inset` with `var(--stroke-width-1)` for ultra-fine border precision that prevents layout shifts.
- **State Logic**: `Checked` and `Indeterminate` states utilize high-impact Brand backgrounds with high-contrast White icons.
- **Iconography**: Employs `RiCheckLine` or `RiSubtractLine` at a calibrated scale (approx. 75% of container height) to preserve negative space.
- **Focus Mechanism**: Implements the **Focus Halo Standard** directly on the indicator via the `:focus-visible` pseudo-class.
- **Tactile Feedback**: Features a subtle "Bounce" transition upon activation to provide positive, responsive visual feedback to the user.

---
[[00 - Introduction|Back to Introduction]]
