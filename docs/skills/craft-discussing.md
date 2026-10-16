+++
title = "Craft discussing"
description = "Agree on architectural goals, feasibility, and technology tradeoffs before implementation."
permalink = "/skills/craft-discussing/index.html"
section = "senior"
order = 3
source = "skills/craft-discussing/SKILL.md"
+++

## When to use it

Use for architectural ideation, system design discovery, feasibility, and stack selection. The result is a conceptual architectural brief agreed through discussion.

## Explore and converge

Start with mission, workload and performance expectations, budget, timeline, team familiarity, hosting, legacy integrations, and non-goals. State missing assumptions and verify them with the user.

Map prerequisite knowledge, consistency requirements, access patterns, deployment considerations, and feasibility risks. Compare two or three viable approaches across operational overhead, development velocity, cognitive load, ecosystem stability, and migration flexibility.

Explain accepted tradeoffs. Align with the user on unresolved choices before producing the final topology and stack summary. Use the [technology evaluation prompt](/source/skills/craft-discussing/references/tech-eval-prompt.md) for complex infrastructure choices through an authorized host.

## Return the brief

Use the [blueprint prompt](/source/skills/craft-discussing/references/blueprint-prompt.md). The result covers:

- Architectural verdict and chosen topology.
- Goals, constraints, and non-goals.
- Stack choices, considered alternatives, and accepted costs.
- Prerequisite knowledge and feasibility risks.
- The first three structural implementation steps.

## Boundary and next step

This skill produces no production code, boilerplate, build scripts, or implementation scaffolding. It prefers established technology unless requirements justify another choice.

Once boundaries are confirmed, [arch-componentize](/skills/arch-componentize/) can persist the component structure. [Arch-detail](/skills/arch-detail/) then specifies a declared component's contracts and behavior.
