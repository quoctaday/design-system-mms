# Heading

A collection of high-fidelity heading components, meticulously optimized for visual sharpness and precision vertical alignment within the MMS ecosystem.

## Features

- **Standardized Proportional Scaling**: Fully supports the 1-9 Radix thematic sizing scale for consistent typographic hierarchy.
- **Optical Tracking Control**: Automatically applies context-aware `letter-spacing`. As the font size escalates, character tracking progressively tightens to maintain a professional, "locked-in" editorial appearance.
- **Leading Trim Integration**: Effectively eliminates redundant vertical white-space inherent in font metrics, allowing for absolute pixel-perfect centering when paired with icons or layout containers.
- **Polymorphic Architecture**: Seamlessly transitions its underlying HTML representation between `h1`-`h6`, `div`, or `span` tags while maintaining its visual style.

## Usage

```tsx
import { Heading } from '@mms/ui';

export const Example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Heading size="9">Headline Premium</Heading>
    <Heading size="6" weight="medium" color="gray">
      Sub-heading with medium weight
    </Heading>
    <Heading size="4" trim="both">
      Trimmed Heading for perfect alignment
    </Heading>
  </div>
);
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `1-9` | `6` | Sets the dimensions and tracking following the 9-step Radix scale. |
| **`weight`** | `light \| regular \| medium \| bold` | `bold` | Defines the typographic weight/thickness. |
| **`trim`** | `normal \| start \| end \| both \| none` | `normal` | Controls the removal of excess font-metric white-space (leading). |
| **`as`** | `h1-h6 \| div \| span` | `h2` | Determines the underlying semantic HTML tag to be rendered. |
| **`highContrast`**| `boolean` | `false` | Increases color contrast for enhanced legibility against complex backgrounds. |
