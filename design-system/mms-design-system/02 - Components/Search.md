# Search

A specialized input component designed for filtering large datasets or navigating through application search results.

## 🧱 Structure & Interactive Example

```tsx
import { Search, Kbd } from '@mms/ui';

<Search 
  placeholder="Search projects..." 
  size="2" 
  radius="medium"
  shortcut={<Kbd>⌘ K</Kbd>}
/>
```

## 📐 API Reference

### Search
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Height and font size orchestration. |
| `radius` | `'none' \| 'small' \| 'medium' \| 'large' \| 'full'` | `'medium'` | Corner rounding level. |
| `shortcut` | `ReactNode` | - | Optional. Visual keyboard shortcut indicator. |

## 🎨 Material Design Standards
- **Standard Anatomy**: Includes a fixed `RiSearchLine` icon on the left with `var(--gray-a8)` opacity.
- **Glassmorphism (Surface Variant)**: When active, the background can transition to a subtle `blur(4px)` to indicate focus if used in a floating header.
- **Precision Clear**: Provides a `RiCloseCircleFill` clear button that appears only when the value is not empty.
- **State Indicators**: Focus state is marked by an accent-colored ring (`var(--accent-a8)`) and a subtle lift in background brightness.

---
[[00 - Introduction|Back to Introduction]]
