# Switch

A toggle component used for rapidly switching between two exclusive states.

## 📏 Sizing (Radix 3.0 Parity)
| Prop | Track Size | Thumb Size | Usage |
| :--- | :--- | :--- | :--- |
| `size="1"` | `28x16px` | `14px` | Compact settings (Inset 1px) |
| `size="2"` | `35x20px` | `18px` | Standard preference panels (Default) |
| `size="3"` | `42x24px` | `22px` | Touch-friendly interfaces |

## 🎨 Token Specs
- **Track Border**: Utilizes `box-shadow: inset` with `var(--stroke-width-1)` to define a crisp, resolution-independent boundary without inducing layout shifts.
- **Active State**: Uses the high-impact `step-9` (Solid) token from the defined palette (e.g., `brand`, `success`, `error`).
- **Thumb Architecture**: A perfect circle (`radius-full`) using the layered `var(--shadow-2)` token to ensure physical material depth against the track.
- **Animation**: Employs an optimized `cubic-bezier(0.16, 1, 0.3, 1)` curve for a rapid, decisive toggle transition that mimics premium mechanical hardware.
- **Label Alignment**: Applies **WokerDS leading-trim** to the `mms-switch-label` for exact vertical alignment with the toggle track.

---
**Related:** [[02 - Components/Checkbox|Checkbox]] • [[02 - Components/Button|Button]] • [[01 - Foundations/Colors|Colors Foundation]]
