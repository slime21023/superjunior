+++
name = "workflow-develop"
description = "Implement one complete, scoped software change with observable acceptance criteria, a traced execution flow, and proportionate self-checks. Use for features, fixes, or refactors; return a reviewable candidate."
outcomes = ["pass", "needs-change", "unverified", "needs-decision"]

[subagents.explorer]
file = "references/explorer.toml"
readonly = true

[subagents.implementer]
file = "references/implementer.toml"
readonly = false
+++

# Develop a Reviewable Candidate

Complete the assigned development unit and return it to its owner. A passing result means ready for review.

## Inputs and Principles

Obtain the requested outcome, scope, acceptance conditions, starting artifact, and relevant constraints from the request and available context.

Read the applicable principles before using them:
- [Define done](../principle-define-done/SKILL.md).
- [Understand before changing](../principle-understand-before-changing/SKILL.md).
- [Sequence small units](../principle-sequence-small-units/SKILL.md).
- [Keep solutions simple](../principle-keep-solutions-simple/SKILL.md).
- [Use fast feedback](../principle-use-fast-feedback/SKILL.md).
- [Match rigor to risk](../principle-match-rigor-to-risk/SKILL.md).
- [Bind evidence to version](../principle-bind-evidence-to-version/SKILL.md).

## Execute

1. Turn the request into observable acceptance conditions. Inspect facts before asking; state consequential assumptions and keep optional improvements outside the unit.
2. Trace the affected flow, shared callers, existing tests, and reusable implementations. Reproduce a defect with the cheapest reliable observation before changing its cause.
3. Choose the smallest complete change. Establish shared contracts before splitting work; keep necessary related edits together.
4. Implement within the assigned scope. For a cheap local regression path, use [TDD](../tdd/SKILL.md); preserve its fallback and failure rules when applicable. Use [how-works](../how-works/SKILL.md) when a subsystem explanation is needed.
5. Run checks appropriate to the acceptance conditions and risk. Keep expected failures, actual results, and environmental gaps distinct. Revisit the diagnosis when repeated edits yield no new evidence.
6. Inspect the final diff and identify the actual candidate, including uncommitted contents. Retain self-check evidence that later verification can reuse while its assumptions remain valid.

## Delegation

Work directly by default. Delegate exploration when the relevant context is large or separable; delegate implementation when contracts are stable and the assigned changes are independently checkable.

Use the role files declared in the frontmatter. Give each worker the task and acceptance conditions, artifact identity, necessary context, read/write boundaries, tools and environment limits, expected evidence, and return conditions. Respect the owner's available concurrency and budget.

Keep shared interfaces under one owner. Separate mutable test resources or execute in sequence. Inspect returned changes and rerun checks affected by integration.

A delegated worker completes its assigned slice and returns; further delegation requires the owner's explicit grant.

## Return

Report the outcome, candidate identity, changed paths, rationale, actual self-check procedures and results, limitations, and next action. Use the existing work record rather than require a new document.

- pass: the assigned change is complete and reviewable, with the required development checks satisfied.
- needs-change: a confirmed implementation or contract problem remains.
- unverified: the candidate exists but necessary development evidence is unavailable or unreliable.
- needs-decision: a consequential scope or product decision is required; state the concrete question and independent work that can continue.

Do not merge, publish, deploy, or advance the whole pipeline unless the task already authorizes that work.
