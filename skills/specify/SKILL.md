---
name: specify
description: "Define requirements when a goal, scope, or expected behavior needs clarification."
license: MIT
---

# specify

## Input

The requested outcome and available constraints or context.

## Execution

Identify who needs what and why. Use the user's request and existing contracts to define observable behavior, relevant edge cases, and constraints. Include implementation details only when the user or an existing contract requires them.

Resolve ambiguities from available evidence first. Ask the user when a choice materially changes behavior, scope, or acceptance. Keep confirmed requirements distinct from assumptions and pending decisions. Mark affected acceptance criteria as pending and identify any decision that blocks implementation.

## Completion

Write all specification documents, including drafts with pending decisions, under `_spec/` at the project root. Create the directory when needed. Follow the project's filename conventions and update the relevant specification in place when revising it.

Use this structure for a full specification:

```markdown
## Goal
State the user's problem and desired outcome.

## Requirements and scope
- **R1** — State the observable behavior and when it applies.
- **Constraints** — Record limits required by the user or an existing contract.
- **Out of scope** — Record confirmed exclusions where the boundary could otherwise be unclear.

## Acceptance criteria
- **AC1 (R1)** — Given [condition], when [action or event], expect [observable result].

## Assumptions and open decisions
- **Assumption** — State what is assumed and which requirement it affects.
- **Open decision** — Describe the options and identify the affected requirement or acceptance criterion.
```

Omit empty sections and fields. Reuse existing identifiers when available. For a small change, use a short goal and verifiable acceptance criteria without identifiers.

See [worked examples](references/examples.md) for a complete specification and one with a pending decision. In the final reply, link to the document and summarize any decision that blocks acceptance or implementation.
