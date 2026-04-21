# Button Contract

> [!IMPORTANT]
> This document is the **parity contract** for the MMS `Button` component. Any rebuild, refactor, or parity fix must follow this contract together with the [[03 - Guidelines/Component Parity Workflow|Component Parity Workflow]].

## Contract Goal

The MMS `Button` must preserve **Radix button mechanics** while expressing **MMS semantic tokens**.

- Keep Radix-level behavior for structure, state transitions, ring logic, border logic, active feel, and size rhythm.
- Use MMS semantic colors for brand, status, neutral, and white-label behavior.
- Do not expand anatomy or color APIs casually.

## Reference Scope

### Mechanical Reference

The parity target is the Radix Themes button model:

- root-only button anatomy
- variant-driven styling
- size-driven height and typography rhythm
- precise focus ring behavior
- shadow usage only where the variant role requires elevation
- active and hover feedback that preserves layout stability

### MMS Deviations Allowed

The following differences are allowed and expected:

- dynamic runtime `accent` injection for white-label branding
- MMS semantic status colors
- MMS naming (`brand`, `error`, `warning`, `success`, etc.)
- local focus-halo utility classes
- MMS radius personality system

## Anatomy Contract

### Official Parts

- `Root`
- `Content`
- `LeftIcon`
- `RightIcon`
- `LoadingSpinner`

### Rules

- `Root` is the only mandatory structural element.
- `Content` must always exist to keep alignment stable.
- Icon wrappers are optional and only exist when icons are present.
- Loading uses the spinner in place of the left icon slot, not as a new layout branch.
- No extra wrapper layers may be added unless they solve a documented structural issue.

## Variant Contract

### Supported Variants

- `solid`
- `soft`
- `outline`
- `ghost`
- `surface`

### Variant Intent

- `solid`: high-intent primary/destructive/status action
- `soft`: low-emphasis semantic action with tinted surface
- `outline`: neutral or semantic action with precision ring border
- `ghost`: text-first action with hover reveal
- `surface`: raised precision action for dense professional UI

### Rules

- All five variants must exist together as one supported set.
- No variant may be partially implemented for only some colors.
- No undocumented variant may be added during a parity fix.

## Size Contract

### Supported Sizes

- `1`
- `2`
- `3`
- `4`

### Size Intent

- `1`: compact data-dense action
- `2`: default operational action
- `3`: prominent action
- `4`: large emphasis action

### Rules

- Height, horizontal padding, typography, and icon alignment must scale together.
- If size `4` remains in code, it must remain documented and audited.
- If size `4` is removed, the removal must be explicit in both code and docs.

## Radius Contract

### Supported Radius Props

- `none`
- `small`
- `medium`
- `large`
- `full`

### Rules

- Radius logic must remain compatible with the MMS radius personality system.
- `full` must preserve pill behavior without breaking inner geometry.
- `none` must resolve to a real token or a real zero value. It may not point to an undefined token.

## State Contract

### Required States

- default
- hover
- active
- focus-visible
- disabled
- loading

### Optional Contextual States

- icon-left only
- icon-right only
- icon both sides
- text-only

### Rules

- Focus-visible must be explicit and accessible.
- Active state must preserve layout stability and avoid motion that shifts text.
- Disabled must suppress hover/active affordances.
- Loading must disable interaction and preserve width rhythm as much as possible.

## Color Contract

### Canonical MMS Semantic Colors

- `brand`
- `success`
- `error`
- `warning`
- `gray`

### Extended Palette Colors

These should be treated as optional or legacy until formally reaffirmed:

- `secondary`
- `black`
- `orange`
- `blue`
- `purple`
- `sky`
- `pink`
- `teal`
- `lime`

### Mapping Rules

- `brand` -> `--accent-*`
- `success` -> `--success-*` plus success semantic surface/border roles where available
- `error` -> `--error-*` plus danger semantic surface/border roles where available
- `warning` -> `--warning-*` plus warning semantic surface/border roles where available
- `gray` -> neutral surface/content/border tokens

### Important Rule

The long-term preferred API is semantic, not palette-driven. Primitive hue families must not become the default authoring path for MMS.

## Token Contract

### Preferred Token Order

1. `--surface-*`, `--content-*`, `--border-*`
2. `--error-*`, `--success-*`, `--warning-*`
3. `--accent-*`
4. primitive color scales only when required for parity internals

### Required Foundations

- spacing via `--space-*`
- component sizing via `--size-*`
- typography via `--font-size-*`, `--line-height-*`, `--font-weight-*`
- radius via the MMS radius scale

### Structural Exceptions

Hardcoded `1px` and `0.5px` are allowed only for Radix-style precision boundaries.

## Focus Halo Contract

- Focus styling must exist for every supported color path.
- Unsupported focus-halo color classes are contract violations.
- If a color is public in the component API, its focus-visible output must also be supported.
- If the system wants a smaller supported set, the public color API must be reduced to match it.

## Known Drift To Resolve

These are current issues and must be treated as contract debt:

- `radius="none"` currently points to an undefined token path.
- focus halo coverage does not match the full public color API.
- docs and implementation disagree on whether size `4` is supported.
- palette-style color options currently exceed the semantic MMS direction.

## Completion Gate

A `Button` parity task is complete only if:

- anatomy matches this contract
- all supported variants are present
- all supported sizes are documented and implemented consistently
- focus-visible works for every public color path
- color mapping uses MMS semantics correctly
- no undefined tokens remain
- the component passes audits without unresolved contract violations

---
[[02 - Components/Button|Back to Button]] • [[03 - Guidelines/Component Parity Workflow|Parity Workflow]] • [[03 - Guidelines/Checklist|Audit Checklist]]
