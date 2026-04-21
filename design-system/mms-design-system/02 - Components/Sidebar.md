# Sidebar

A high-level navigation container that organizes primary application paths and actions. Designed for persistent layout structures in complex operational dashboards.

## 🧱 Structure & Interactive Example

```tsx
import { Sidebar, Box, Flex, Text, Button } from '@mms/ui';

<Sidebar variant="classic" size="2">
  <Sidebar.Header>
    <Sidebar.Logo src="/logo-icon.svg" title="WokerDS" />
  </Sidebar.Header>
  
  <Sidebar.Content>
    <Sidebar.Group title="Operations">
      <Sidebar.Item active icon="RiDashboardLine" label="Dashboard" />
      <Sidebar.Item icon="RiLineChartLine" label="Analytics" />
      <Sidebar.Item icon="RiUser3Line" label="Teammates" badge="12" />
    </Sidebar.Group>
    
    <Sidebar.Group title="Management">
      <Sidebar.Item icon="RiSettings4Line" label="Settings" />
      <Sidebar.Item icon="RiBookOpenLine" label="Documentation" />
    </Sidebar.Group>
  </Sidebar.Content>
  
  <Sidebar.Footer>
    <Sidebar.User 
      name="Alex Woker" 
      role="Admin" 
      avatar="/avatars/alex.png" 
    />
  </Sidebar.Footer>
</Sidebar>
```

## 📐 API Reference

### Sidebar
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'classic' \| 'surface' \| 'ghost'` | `'classic'` | Visual background and border style. |
| `size` | `'1' \| '2' \| '3'` | `'2'` | Overall density and item height. |
| `collapsible` | `boolean` | `false` | Enables collapse-to-icon behavior. |

### Sidebar.Item
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | - | Display text. |
| `active` | `boolean` | `false` | Highlight state. |
| `icon` | `string \| ReactNode` | - | Lead indicator. |
| `badge` | `string \| number` | - | Notification count. |

## 🎨 Material Design Standards
- **Isolation**: Uses `isolation: isolate` and fixed widths (`var(--size-sidebar)`) to prevent layout shifts during content changes.
- **Micro-interactions**: Hovering items triggers a `100ms` background transition to `var(--gray-a3)`. Active states use an accent-colored indicator bar.
- **Hierarchy**: Sidebar Groups provide semantic grouping using `Title` with 60% opacity for clear structural separation.

---
[[00 - Introduction|Back to Introduction]]
