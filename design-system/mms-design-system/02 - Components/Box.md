# Box

The most fundamental architectural primitive in the MMS layout engine, providing a robust set of utility props to control spacing, dimensions, and positioning with absolute systemic consistency.

## Features

- **Responsive Prop System**: Nearly all stylistic properties support a responsive object syntax (e.g., `p={{ initial: '2', md: '4' }}`), enabling complex adaptive layouts without custom CSS.
- **Systemic Spacing Logic**: Built on the standardized 0-9 token scale (derived from the modular 4px baseline) for both Padding (`p`) and Margin (`m`).
- **Polymorphic Architecture**: Can be seamlessly rendered as any valid HTML element via the `as` prop (defaults to a standard `div`).
- **Flexible Layout Integration**: Functions as a high-performance wrapper for any component, offering granular control over flexbox and grid flow (e.g., grow, shrink, grid-column spanning).

## Usage

```tsx
import { Box } from '@mms/ui';

export const Example = () => (
  <Box 
    p="4" 
    m="2" 
    width="full" 
    height="200px" 
    border="b" 
    display="flex"
    position="relative"
  >
    Content nested within a Box utilizing level 4 padding and a bottom border definition.
  </Box>
);
```

## Props (Responsive Supported)

| Group | Props | Values |
| :--- | :--- | :--- |
| **Padding** | `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl` | `0` - `9` |
| **Margin** | `m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml` | `0` - `9` |
| **Dimensions** | `width`, `height` | `px`, `auto`, `full`, `0-9`... |
| **Position** | `position`, `inset`, `top`, `right`, `bottom`, `left` | `static`, `relative`, `absolute`... |
| **Flex/Grid Child** | `grow`, `shrink`, `basis`, `gridColumn`, `gridRow` | `0`, `1`, `auto`, `span 1-12`... |
| **Miscellaneous** | `as`, `display`, `border`, `zIndex` | `div`, `span`, `none`, `1-5`... |
