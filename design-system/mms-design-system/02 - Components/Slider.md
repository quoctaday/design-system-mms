# Slider

A high-precision range selection primitive built with the Flat-Premium aesthetic. Allows users to select a single value from a range with tactile visual feedback.

## 🧱 Interactive Standard
Following the **Soft-Elevation** standard, the Slider Thumb is physically layered above the track using multi-layered shadows.

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

## 📏 Sizing (Adaptive Ironclad)
Precise track-to-thumb ratios matching Radix 3.0 visual weighting.

| Prop | Track Height | Thumb Size | Usage |
| :--- | :--- | :--- | :--- |
| `size="1"` | `4px` | `12px` | High-density toolbars |
| `size="2"` | `8px` | `16px` | Standard forms (Default) |
| `size="3"` | `12px` | `24px` | Media players, Hero UIs |

## 💎 Design Standards

- **Hit-Box Expansion**: The slider thumb utilizes an invisible interaction area 1.5x larger than its visual footprint, facilitating effortless drag-and-drop operations especially on mobile devices.
- **Layered Track Elevation**: Implements a multi-layered `inset shadow` system for both the track and the active fill to achieve a sophisticated sense of recessed depth (Soft-Elevation).
- **Physical Feedback**: Employs tactile physical feedback through a momentary scale reduction (`scale(0.9)`) on the thumb during active engagement.

## ⤗ Radius & Nesting
The track and fill adhere to the numeric radius scale. For a modern, organic appearance, `radius="full"` is recommended to create sleek, pill-shaped tracks.

| Detail | Token | Note |
| :--- | :--- | :--- |
| **Track BG** | `var(--surface-component)` | Recessed appearance |
| **Thumb BG** | `var(--surface-panel)` | Elevated surface |
| **Elevation**| `var(--shadow-2)` | Step 2 Layered Shadow |

---
**Related:** [[02 - Components/Progress|Progress]] • [[02 - Components/Input|Input]] • [[02 - Components/Switch|Switch]]
