+++
title = "Craft discussing"
description = "Agree on goals, feasibility, and technology choices through discussion before any code is written."
permalink = "/skills/craft-discussing/index.html"
section = "senior"
order = 3
source = "skills/craft-discussing/SKILL.md"
+++

## When to use it

Use it at the start of a new system or a significant change, when the goals, feasibility, or technology stack are still open. The agent acts as an architect you think out loud with: it challenges unnecessary complexity, prefers proven technology unless a requirement demands something specialized, and names what each option costs.

Craft discussing is part of [senior mode](/skills/senior-mode/).

## What it does

1. Clarifies the problem before solutions: the core mission, expected scale and latency, budget, timeline, team familiarity, hosting, legacy integrations, and non-goals. Where something is missing, it states an assumption and checks it with you.
2. Maps what the design depends on: specialized knowledge the team needs, consistency requirements, read and write patterns, deployment and monitoring concerns, and feasibility red flags such as single points of failure.
3. Compares two or three viable approaches on operational overhead, development speed, cognitive load, ecosystem stability, and how hard they are to migrate away from.
4. Asks targeted questions on the forks that remain, and only summarizes once you agree on the stack and topology.

## What you get

An architecture brief with five parts:

- **Architectural verdict**: the chosen topology, governing philosophy, and main stack choices.
- **Goals and constraints**: what the architecture guarantees, hard limits, and explicit non-goals.
- **Stack and tradeoffs**: a table of each layer's chosen technology, the alternatives considered, and the tradeoff accepted.
- **Knowledge and risks**: what the team must understand first, and the main failure points with mitigations.
- **Next steps**: the first three structural steps toward implementation.

## Boundaries

This skill produces discussion only: no production code, boilerplate, build scripts, configuration files, or scaffolding. Once boundaries are agreed, [architecture componentization](/skills/arch-componentize/) records them and [architecture detail](/skills/arch-detail/) specifies individual components.

## Example request

```text
Use craft-discussing.
We need to ingest about 2,000 sensor readings per second and keep 90 days of history on a small team.
Compare storage options and agree on a stack before we build anything.
```
