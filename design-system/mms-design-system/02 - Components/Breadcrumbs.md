# Breadcrumbs

A secondary navigation aid that helps users understand their current location within the application hierarchy. Essential for complex multi-level operational interfaces.

## 🧱 Structure & Interactive Example

```tsx
import { Breadcrumbs, Link } from '@mms/ui';

<Breadcrumbs size="2">
  <Breadcrumbs.Item>
    <Link href="/dashboard">Dashboard</Link>
  </Breadcrumbs.Item>
  <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
  <Breadcrumbs.Item>
    <Link href="/settings">Settings</Link>
  </Breadcrumbs.Item>
  <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
  <Breadcrumbs.Item active>Security</Breadcrumbs.Item>
</Breadcrumbs>
```

## 📐 API Reference

### Breadcrumbs
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Text size and spacing density. |
| `maxItems` | `number` | - | Optional. Collapses items into an ellipsis if limit is exceeded. |

### Breadcrumbs.Item
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `active` | `boolean` | `false` | Marks the item as the current page. Disables link behavior. |
| `href` | `string` | - | Target URL if not handling via child Link components. |

## 🎨 Material Design Standards
- **Typographic Hierarchy**: The `active` item uses `var(--gray-a12)` for maximum contrast, while parent items use `var(--gray-a9)` to indicate trail status.
- **Separators**: Default to `/` with a `var(--gray-a6)` color and 12px horizontal padding (`--space-3`).
- **Interaction**: Parent links exhibit a subtle underline or color shift to `var(--gray-a11)` on hover.

---
[[00 - Introduction|Back to Introduction]]
