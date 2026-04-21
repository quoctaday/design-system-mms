# Timeline

A chronological list of events used to display activity logs, delivery statuses, or project milestones. Part of the **Enumeration** component family.

## 🧱 Structure & Interactive Example

```tsx
import { Timeline, Text, Badge } from '@mms/ui';

<Timeline variant="dot" size="2">
  <Timeline.Item status="completed">
    <Timeline.Title>Order Received</Timeline.Title>
    <Timeline.Description>Feb 20, 2026 - 10:45 AM</Timeline.Description>
  </Timeline.Item>
  
  <Timeline.Item status="active">
    <Timeline.Title>Processing</Timeline.Title>
    <Timeline.Description>Item is being prepared for shipping.</Timeline.Description>
    <Timeline.Content>
      <Badge size="1">High Priority</Badge>
    </Timeline.Content>
  </Timeline.Item>
  
  <Timeline.Item status="pending">
    <Timeline.Title>Shipped</Timeline.Title>
    <Timeline.Description>Estimated arrival: Feb 22, 2026</Timeline.Description>
  </Timeline.Item>
</Timeline>
```

## 📐 API Reference

### Timeline
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'dot' \| 'icon' \| 'classic'` | `'dot'` | Visual marker style. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Spacing and marker size. |

### Timeline.Item
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `status` | `'completed' \| 'active' \| 'pending' \| 'error'` | `'pending'` | Color and icon state of the marker. |
| `icon` | `ReactNode` | - | Custom marker icon for `variant="icon"`. |

## 🎨 Material Design Standards
- **Connecting Lines**: Uses `hairline` widths (`0.5px`) for vertical connectors to ensure they remain subtle and subordinate to the content.
- **Marker Logic**: 
    - `active`: Uses Brand Accent Solid (`--accent-9`).
    - `completed`: Uses Success Green (`--green-9`).
    - `pending`: Uses Gray A4 for neutral hierarchy.
- **Alignment**: Markers are strictly aligned to the **Cap-Height** of the `Timeline.Title` to ensure typographic harmony.

---
[[00 - Introduction|Back to Introduction]]
