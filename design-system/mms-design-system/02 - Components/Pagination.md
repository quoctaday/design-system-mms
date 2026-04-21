# Pagination

A navigational component that allows users to move through large datasets by dividing them into discrete pages. Optimized for data-heavy tables and search results.

## 🧱 Structure & Interactive Example

```tsx
import { Pagination, Button } from '@mms/ui';

<Pagination size="2">
  <Pagination.Prev>
    <Button variant="ghost" size="1">Previous</Button>
  </Pagination.Prev>
  
  <Pagination.Content>
    <Pagination.Item>1</Pagination.Item>
    <Pagination.Item active>2</Pagination.Item>
    <Pagination.Item>3</Pagination.Item>
    <Pagination.Item>...</Pagination.Item>
    <Pagination.Item>10</Pagination.Item>
  </Pagination.Content>
  
  <Pagination.Next>
    <Button variant="ghost" size="1">Next</Button>
  </Pagination.Next>
</Pagination>
```

## 📐 API Reference

### Pagination
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Controls the density of buttons and text. |

### Pagination.Item
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `active` | `boolean` | `false` | Highlights the current page number. |
| `disabled` | `boolean` | `false` | Disables interaction for ellipses or out-of-range items. |

## 🎨 Material Design Standards
- **Button Micro-UI**: Items are strictly square (`24x24px` for size-1, `32x32px` for size-2) to maintain a mechanical, calculator-like precision.
- **Active State**: The active page uses a `surface` variant with a hairline border to ensure clear focus without disrupting the row's visual weight.
- **Radius Policy**: Uses `var(--radius-4)` (Medium) by default to balance the item's sharp footprint.

---
[[00 - Introduction|Back to Introduction]]
