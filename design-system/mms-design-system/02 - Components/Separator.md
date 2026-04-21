# Separator

A structural component used to visually separate distinct blocks of content, fully supporting both horizontal and vertical orientations.

## Features

- **Directional Flexibility**: Effortlessly switches between `horizontal` and `vertical` orientations to adapt to any layout or interface requirement.
- **Size Variations**: Offers three precisely calibrated length/coverage levels to regulate the visual rhythm of the surrounding layout.
- **Hairline Precision**: Utilizes an ultra-fine hairline thickness (`0.5px`) by default to maintain the high-fidelity Flat-Premium aesthetic established in WokerDS.

## Usage

```tsx
import { Separator, Flex, Text } from '@mms/ui';

export const Example = () => (
  <Flex direction="column" gap="4">
    <Text>Top section content</Text>
    <Separator orientation="horizontal" size="3" />
    <Text>Bottom section content</Text>
    
    <Flex direction="row" gap="3" align="center">
      <Text>Profile</Text>
      <Separator orientation="vertical" />
      <Text>Settings</Text>
    </Flex>
  </Flex>
);
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`orientation`** | `horizontal \| vertical` | `horizontal` | Specifies the direction of the divider line. |
| **`size`** | `1 \| 2 \| 3` | `1` | Determines the length/coverage span of the separator. |
