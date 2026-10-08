+++
title = "Architecture detail"
description = "Specify one declared component's contracts, sequences, invariants, and failure handling."
permalink = "/skills/arch-detail/index.html"
section = "other"
order = 7
source = "skills/arch-detail/SKILL.md"
+++

## Required anchor

Read `_adr/base.xml` and locate the requested component by its unique ID. Use scope and ownership to define capabilities, delegates and dependencies to define outbound interactions, and exclusions to guard the boundary.

Treat the base specification as immutable during this step. If a requirement violates its boundary, resolve the architecture change first.

## Resolve operational choices

Identify undecided interaction style, state lifecycle, concurrency assumptions, consistency, retries, idempotency, and failure tolerances.

When a critical choice is unresolved, ask one to three targeted decision questions and wait before creating the detailed document. Do not invent protocols or error policies.

## Model five dimensions

Use the [component detail prompt](/source/skills/arch-detail/references/component-detail-prompt.md) to specify:

1. Public contracts and input/output data models using pure signatures.
2. Runtime interactions through a Mermaid sequence diagram.
3. State, preconditions, postconditions, and transition invariants.
4. Domain errors, system faults, and recovery actions.
5. Observable behavior and verification anchors for later regression checks.

## Persist and return

Save the resolved design to `_adr/components/{component-id}.md`. Return the path, full specification, and three takeaways covering the primary interface, outbound flow, and critical invariant or recovery rule.

## Boundary

Define interfaces, types, and structures without business algorithms, function bodies, or framework plumbing. Do not overlap another component's ownership or violate the target's exclusions.

If the base component is missing or its boundary is unsuitable, return that dependency to [arch-componentize](/skills/arch-componentize/). Implementation follows as a separately authorized development task.
