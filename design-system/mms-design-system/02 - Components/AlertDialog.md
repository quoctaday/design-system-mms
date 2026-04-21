# AlertDialog

A critical modal dialog that interrupts the user with important content and expects a confirmation. Unlike a standard Dialog, it prevents dismissal via clicking outside to ensure the user acknowledges the information.

## 🧱 Structure & Interactive Example

```tsx
import { AlertDialog, Button, Flex } from '@mms/ui';

<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red" variant="soft">Delete Account</Button>
  </AlertDialog.Trigger>
  
  <AlertDialog.Portal>
    <AlertDialog.Overlay />
    <AlertDialog.Content size="2" radius="large">
      <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialog.Description>
      
      <Flex gap="3" justify="end" style={{ marginTop: 'var(--space-5)' }}>
        <AlertDialog.Cancel>
          <Button variant="ghost" color="gray">Cancel</Button>
        </AlertDialog.Cancel>
        <AlertDialog.Action>
          <Button variant="solid" color="red">Yes, delete account</Button>
        </AlertDialog.Action>
      </Flex>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>
```

## 📐 API Reference

### AlertDialog.Content
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'1' \| '2' \| '3' \| '4'` | `'2'` | Controls the width and padding. |
| `radius` | `'none' \| 'small' \| 'medium' \| 'large' \| 'full'` | `'medium'` | Corner rounding. |

## 🎨 Design Logic
- **Safety Protocol**: The overlay click-to-dismiss is disabled by default to force a conscious decision via Action/Cancel buttons.
- **Visual Hierarchy**: Destructive actions should always use `color="red"` via the `Badge` or `Button` system within the content.
- **Materiality**: Inherits the **Soft-Elevation** standards with backdrop-blur for focus isolation.

## ♿ Accessibility
- **Role**: `alertdialog`
- **Aria-modal**: `true`
- **Focus**: Returns focus to the trigger upon dismissal.

---
[[00 - Introduction|Back to Introduction]]
