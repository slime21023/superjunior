---
name: design-component
description: "Design component responsibilities, interfaces, behavior, or interactions before implementation."
license: MIT
---

# design-component

## Overview

Turn confirmed requirements into component contracts that implementers and testers can use.

- Assign responsibilities and data ownership explicitly.
- Specify caller-visible outcomes, including failures and side effects.
- Tie material design choices to requirements and affected contracts.

## Input

Requirements, constraints, and relevant system boundaries.

Use the confirmed requirements and acceptance criteria from the relevant `_spec/` document or the user's instructions. Inspect existing interfaces that the design will affect.

## Execution

Assign each behavior and relevant data to an owner. Identify callers and dependencies. Specify inputs, preconditions, outputs, side effects, and caller-visible failures. Record existing behavior that callers rely on and explain any compatibility impact.

Trace key behaviors to acceptance criteria and show who handles each failure. Use the project's existing notation or C4 when a diagram clarifies interactions. Record material trade-offs and their rationale. For pending decisions, identify the affected contracts and what can be implemented independently.

## Completion

When the task calls for a design document to be saved, write it under `_artifacts/design-component/` at the project root. Create the directory as needed and link to the file in the final reply.

Use this structure for a full component design:

```markdown
## Goal and basis
- **Goal** — State the behavior the design supports.
- **Basis** — Cite requirements, acceptance criteria, and affected existing contracts.

## Component responsibilities and boundaries
- **[Component]** — State its responsibilities, data ownership, callers, and dependencies.

## Interfaces and behavior
| Operation | Inputs and preconditions | Outputs and side effects | Failure outcome |
| --- | --- | --- | --- |
| [Operation] | [Input and valid conditions] | [Result and observable state changes] | [Failure condition and caller-visible outcome] |

## Interactions and verification
- **Interactions** — Describe the key call order, data flow, and who reports errors.
- **Verification** — List relevant normal, boundary, and failure cases with the corresponding acceptance criteria.

## Design decisions and open questions
- **Decision** — Record the chosen approach, rationale, and compatibility trade-offs.
- **Open question** — State the choice to confirm, the affected contract, and what can proceed.
```

For a small component, use a short contract and verification list. Omit sections that add no information. The design is ready for handoff when implementers can connect the components and testers can determine the expected outcomes.

See [worked examples](references/examples.md) for a pure filter and an export that crosses component boundaries.
