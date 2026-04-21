# Badge

A component utilized for displaying status labels or categorizing information. Optimized for high data density scenarios within the Flat-Premium design aesthetic.

## 🧱 Structure

```tsx
import { Badge } from '@mms/ui';

<Badge variant="surface" color="brand">Active</Badge>
```

## 🎨 Variants & Contrast

- **Solid**: Utilizes a high-impact solid background (Brand/State colors). Reserved for critical or high-priority status indicators.
- **Soft**: Features a subtle background without a border. The standard for non-intrusive metadata categorization.
- **Surface**: Combines a subtle background with an ultra-sharp **Hairline border (0.5px)**. Delivers the most sophisticated and premium visual character.
- **Outline**: Provides a defined border without an underlying background.
- **Ghost**: Minimalist approach with no background or border until interaction.

## 📏 Sizing

The system supports three precision sizing levels to accommodate various layout densities:

| Prop | Height | Font Size | Usage |
| :--- | :--- | :--- | :--- |
| `size="1"` | `20px` | `11px` | Micro-tags, dense table rows |
| `size="2"` | `24px` | `12px` | Standard operational baseline (Default) |
| `size="3"` | `28px` | `13px` | Large cards, prominent headers |

## 🎨 Token Specs
- **Variants**: `solid`, `soft`, `outline`, `surface` (Inset-Border), `ghost`.
- **Border Architecture**: Employs `box-shadow: inset` with `var(--stroke-width-1)` (or `hairline` for surface variants) to ensure absolute perimeter sharpness.
- **Radius Strategy**: Uses `max(var(--radius-full), var(--radius-1))` to support the global system-wide toggle between Square and Pill-shaped indicators.
- **Vertical Alignment**: Applies the **WokerDS Leading-Trim** technique to achieve pixel-perfect vertical centering of text.

---
[[00 - Introduction|Back to Introduction]]
