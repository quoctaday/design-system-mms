# HoverCard

A sophisticated preview component that reveals rich content when the user hovers over a trigger. Targeted at high-luxury interfaces that require supplemental context without page navigation.

## 🧱 Structure & Interactive Example

```tsx
import { HoverCard, Avatar, Flex, Text } from '@mms/ui';

<HoverCard.Root openDelay={300} closeDelay={200}>
  <HoverCard.Trigger>
    <a href="/profile/antigravity" style={{ color: 'var(--accent-9)' }}>
      @antigravity
    </a>
  </HoverCard.Trigger>
  
  <HoverCard.Content width={300}>
    <Flex gap="3">
      <Avatar src="/avatars/ai.png" fallback="AG" radius="full" size="4" />
      <Box>
        <Text size="2" weight="bold">Antigravity AI</Text>
        <Text size="2" color="subtle">@antigravity</Text>
        <Text size="2" style={{ marginTop: 'var(--space-2)' }}>
          Advanced Agentic Coding Assistant. Specializing in high-fidelity design systems.
        </Text>
      </Box>
    </Flex>
  </HoverCard.Content>
</HoverCard.Root>
```

## 📐 API Reference

### HoverCard.Root
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `openDelay` | `number` | `700` | Delay in ms before opening. |
| `closeDelay` | `number` | `300` | Delay in ms before closing. |

### HoverCard.Content
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `width` | `number \| string` | `280` | Width of the card. |
| `className` | `string` | - | Additional styles. |

## 🎨 Material Specs
- **Glassmorphism**: Uses `blur(12px)` and a subtle top-to-bottom gradient (`var(--white-a1)`) for a premium "Floating Surface" feel.
- **Elevation**: Implements `shadow-4` for distinct separation from the base surface.
- **Anti-Flicker**: Built-in delay logic ensures the card remains open while moving the cursor from trigger to content.

## ♿ Accessibility
- Provides a non-modial informational overlay.
- Does not trap focus, allowing for seamless reading flow.

---
[[00 - Introduction|Back to Introduction]]
