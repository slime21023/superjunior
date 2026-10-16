+++
title = "Align scope"
description = "Phase 1 pre-flight alignment: problem definition, Done criteria, and mapped blast radius."
permalink = "/skills/workflow-align-scope/index.html"
section = "workflows"
order = 1
source = "skills/workflow-align-scope/SKILL.md"
+++

## When to use it

Execute before touching code on any new feature, bug fix, or refactor to eliminate silent assumptions and bound the blast radius.

## Apply it

1. Write a 1~2 sentence plain-language problem statement.
2. Define 2~3 concrete, verifiable Done Criteria.
3. Map the 3-tier Blast Radius:
   - Direct: Files and types directly altered.
   - Ripple: Upstream callers, downstream consumers, and regression suites.
   - Untouched: Explicitly off-limits adjacent modules.
4. Sequence implementation steps: Types & Contracts ➔ Core Logic ➔ Verification Commands.

## Boundary

If requirements or architectural boundaries are ambiguous, return `needs-decision` with targeted questions rather than guessing.
