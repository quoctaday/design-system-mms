# Ironclad Audit Report v5.1: Slider

**Timestamp:** 2026-04-20T08:41:56.955Z
**Parity Score:** 🛡️ MIRROR CERTIFIED (100%)

| Category | Property | Status | Expected DNA | Warnings |
| :--- | :--- | :---: | :--- | :--- |
| Variable | --slider-thumb-size | ✅ | `calc(var(--slider-track-size) + var(--space-1))` | - |
| Variable | --slider-track-size | ✅ | `calc(var(--space-2) * 1.25)` | - |
| Variable | --slider-thumb-box-shadow | ✅ | `0 0 0 1px var(--black-a4)` | - |
| Variable | --slider-range-high-contrast-background-image | ✅ | `none` | - |
| Variable | --slider-disabled-blend-mode | ✅ | `screen` | - |
| Geometry | rootRadius | ✅ | `max( calc(var(--radius-factor) * var(--slider-track-size) / 3), calc(var(--radius-factor) * var(--radius-thumb)) )` | - |
| Materiality (surface) | Track background-color | ✅ | `var(--gray-a3)` | - |
| Materiality (surface) | Track box-shadow | ✅ | `inset 0 0 0 1px var(--gray-a5)` | - |
| Materiality (surface) | Track color | ✅ | `var(--gray-a3)` | - |
| Materiality (surface) | Range background-color | ✅ | `var(--accent-track)` | - |
| Materiality (surface) | Range background-image | ✅ | `var(--slider-range-high-contrast-background-image)` | - |
| Materiality (surface) | Range box-shadow | ✅ | `inset 0 0 0 1px var(--gray-a5)` | - |
| Materiality (surface) | Range color | ✅ | `var(--accent-track)` | - |
| Materiality (surface) | Thumb background-color | ✅ | `var(--gray-1)` | - |
| Materiality (surface) | Thumb box-shadow | ✅ | `0 0 0 1px var(--black-a4)` | - |
| Materiality (surface) | Thumb color | ✅ | `var(--gray-1)` | - |
| Materiality (classic) | Track background-color | ✅ | `var(--gray-a3)` | - |
| Materiality (classic) | Track box-shadow | ✅ | `var(--shadow-1)` | Redundancy: Structural redundant inset ring |
| Materiality (classic) | Track opacity | ✅ | `0.5` | - |
| Materiality (classic) | Track color | ✅ | `var(--gray-a3)` | - |
| Materiality (classic) | Range background-color | ✅ | `var(--accent-track)` | - |
| Materiality (classic) | Range background-image | ✅ | `var(--slider-range-high-contrast-background-image)` | - |
| Materiality (classic) | Range box-shadow | ✅ | `inset 0 0 0 1px var(--gray-a3), inset 0 0 0 1px var(--accent-a4), inset 0 0 0 1px var(--black-a1), inset 0 1.5px 2px 0 var(--black-a2)` | Redundancy: Structural redundant inset ring, Structural redundant inset ring |
| Materiality (classic) | Range color | ✅ | `var(--accent-track)` | - |
| Materiality (classic) | Thumb background-color | ✅ | `var(--gray-1)` | - |
| Materiality (classic) | Thumb box-shadow | ✅ | `0 0 0 1px var(--black-a3), 0 1px 3px var(--black-a1), 0 2px 4px -1px var(--black-a1)` | - |
| Materiality (classic) | Thumb color | ✅ | `var(--gray-1)` | - |
| Materiality (soft) | Track background-color | ✅ | `var(--gray-a4)` | - |
| Materiality (soft) | Track background-image | ✅ | `linear-gradient(var(--white-a1), var(--white-a1))` | - |
| Materiality (soft) | Track color | ✅ | `var(--gray-a4)` | - |
| Materiality (soft) | Range background-color | ✅ | `var(--accent-6)` | - |
| Materiality (soft) | Range background-image | ✅ | `linear-gradient(var(--accent-a5), var(--accent-a5)), var(--slider-range-high-contrast-background-image)` | - |
| Materiality (soft) | Range color | ✅ | `var(--accent-6)` | - |
| Materiality (soft) | Thumb background-color | ✅ | `var(--gray-1)` | - |
| Materiality (soft) | Thumb box-shadow | ✅ | `0 0 0 1px var(--black-a3), 0 0 0 1px var(--gray-a2), 0 0 0 1px var(--accent-a2), 0 1px 2px var(--gray-a4), 0 1px 3px -0.5px var(--gray-a3)` | Redundancy: Structural redundant outset ring, Structural redundant outset ring |
| Materiality (soft) | Thumb color | ✅ | `var(--gray-1)` | - |
