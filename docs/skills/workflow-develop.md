+++
title = "Develop"
description = "Complete one scoped change and return an identified, reviewable candidate."
permalink = "/skills/workflow-develop/index.html"
section = "workflows"
order = 1
source = "skills/workflow-develop/SKILL.md"
+++

## Inputs

Provide the requested outcome, acceptance conditions, scope, starting artifact, and constraints. A development pass means ready for review.

## Work through the unit

1. Translate the request into observable acceptance conditions. Inspect facts before asking about consequential choices.
2. Trace the affected execution flow, shared callers, tests, and reusable implementations. Reproduce a defect before correcting its cause.
3. Choose the smallest complete change. Establish shared contracts before splitting work and keep required related edits together.
4. Implement within scope. Use [TDD](/skills/tdd/) for a cheap local regression path, retaining its fallback and circuit breakers. Use [how-works](/skills/how-works/) when a subsystem explanation helps.
5. Run checks appropriate to acceptance conditions and risk. Distinguish actual defects, environmental gaps, and unreliable observations.
6. Inspect the final diff and identify the candidate, including dirty contents. Retain self-check evidence for later reuse while its assumptions remain valid.

## Delegate when useful

Direct work is the default. An [explorer](/subagents/) can investigate separable context; an implementer can complete a slice with stable contracts and explicit writable paths. Respect available concurrency and budget, preserve one owner for shared interfaces, and isolate mutable resources.

Inspect returned changes and rerun checks affected by integration. Workers return their slice; further delegation needs an explicit grant.

## Return and outcomes

Return candidate identity, changed paths, rationale, actual self-checks, limitations, and next action.

- `pass`: the assigned change and required development checks are complete.
- `needs-change`: a confirmed implementation or contract problem remains.
- `unverified`: necessary development evidence is unavailable or unreliable.
- `needs-decision`: a consequential scope or product choice is unresolved.

## Applicable principles

Read [define done](/skills/principle-define-done/), [understand before changing](/skills/principle-understand-before-changing/), [sequence small units](/skills/principle-sequence-small-units/), [keep solutions simple](/skills/principle-keep-solutions-simple/), [use fast feedback](/skills/principle-use-fast-feedback/), [match rigor to risk](/skills/principle-match-rigor-to-risk/), and [bind evidence to version](/skills/principle-bind-evidence-to-version/).

Development alone does not authorize a merge, publication, deployment, or a broader route.
