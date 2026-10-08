+++
title = "Potato mode"
description = "Coordinate the appropriate engineering route while preserving scope, evidence, and ownership."
permalink = "/skills/potato-mode/index.html"
section = "mode"
order = 0
source = "skills/potato-mode/SKILL.md"
+++

The owning agent carries the agreed outcome, selects the route, integrates delegated results, checks evidence, and decides whether to continue, return a gap, or finish. Load a workflow when entering its phase and read its applicable principles.

## Activate and scope the mode

Use potato-mode when explicitly invoked or retained as active by the host. It stays active across engineering follow-ups until the user opts out. Completing a task leaves the mode available; it does not start another task.

A status question or correction updates the active task. An explicit new task starts a new route. Honor cancellation, pause, and opt-out while preserving completed work and evidence.

The definition is a portable contract. [The host](/host-integration/) provides discovery, persistent activation, tools, worker execution, and permissions.

## Select the requested route

| Request | Route |
| --- | --- |
| Feature, fix, or refactor | [Develop](/skills/workflow-develop/) → [Review](/skills/workflow-review/) → [Verify](/skills/workflow-verify/) → [Deliver](/skills/workflow-deliver/) |
| Review only | Preserve product contents and return findings |
| Verification only | Return observations; product corrections need development authority |
| Deliver an existing result | Reconcile required review and verification before delivery |
| Discussion or investigation | Return the supported answer within the requested scope |
| Resume or handoff | Enter the earliest required phase with missing or invalid evidence |

A later entry point does not waive required prerequisites. Reuse valid evidence; return a concrete gap when obtaining a prerequisite would exceed the requested scope.

## Drive one complete unit

Use [define done](/skills/principle-define-done/) to establish outcome, acceptance conditions, constraints, delivery form, and authority. Choose the smallest complete unit with an observable check, keeping necessary related edits atomic.

Default to one active unit. Choose review and verification strength according to risk, execute the selected phase, then inspect actual contents, evidence, limitations, and outcome. Continue necessary permitted work while it can materially advance the agreed result.

After delivery, select the next necessary unit or finish. Units follow the actual delivery structure; local handoff can complete a unit without separate commits or PRs.

## Interpret the result

| Outcome | Owner action |
| --- | --- |
| `pass` | Confirm evidence applies to the current artifact, then advance on the agreed route or return the standalone result |
| `needs-change` | Return a confirmed defect to development when authorized; otherwise return findings |
| `unverified` | Stay at the affected phase, obtain a reliable observation or authorized equivalent, or return the unresolved gap |
| `needs-decision` | Wait before dependent actions and continue permitted independent work |

A phase pass establishes its own conclusion. Delivery requires all applicable prerequisites. Operational delivery failures stay in delivery; inspect destination state before retrying a potentially partial operation, with one executor per state-changing operation.

## Preserve evidence

[Bind evidence to version](/skills/principle-bind-evidence-to-version/): use a commit, digest, or identifiable snapshot. Dirty work needs its relevant contents or diff; a base commit alone is insufficient.

Keep scope, procedure, expected and actual results, environment, and limitations together. After edits, integration, rebase, dependency changes, rebuilds, or environment changes, rerun affected checks and retain unaffected evidence that still supports its claim.

## Delegate through workflows

Work directly by default. Delegate when authorized and useful using the [workflow role TOMLs](/subagents/) and host-configured models.

Supply the original outcome, latest corrections, unit, candidate, context, read/write limits, permitted resources, evidence requirements, and return conditions. Respect concurrency and budget. Keep one owner for shared contracts and isolate mutable resources or serialize work.

Inspect and integrate worker returns, then reassess affected evidence. Further delegation requires an explicit grant. A required independent reviewer did not implement the change; missing required independence remains `unverified`.

## Progress, stop, and resume

New reliable evidence, a resolved defect, a ruled-out hypothesis, or a removed dependency counts as progress. After two attempts at the same failure without new evidence, make the next action a new diagnosis or observation. Respect stricter workflow circuit breakers.

Stop when delivery is complete, the user cancels or pauses, an explicit budget is exhausted, or a necessary dependency cannot be resolved with available authority and capabilities. Do not invent follow-up work or recurring monitoring.

Use the existing task record to preserve owner, corrections, scope, authority, unit and phase, candidate, applicable evidence, unresolved conditions, delivery-operation state, and next action. A separate TOML checkpoint is warranted only when persistence beyond that record is genuinely needed.

On resumption, inspect current repository and destination state and revalidate assumptions. A checkpoint describes prior observations.

## Return honestly

Return the result, completion or current phase, artifact and destination where relevant, decisive evidence, limitations, and next action.

Use `pass` when the agreed route and delivery are complete. A supported discussion answer can complete its route. A review-only or verification-only request returns its actual phase outcome even when the report completes the task.

Pause and exhausted budget are suspension reasons. Preserve the latest phase outcome, or state that it has not been assessed, alongside the reason execution stopped.
