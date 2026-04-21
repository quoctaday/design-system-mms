# Ironclad Audit Report v5.1: SegmentedControl

**Timestamp:** 2026-04-20T08:41:08.915Z
**Parity Score:** 🛡️ MIRROR CERTIFIED (100%)

| Category | Property | Status | Expected DNA | Warnings |
| :--- | :--- | :---: | :--- | :--- |
| Variable | --segmented-control-height-1 | ✅ | `var(--space-5)` | - |
| Variable | --segmented-control-height-2 | ✅ | `var(--space-6)` | - |
| Variable | --segmented-control-height-3 | ✅ | `var(--space-7)` | - |
| Variable | --segmented-control-indicator-transition | ✅ | `200ms cubic-bezier(0.445, 0.05, 0.55, 0.95)` | - |
| Variable | --segmented-indicator-box-shadow | ✅ | `none` | - |
| Geometry | rootRadius | ✅ | `var(--radius-thumb)` | - |
| Materiality (surface) | Indicator background-color | ✅ | `var(--white)` | - |
| Materiality (surface) | Indicator --segmented-indicator-box-shadow | ✅ | `0 0 0 1px var(--gray-a4)` | - |
| Materiality (classic) | Indicator background-color | ✅ | `var(--white)` | - |
| Materiality (classic) | Indicator --segmented-indicator-box-shadow | ✅ | `var(--shadow-2)` | Redundancy: Structural redundant outset ring |
| Materiality (soft) | Indicator background-color | ✅ | `var(--white)` | - |
| Materiality (soft) | Indicator --segmented-indicator-box-shadow | ✅ | `var(--shadow-1)` | Redundancy: Structural redundant inset ring |
