# Inset

A utility component used to push child content flush against the edges of its parent container (typically a Card or Dialog), effectively neutralizing the parent's default padding to achieve an "edge-to-edge" visual effect.

## Features

- **Directional Control**: Precisely push content against one or more specific edges (`top`, `bottom`, `left`, `right`, `x`, `y`, `all`).
- **Clip Behavior**: Automatically manages content overflow to ensure the parent container's corner radii remain intact using the `clip="border-box"` property.
- **Media Optimization**: Perfectly suited for hero images, maps, or high-density data tables that require the full width of their container.

## Usage

```tsx
import { Card, Inset, Text } from '@mms/ui';

export const Example = () => (
  <Card size="2">
    <Inset side="top" clip="border-box">
      <img 
        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?w=600&q=80" 
        style={{ width: '100%', height: '120px', objectFit: 'cover' }}
      />
    </Inset>
    <Text as="p" size="2" mt="3">
      The image above has been pushed flush against the Card's top and side edges using the Inset component.
    </Text>
  </Card>
);
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`side`** | `all \| top \| bottom \| left \| right \| x \| y` | `all` | Specifies which edge(s) to push flush against the parent boundary. |
| **`clip`** | `none \| border-box` | `border-box` | Determines how content overflow is handled at the container's rounded corners. |
