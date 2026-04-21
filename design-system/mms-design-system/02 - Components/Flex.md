# Flex

A core layout component derived from `Box`, specialized for managing one-dimensional layouts using the Flexbox model. It provides comprehensive support for responsive alignment, distribution, and spacing properties.

## Features

- **Box Synergy**: Seamlessly inherits all utility properties from `Box`, including padding, margin, and dimension controls.
- **Responsive Layout Control**: Flexibly manages `direction`, `align`, `justify`, and `wrap` properties across the designated system breakpoints.
- **Systemic Gap Management**: Employs the standardized 0-9 spacing token system (Modular 4px baseline) rather than raw pixel values, ensuring perfect architectural alignment with the global grid.

## Usage

```tsx
import { Flex, Button } from '@mms/ui';

export const Example = () => (
  <Flex direction="row" align="center" justify="between" gap="4">
    <Flex direction="column" gap="1">
      <span style={{ fontWeight: 'bold' }}>Card Title</span>
      <span style={{ color: 'var(--gray-11)' }}>Secondary description</span>
    </Flex>
    <Button variant="soft">Confirm Action</Button>
  </Flex>
);
```

## Props (Responsive Supported)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`direction`** | `row \| column \| row-reverse \| column-reverse` | `row` | Determines the orientation of the child elements. |
| **`align`** | `start \| center \| end \| baseline \| stretch` | `stretch` | Controls alignment along the cross-axis. |
| **`justify`** | `start \| center \| end \| between` | `start` | Controls distribution along the main-axis. |
| **`wrap`** | `nowrap \| wrap \| wrap-reverse` | `nowrap` | Determines whether items should wrap to multiple lines. |
| **`gap`** | `0` - `9` | `0` | Specifies the spacing between child elements using system tokens. |

*Note: Flex also reserves support for all architectural props available in the [[02 - Components/Box|Box]] component.*
