# Dropdown Menu

A hierarchical menu ecosystem designed for complex actions, keyboard shortcuts, and infinitely nested sub-menus within a premium operational framework.

## Architecture (Compound Pattern)

```tsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>Open Menu</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item shortcut="⌘S">Save</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>Share Access</DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>Email Link</DropdownMenu.Item>
        <DropdownMenu.Item>Copy to Clipboard</DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

## 💎 Design Standards

- **Viewport Architecture**: Employs the `mms-dropdown-menu-viewport` structural layer to isolate internal padding and strictly manage content overflow, ensuring the menu remains visually stable during window resizing or complex rendering.
- **Elevation v4.0 (Shadow 5)**: Utilizes the high-level V4.0 shadow stack to achieve profound material separation and focus.
- **Semantic Highlighting**: Menu items seamlessly transition to the Brand Accent color upon hover, reinforcing user location and brand identity.
- **Glassmorphism Materiality**: Leverages `backdrop-filter: blur(12px)` over the `--surface-panel` background to provide a sophisticated, translucent material feel typical of high-end software.
- **Structural Hierarchy**: Organizes related actions into logical blocks using the `DropdownMenu.Separator`.

## Props (DropdownMenu.Content)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `align` | `'start' \| 'center' \| 'end'` | `'end'` | Sets the horizontal alignment of the menu relative to the trigger element. |
| `width` | `number \| string` | `200` | Defines a fixed or dynamic width for the dropdown panel. |
| `sideOffset` | `number` | `4` | Specifies the safety clearance distance (in pixels) between the trigger and the content panel. |

## Props (DropdownMenu.Item)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'default' \| 'danger'` | `'default'` | Applies specialized styling for specific intents (e.g., `danger` for destructive actions). |
| `shortcut` | `string` | - | Renders an associated keyboard shortcut combination on the right side of the item. |
| `disabled` | `boolean` | `false` | When true, renders the item as non-interactive and visually muted. |

---
**Related:** [[02 - Components/Button|Button]] • [[02 - Components/Select|Select]] • [[02 - Components/Tooltip|Tooltip]]
