# ContextMenu

An advanced dropdown menu triggered by an alternative mouse click (usually right-click). Designed for power-user efficiency in high-density desktop applications.

## 🧱 Structure

```tsx
import { ContextMenu, Box, Text } from '@mms/ui';

<ContextMenu.Root radius="medium">
  <ContextMenu.Trigger>
    <Box style={{ height: 100, border: '1px dashed var(--gray-a4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Text size="2">Right click here</Text>
    </Box>
  </ContextMenu.Trigger>
  
  <ContextMenu.Content width={180}>
    <ContextMenu.Item onSelect={() => console.log('Edit')}>Edit</ContextMenu.Item>
    <ContextMenu.Item onSelect={() => console.log('Duplicate')}>Duplicate</ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item shortcut="⌘ D" disabled>Archive</ContextMenu.Item>
    <ContextMenu.Item color="red">Delete</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
```

## 📐 Properties

| Prop | Purpose | Supported Values |
| :--- | :--- | :--- |
| `radius` | Corner rounding level | `none`, `small`, `medium`, `large`, `full` |
| `size` | Text and padding density | `1`, `2` |

## 🎨 Design Logic

The ContextMenu shares the same architectural DNA as the **DropdownMenu** but with a specialized trigger mechanism:

- **Virtual Positioning**: Unlike standard popovers, the ContextMenu positions itself relative to the pointer coordinates at the exact moment of the `contextmenu` event.
- **Micro-shadows**: Uses `shadow-5` to ensure it popups clearly over complex underlying content.
- **Accelerator Support**: Includes integrated support for `shortcut` labels to aid keyboard discoverability for power users.

---
[[00 - Introduction|Back to Introduction]]
