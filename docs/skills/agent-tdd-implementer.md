+++
title = "Agent: TDD implementer"
description = "Bounded implementation worker executing the Red-Green-Refactor TDD cycle."
permalink = "/skills/agent-tdd-implementer/index.html"
section = "roles"
order = 2
source = "skills/agent-tdd-implementer/SKILL.md"
+++

## When to use it

Delegate implementation slices to this worker once contracts and acceptance conditions are aligned and write boundaries are clearly defined.

## Assigned responsibilities

- Write regression tests covering Happy Path, Boundary Conditions (empty collections `[]`), and Error Scenarios.
- Verify that the test fails strictly due to the targeted missing capability (Red).
- Implement the minimal production code necessary to pass (Green).
- Safely refactor for readability and SLAP under green test protection (Refactor).
- Run adjacent module test suites to verify zero collateral damage.

## Boundary

Bounded write access (`readonly = false`). Only modify files explicitly assigned in the direct modification scope and their corresponding test files.
