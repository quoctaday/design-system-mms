# AspectRatio

A layout primitive that maintains a consistent width-to-height ratio for its content. Essential for ensuring grid alignment and preventing layout shifts when loading media.

## 🧱 Structure & Interactive Example

```tsx
import { AspectRatio } from '@mms/ui';

<div style={{ width: 400 }}>
  <AspectRatio ratio={16 / 9}>
    <img
      src="https://images.unsplash.com/photo-1473081556163-2a17de81fc97"
      alt="Landscape"
      style={{ borderRadius: 'var(--radius-4)' }}
    />
  </AspectRatio>
</div>
```

## 📐 API Reference

### AspectRatio
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `ratio` | `number` | `1` | Desired aspect ratio (e.g., `16 / 9` for widescreen). |
| `children` | `React.ReactNode` | - | The content to be constrained. |

## 🎨 Design Logic
- **Containment**: Uses `position: relative` and the padding-bottom hack (or `aspect-ratio` where supported) to guarantee space reservation before children load.
- **Auto-fit**: Children are automatically stretched to fill the container using `inset: 0`. It is recommended to use `object-fit: cover` for images inside AspectRatio.

## 💡 Best Practices
- Use for **Hero sections**, **Product cards**, and **Video embed containers**.
- Combine with the `Skeleton` component for a premium "Zero-CLS" loading experience.

---
[[00 - Introduction|Back to Introduction]]
