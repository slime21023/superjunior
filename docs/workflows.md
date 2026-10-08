+++
title = "The four workflows"
navTitle = "Workflows overview"
description = "Use a phase directly or let potato-mode coordinate the complete development cycle."
section = "workflows"
order = 0
permalink = "/workflows/index.html"
+++

## Phase contracts

| Workflow | Required result | Boundary |
| --- | --- | --- |
| [Develop](/skills/workflow-develop/) | A complete, identified candidate with proportionate self-checks | Ready for review |
| [Review](/skills/workflow-review/) | An artifact-specific judgment and actionable findings | Preserve product contents |
| [Verify](/skills/workflow-verify/) | Reliable observations of required behavior | Product fixes return to development |
| [Deliver](/skills/workflow-deliver/) | A usable result at the authorized destination | Reconcile required checks before the operation |

A standalone workflow keeps the requested scope. Review-only work returns findings. Verification-only work returns observations and states review status separately. Delivery of an existing result can reuse valid evidence while obtaining missing prerequisites within scope.

## Shared outcomes

| Outcome | Meaning | Next action |
| --- | --- | --- |
| `pass` | This phase's required conditions are satisfied | Advance on the agreed full route, or return the standalone result |
| `needs-change` | A confirmed defect or contract problem remains | Correct through development when authorized; otherwise return findings |
| `unverified` | Required evidence is unavailable, stale, or unreliable | Obtain a reliable observation at the affected phase, or return the gap |
| `needs-decision` | A consequential requirement or tradeoff is unresolved | Wait for dependent work; continue independent work |

The owner reconciles each returned result with the actual candidate. A review pass does not establish behavioral verification. A successful test does not establish completed delivery.

## Delegation and integration

Direct execution is the default. The workflows reference [explorer, implementer, reviewer, and verifier](/subagents/) roles for useful, authorized delegation.

Assignments include the original outcome, latest corrections, candidate identity, bounded scope, permitted resources, evidence requirements, and return conditions. Workers return their slice to the owner. Shared contracts have one owner, and mutable resources are isolated or used in sequence.

## Run the cycle

[Potato-mode](/skills/potato-mode/) selects the appropriate route, drives one complete unit, interprets outcomes, invalidates affected evidence, and resumes at the earliest required phase without valid support. It keeps these workflow contracts intact.
