# BrandSwitcher (BrandPanel)

A high-level system control component that enables users to dynamically modify the application's global appearance (Theme, Radius, Scaling) and switch between specialized brands within the MMS ecosystem.

## Features

- **Floating Intelligence**: Persistently docked at the top-right corner, with the ability to collapse into a floating action button (FAB) to maximize workspace area.
- **Dynamic Theming Engine**: Integrated directly with `ThemeContext` to facilitate real-time adjustments of Light/Dark modes, Radius (corner rounding), and Scaling (zoom levels) across the entire UI.
- **Brand Identity Swap**: Enables instantaneous switching of brand identifiers, including logos and primary semantic color palettes.
- **Tab-based Controls**: Utilizes a minimalist Tab architecture to organize configuration parameters cleanly.

## Usage

The `BrandPanel` is typically deployed at the root level of the application architecture (e.g., within `App.tsx` or `Layout.tsx`) to provide centralized customization capabilities.

```tsx
import { BrandPanel } from '@mms/ui';

export const Layout = ({ children }) => (
  <div className="app-layout">
    <BrandPanel />
    <main>{children}</main>
  </div>
);
```

## Internal Controls

This component functions autonomously and does not require external props. It connects directly to the following system providers:
- **Appearance**: Toggles between `Light` and `Dark` modes.
- **Radius Scale**: Selects from `None`, `Small`, `Medium`, `Large`, or `Full`.
- **Scaling Precision**: Adjusts global UI scale benchmarks from `90%` to `110%`.
- **Active Brand**: Displays a list of available brand identities for immediate ecosystem switching.
