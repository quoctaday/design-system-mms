# Text

The foundational component for rendering textual content, engineered for maximum flexibility and absolute legibility within the MMS platform.

## Features

- **Standardized Proportional Scaling**: Synchronized 9-step sizing system that maintains perfect consistency with Heading components.
- **Optical Tracking Control**: Automatically applies context-aware character spacing. Smaller sizes utilize slightly expanded tracking to maximize readability, while larger sizes compress for a professional, "locked-in" editorial finish.
- **High-Density Optimized**: Standardized at size 3 (14px) to satisfy the rigorous information density requirements of the MMS Dashboard ecosystem.
- **Versatile Application**: Fully polymorphic architecture that supports varying semantic HTML contexts, from inline `span` elements and `labels` to multi-line `paragraphs`.

## Usage

```tsx
import { Text } from '@mms/ui';

export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <Text size="3">This is the standard operational body text (14px).</Text>
    <Text size="2" weight="medium">
      Secondary metadata text with medium weight (12px).
    </Text>
    <Text size="5" as="p">
      A larger informative paragraph featuring automatic optical tracking adjustments.
    </Text>
  </div>
);
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `1-9` | `3` | Sets the dimensions and tracking following the 9-step Radix scale. |
| **`weight`** | `light \| regular \| medium \| semibold \| bold` | `regular` | Defines the typographic weight/thickness. |
| **`align`** | `left \| center \| right` | - | Controls the horizontal text alignment within its container. |
| **`trim`** | `normal \| start \| end \| both \| none` | `none` | Manages the removal of excess font-metric white-space (leading). |
| **`as`** | `span \| div \| p \| label \| ...` | `span` | Determines the underlying semantic HTML tag to be rendered. |
| **`highContrast`**| `boolean` | `false` | Increases color contrast for enhanced legibility against complex surfaces. |
