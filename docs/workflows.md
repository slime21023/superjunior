+++
title = "The engineering workflows"
navTitle = "Workflows overview"
description = "Systematic daily workflows to control risk, verify contracts, and ensure code quality."
section = "workflows"
order = 0
permalink = "/workflows/index.html"
+++

## Workflow contracts

The engineering workflows guide each phase of implementation from initial pre-flight alignment to final atomic commit. Each workflow has strict contracts and observable exit criteria:

```xml
<lifecycle-contracts>
  <workflow name="Align scope" phase="pre-flight">Problem statement, Done criteria, and mapped blast radius</workflow>
  <workflow name="Context TDD" phase="implementation">Passing test specs (Happy Path, Boundary, Error) and minimal implementation</workflow>
  <workflow name="Scientific debug" phase="defect-diagnosis">Falsifiable hypothesis, minimal repro test, and root-cause fix</workflow>
  <workflow name="Self review" phase="pre-commit">Four-layer design audit checklist satisfying quality gates</workflow>
  <workflow name="Atomic commit" phase="delivery">Single-responsibility staged diff and informative why-commit message</workflow>
</lifecycle-contracts>
```

- [Align scope](/skills/workflow-align-scope/): Pre-flight alignment defining problem statement, Done criteria, and mapped blast radius before modifying code.
- [Context TDD](/skills/workflow-context-tdd/): Implementation cycle covering Happy Path, Boundary Conditions (`[]`), and Error Scenarios under Red-Green-Refactor.
- [Scientific debug](/skills/workflow-scientific-debug/): Empirical protocol parsing logs, formulating hypotheses, and building minimal reproduction tests to fix root causes.
- [Self review](/skills/workflow-self-review/): Pre-commit quality gate auditing diffs against the Four-Layer Software Design Principles.
- [Atomic commit](/skills/workflow-atomic-commit/): Final delivery ensuring single responsibility, passing test invariants, and informative why-commit messages.

## Shared outcomes

```xml
<workflow-outcomes>
  <outcome code="pass">Required conditions are satisfied; advance to subsequent phase.</outcome>
  <outcome code="needs-change">Confirmed defect or smell remains; return to implementation or debugging.</outcome>
  <outcome code="unverified">Required test evidence is missing or unreliable; restore test environment.</outcome>
  <outcome code="needs-decision">Consequential requirement unresolved; escalate structured question to user.</outcome>
</workflow-outcomes>
```

The owner reconciles each returned result with the actual candidate. A passing phase establishes only that phase's conclusion.

## Run the cycle

[Potato-mode](/skills/potato-mode/) coordinates the complete daily engineering cycle:
1. **Align Scope**: Define the problem and map direct, ripple, and untouched blast radius.
2. **Context TDD**: Formulate tests across Happy Path, Boundary, and Error quadrants; run Red ➔ Green ➔ Refactor.
3. **Scientific Debug** (when defects occur): Parse logs, build minimal repro, fix root cause at caller convergence.
4. **Self Review**: Audit code against the Four-Layer Software Design Principles.
5. **Atomic Commit**: Package deliverables into single-responsibility commits explaining the "Why".
