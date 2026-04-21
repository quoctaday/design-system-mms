# Kbd

A dedicated component used to display keyboard shortcuts and command combinations, assisting users in discovering and identifying rapid operational workflows within the platform.

## Features

- **Semantic HTML**: Implements the standard `<kbd>` HTML tag to ensure structural semantic correctness and reliable screen reader support.
- **Consistent Scaling**: Provides three precision sizing levels designed to fit seamlessly into different UI contexts, such as within Tooltips, DropdownMenus, or standard body text.
- **Subtle Materiality**: Features a delicate, elevated block design that adheres strictly to the Flat-Premium visual standard.

## Usage

```tsx
import { Kbd, Flex, Text } from '@mms/ui';

export const Example = () => (
  <Flex gap="2" align="center">
    <Text>Press</Text>
    <Kbd size="2">⌘</Kbd>
    <Kbd size="2">K</Kbd>
    <Text>to initiate global search</Text>
  </Flex>
);
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `1 \| 2 \| 3` | `2` | Determines the height and typography scale of the Kbd component. |
| **`children`** | `ReactNode` | - | The character, icon, or key name text to be displayed within the key block. |
