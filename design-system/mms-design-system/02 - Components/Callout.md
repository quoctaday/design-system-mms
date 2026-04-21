# Callout

A structural component designed to present important notifications, contextually relevant annotations, or critical warnings within a visually prominent block.

## Features

- **Semantic Variants**: Fully supports state-representative color tones (`brand`, `success`, `warning`, `error`, `gray`) to communicate intent instantly.
- **Surface Modes**: Offers three distinct visual treatments (`soft`, `surface`, `outline`) to accommodate varying levels of information priority and UI hierarchy.
- **Icon Support**: Includes a dedicated icon slot to bolster visual recognition and reinforce the semantic message.

## Usage

```tsx
import { Callout } from '@mms/ui';
import { RiInformationLine } from 'react-icons/ri';

export const Example = () => (
  <Callout.Root color="brand" variant="soft">
    <Callout.Icon>
      <RiInformationLine />
    </Callout.Icon>
    <Callout.Text>
      You are currently viewing the alpha preview of the MMS Design System. Some components may undergo architectural hardening.
    </Callout.Text>
  </Callout.Root>
);
```

## Props

### Callout.Root

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `1 \| 2 \| 3` | `2` | Determines the overall scale and padding of the Callout block. |
| **`variant`** | `soft \| surface \| outline` | `soft` | Defines the background materiality and border presence. |
| **`color`** | `brand \| gray \| success \| warning \| error` | `brand` | Sets the semantic color palette based on the information context. |
