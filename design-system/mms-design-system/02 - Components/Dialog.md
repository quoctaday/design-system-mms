# Dialog

The `Dialog` component (formerly Modal) is designed with a modern high-fidelity aesthetic, featuring refined Backdrop Blur effects and the **Elevation v4.0** (Radix Shadow 6) system to establish a definitive focal point for critical user interactions.

## Architecture (Compound Pattern)

```tsx
<Dialog.Root>
  <Dialog.Trigger>
    <Button>Open</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content size="2">
      <Dialog.Header>
        <Dialog.Title>Confirm Action</Dialog.Title>
        <Dialog.Description>Are you sure you want to perform this action? This operation cannot be undone.</Dialog.Description>
        <Dialog.Close />
      </Dialog.Header>
      <Dialog.Body>...</Dialog.Body>
      <Dialog.Footer>
        <Dialog.Close><Button variant="surface">Cancel</Button></Dialog.Close>
        <Button variant="classic">Confirm</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

## 💎 Design Standards

- **Scroll Architecture v4.0 (High-Fidelity)**: The Dialog utilizes a multi-layered scrolling strategy (`Overlay` > `Scroll` > `Padding` > `Content`). This architectural approach ensures the Dialog remains centered for short content, while long content scrolls naturally from the top of the viewport without clipping the header—a common "lost head" failure in legacy modals.
- **Elevation v4.0 (Radix Shadow 6)**: Implements a sophisticated 6-layer shadow stack to create deep material separation and prioritize the dialog over the background content.
- **Glassmorphism Backdrop**: The `Overlay` layer employs `backdrop-filter: blur(var(--blur-md))` combined with a translucent `--black-a8` veneer to isolate user focus.
- **Micro-Animations**: Uses a controlled entry transform (`Scale 0.97 -> 1.0`) to simulate a gentle growth effect, significantly reducing visual noise compared to abrupt appearances.

## Props (Dialog.Content)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `'1' \| '2' \| '3' \| '4'` | `'2'` | Determines the Dialog's maximum width (Scale: 400px to 1140px). |
| `radius` | `RadiusScale` | `'4'` | Synchronizes the Dialog's corner rounding with the global system radius scale. |

## Internal Components

- **Dialog.Title / Dialog.Description**: Automatically synchronized with the Flat-Premium typography and spacing standards.
- **Dialog.Body**: Features automatic vertical scrolling if content exceeds `85vh`.
- **Dialog.Footer**: Houses primary action buttons, defaulted to right-alignment to match standard operating system user patterns.

---
**Related:** [[02 - Components/DropdownMenu|DropdownMenu]] • [[02 - Components/Toast|Toast]] • [[02 - Components/Button|Button]]
