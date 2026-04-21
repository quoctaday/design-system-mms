# Accordion

A vertically stacked set of interactive headings that each reveal a section of content. Optimized for high-density information management and complex dashboard sidebars.

## 🧱 Structure & Interactive Example

````carousel
```tsx
import { Accordion } from '@mms/ui';

// Single expansion (Default)
<Accordion.Root type="single" collapsible>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
  </Accordion.Item>
  
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Is it styled?</Accordion.Trigger>
    <Accordion.Content>Yes. It follows the Flat-Premium mechanical design.</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```
<!-- slide -->
```tsx
// Multiple expansion
<Accordion.Root type="multiple">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Always visible if toggled.</Accordion.Content>
  </Accordion.Item>
  
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>Can be open simultaneously with Section 1.</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```
````

## 📐 API Reference

### Accordion.Root
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `type` | `'single' \| 'multiple'` | `'single'` | Expansion mode. |
| `collapsible` | `boolean` | `false` | When `type="single"`, allows closing the only open item. |
| `value` | `string \| string[]` | - | Controlled value. |
| `defaultValue` | `string \| string[]` | - | Default value. |

### Accordion.Item
| Prop | Type | Description |
| :--- | :--- | :--- |
| `value` | `string` | Unique identifier for the item. |
| `disabled` | `boolean` | Disables interaction. |

## 🎨 Material Specs
- **Hairline Precision**: Uses `0.5px` border between items for a sharp, architectural look.
- **Chevron Dynamics**: Features a `200ms` rotating chevron (`›`) that snaps to `270deg` on open.
- **Surface Contrast**: Hovering over the trigger applies `var(--gray-a2)` for subtle feedback.

## ♿ Accessibility
- Implements `aria-expanded` and `aria-controls`.
- Fully navigable via `Tab` and `Enter/Space` keys.
- Uses `data-state="open|closed"` for CSS animation hooks.

---
[[00 - Introduction|Back to Introduction]]
