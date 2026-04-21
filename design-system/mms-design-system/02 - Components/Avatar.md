# Avatar

A component used to display a representative image for a user or entity, featuring automatic error handling and a secondary fallback mechanism when an image is unavailable.

## Features

- **Automatic Fallback**: Automatically renders secondary content (such as initials or an icon) if the primary image fails to load or the source is unavailable.
- **Loading State Control**: Supports a configurable delay (`delayMs`) before showing the fallback, preventing visual flickering during fast network responses.
- **Versatile Variants**: Supports three distinct architectural styles: `circle`, `soft`, and `square`.
- **Responsive Scales**: Fully synchronized with the standard 9-step Radix sizing system for consistent layout density.

## Usage

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@mms/ui';

export const Example = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    {/* Standard Avatar with an image source */}
    <Avatar size="5" variant="circle">
      <AvatarImage 
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&dpr=2&q=80" 
        alt="User Avatar" 
      />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>

    {/* Soft variant with a 600ms delayed fallback trigger */}
    <Avatar size="4" variant="soft">
      <AvatarImage src="/invalid-path.jpg" />
      <AvatarFallback delayMs={600}>JD</AvatarFallback>
    </Avatar>
  </div>
);
```

## Props

### Avatar (Root)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `1-9` | `3` | Dimensions following the standardized 9-step Radix proportional scale. |
| **`variant`** | `circle \| soft \| square` | `circle` | The corner-radius styling variant for the Avatar container. |

### AvatarFallback

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`delayMs`** | `number` | - | The delay duration (in milliseconds) before the fallback content is rendered. |
