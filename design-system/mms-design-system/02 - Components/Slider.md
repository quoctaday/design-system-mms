# Slider

A high-precision range selection primitive built with the Flat-Premium aesthetic. Allows users to select a single value from a range with tactile visual feedback.

## 🧱 Interactive Standard
Following the **Soft-Elevation** standard, the Slider Thumb is physically layered above the track using layered shadows.

```tsx
import { Slider } from '@mms/ui';

<Slider 
  label="Volume" 
  defaultValue={50} 
  min={0} 
  max={100} 
  showValue 
  variant="brand"
/>
```

## 📏 Sizing
Sliders match the density tokens of the `Progress` component for consistent visual hierarchy in data visualization panels.

| Size | Track Height | Thumb Size | Usage |
| :--- | :--- | :--- | :--- |
| `sm` | `4px` | `12px` | High-density toolbars |
| `md` | `6px` | `16px` | Standard forms (Default) |
| `lg` | `8px` | `22px` | Media players, Hero UIs |

## 🎨 Variants & Colors
Sliders supports all semantic functional colors to indicate the intent of the range.

- **Brand**: Default action range.
- **Success**: Positive thresholds (e.g., Performance, Uptime).
- **Warning/Error**: Critical thresholds (e.g., CPU Load, Fraud risk).
- **Gray**: Secondary or neutral adjustments.

## ⤗ Radius & Nesting
The track and fill follow the numeric radius scale. For a modern, organic look, `radius="full"` is recommended to create pill-shaped tracks.

| Detail | Token | Note |
| :--- | :--- | :--- |
| **Track BG** | `var(--surface-component)` | Sunken appearance |
| **Thumb BG** | `var(--surface-panel)` | Elevated appearance |
| **Elevation**| `var(--shadow-2)` | Step 2 Layered Shadow |

---
**Related:** [[02 - Components/Progress|Progress]] • [[02 - Components/Input|Input]] • [[02 - Components/Switch|Switch]]
