# DataList

A structural component designed for presenting data as a series of Label and Value pairs, prioritized for detail-oriented pages or operational dashboards.

## Features

- **Standardized Proportions**: Automatically calibrates the ratio between the label and the value to ensure visual balance and legibility.
- **Hierarchical Structure**: Utilizes a robust Root > Item > Label/Value composition to manage complex data entries effectively.
- **Responsive Sizes**: Fully supports three precisely calibrated sizing levels synchronized with the global UI scale.

## Usage

```tsx
import { DataList } from '@mms/ui';

export const Example = () => (
  <DataList.Root size="2">
    <DataList.Item>
      <DataList.Label>Identifier</DataList.Label>
      <DataList.Value>MMS-2024-001</DataList.Value>
    </DataList.Item>
    
    <DataList.Item>
      <DataList.Label>Status</DataList.Label>
      <DataList.Value>Active</DataList.Value>
    </DataList.Item>
  </DataList.Root>
);
```

## Props

### DataList.Root

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `1 \| 2 \| 3` | `2` | Determines the overall scale and density of the DataList. |
