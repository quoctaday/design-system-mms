# Guideline: Calling the Design Agency CLI

The MMS Design System includes a built-in "Design Agency" (powered by AI) that helps you brainstorm new features, layouts, and components while following the project's strict design principles.

## 🚀 How to Run

To get quick design recommendations for a new feature, run the following command from your terminal:

```bash
# General query
python3 .agent/skills/wokerds/scripts/design_system.py "operation analytics dashboard"

# Specific feature query
python3 .agent/skills/wokerds/scripts/design_system.py "user settings profile page with high data density"
```

## 🧠 Intelligence Architecture

The agency's "brain" is stored and managed within this design system:
- **Protocol:** `00 - Intelligence/agent-protocol.json` (Directs token mapping)
- **Instructions:** `00 - Intelligence/agent-instructions.md` (Governs creative logic)

### Why this matters
All design suggestions are **automatically mapped** to your CSS tokens. You won't get random hex codes; you'll get variable names like `var(--brand-9)` and `var(--surface-app)` that you can copy and paste directly into your components.

### Modifying the Agency
If you change the design system (e.g., adding a new surface color), simply update the `agent-protocol.json` file. The agency will immediately start recommending the new tokens in its next run.

## ⚠️ Creative Constraints (Enforced)
- **Typography:** Strictly Inter Display / Inter.
- **Elevation:** Flat-Premium (No shadows without approval).
- **Colors:** Semantic tokens only.
