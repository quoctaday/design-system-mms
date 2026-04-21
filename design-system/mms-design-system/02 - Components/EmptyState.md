# EmptyState

A composite component used to communicate a lack of content within a container, provide context for why it's empty, and guide users toward an initial action.

## 🧱 Structure & Interactive Example

```tsx
import { EmptyState, Button, Heading, Text } from '@mms/ui';

<EmptyState variant="classic">
  <EmptyState.Icon icon="RiInboxArchiveLine" size="6" />
  <EmptyState.Header>
    <Heading size="4">No active projects</Heading>
    <Text size="2" color="subtle">
      You haven't created any operations yet. Get started by creating your first project.
    </Text>
  </EmptyState.Header>
  
  <EmptyState.Action>
    <Button variant="solid" color="brand">Create Project</Button>
  </EmptyState.Action>
</EmptyState>
```

## 📐 API Reference

### EmptyState
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'classic' \| 'surface' \| 'ghost'` | `'classic'` | Controls the background and border intensity. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Spacing and typography scaling. |

### EmptyState.Icon
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `string \| ReactNode` | - | The visual focal point. |
| `size` | `string` | `'5'` | Standard Radix size token. |

## 🎨 Material Design Standards
- **Visual Weight**: Icons use `var(--gray-a4)` or a subtle `var(--accent-a3)` background to remain visually subordinate yet informative.
- **Alignment**: Items are strictly centered along the vertical axis with a global `var(--space-6)` gap between anatomical sections (Icon -> Header -> Action).
- **Surface Depth**: Surface variants apply a `hairline` border and `var(--surface-subtle)` to define the empty area clearly within the UI.

---
[[00 - Introduction|Back to Introduction]]
