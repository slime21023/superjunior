+++
name = "potato-mode"
description = "Use when potato-mode is explicitly requested or already active for an engineering task. Coordinate scoped development, review, verification, and delivery; handle rework, evidence gaps, delegation, and resumption through the existing workflows."
mode = true
outcomes = ["pass", "needs-change", "unverified", "needs-decision"]

[workflows]
develop = "../workflow-develop/SKILL.md"
review = "../workflow-review/SKILL.md"
verify = "../workflow-verify/SKILL.md"
deliver = "../workflow-deliver/SKILL.md"
+++

# Potato Mode

The owning agent carries the requested outcome through the applicable workflows. It selects the route, integrates delegated work, checks evidence, and decides whether to continue, return a gap, or finish.

## Activation and Scope

Apply when explicitly invoked or retained as active by the host. Keep the mode active across engineering follow-ups until the user opts out. Completing a task leaves the mode available for the next request; it does not start another task.

A status question or correction updates the active task. An explicit new task starts a new route. Honor task cancellation, pause, and mode opt-out according to the user's request, preserving completed work and its evidence.

The TOML describes a portable repository contract. The host provides discovery, persistent activation, worker execution, and permission enforcement. This skill cannot create background execution or expand available tools, scope, or authorization.

## Establish the Task and Route

Use the request, latest corrections, repository instructions, and available facts to establish the outcome, acceptance conditions, constraints, delivery form, and existing authorization. Apply [define done](../principle-define-done/SKILL.md); inspect observable facts before asking for consequential product decisions.

Choose the requested route. Load a workflow when entering its phase and read the principles it applies.

| Request | Route and boundary |
|---|---|
| Feature, fix, or refactor | [Develop](../workflow-develop/SKILL.md) → [Review](../workflow-review/SKILL.md) → [Verify](../workflow-verify/SKILL.md) → [Deliver](../workflow-deliver/SKILL.md). |
| Review only | Review the specified artifact and return findings; preserve product contents. |
| Verification only | Verify the specified artifact and return observations; product corrections require an authorized development task. |
| Deliver an existing result | Enter delivery after reconciling required review and verification evidence. Obtain missing checks within scope before the delivery operation. |
| Discussion or investigation | Preserve the requested scope and return the supported answer. Use [how-works](../how-works/SKILL.md) or [why](../why/SKILL.md) when relevant. |
| Resume or handoff | Reconstruct current scope and contents, then enter the earliest phase whose required evidence is missing or invalid. |

For an existing result, use valid prior evidence. A later entry point does not waive required prerequisites. If obtaining a prerequisite or correcting a defect exceeds the requested scope, return the concrete gap instead of silently expanding the route.

## Drive One Complete Unit

Apply [sequence small units](../principle-sequence-small-units/SKILL.md). Select the smallest complete unit with an observable acceptance check; keep necessary related changes atomic. Default to one active unit and order dependencies on checked foundations.

For each unit:

1. Confirm its acceptance conditions, actual starting contents, material risks, and permitted actions. Choose required review and verification strength using [match rigor to risk](../principle-match-rigor-to-risk/SKILL.md).
2. Execute the selected workflow directly or through permitted delegates.
3. Inspect the actual result, artifact identity, evidence, limitations, and outcome. Reconcile worker claims before accepting them.
4. Apply the transition rules below. Continue necessary work while a permitted action can materially advance the agreed outcome.
5. After the agreed unit is delivered, select the next necessary unit or finish the task.

Units use the task's actual delivery structure. Local handoff can complete a unit; splitting work does not require separate commits, PRs, or deployments.

## Interpret Workflow Outcomes

| Outcome | Owner action |
|---|---|
| `pass` | Confirm required evidence applies to the current artifact. On the full route, advance develop → review → verify → deliver. A standalone phase returns its result. Delivery pass completes the agreed unit. |
| `needs-change` | Route a confirmed defect to development when implementation is within the agreed task. Otherwise return findings and the needed change. After a correction, reassess the required review and verification. |
| `unverified` | Stay at the affected phase. Obtain the missing observation, repair an unreliable check within permitted test scope, or use an authorized method that establishes the same claim. Return the gap if no permitted action can resolve it. |
| `needs-decision` | State the missing consequential decision and its effect. Wait for it before dependent actions; continue permitted work that does not require the answer. |

A passing phase establishes only that phase's conclusion. Before delivery, confirm all required prerequisites support the chosen artifact.

For delivery failures, distinguish product defects from operational or environmental failures. Operational diagnosis stays in delivery; inspect destination state before a safe retry of a potentially partial operation. Keep one executor for each state-changing operation.

## Preserve Evidence Across Changes

Apply [bind evidence to version](../principle-bind-evidence-to-version/SKILL.md). Identify checked contents with a commit, artifact digest, or relevant diff or snapshot; a base commit alone does not identify uncommitted work.

Keep each conclusion with its scope, procedure, expected and actual result, relevant environment, and limitations. After edits, integration, rebase, dependency changes, rebuilds, or environment changes, reassess applicability and rerun affected checks. Retain unaffected evidence that still establishes the required claim.

If an artifact changes during a phase, reconcile the phase's conclusions with the resulting contents before advancing. Missing or stale evidence remains explicit.

## Delegate Through the Workflows

Apply [own the work](../principle-own-the-work/SKILL.md). Work directly by default; delegate only when authorized and useful. Use the role TOMLs referenced by the selected workflow, with the host's configured models.

Supply the original outcome and latest corrections, assigned unit, candidate identity, necessary context, read/write boundaries, permitted resources, evidence requirements, and return conditions. Respect available concurrency and budget. Isolate mutable resources or serialize work; retain one owner for shared contracts.

Workers return their assigned slice to the owner. The owner integrates it and checks affected evidence. Further delegation requires an explicit grant.

When independent review is required, select a reviewer who did not implement the change. Disclose an unavailable required review as unverified; self-review cannot satisfy it.

## Progress, Stop, and Resume

Apply [use fast feedback](../principle-use-fast-feedback/SKILL.md). Resolving a defect, ruling out a hypothesis, obtaining a reliable observation, or removing a dependency is progress. Repeating an unchanged failing command or speculative edit adds no evidence.

After two attempts at the same failure without new evidence, make the next action a new diagnosis or observation. Respect stricter workflow-specific circuit breakers. Continue while meaningful permitted progress is possible; preserve the current state when none is available.

Stop task execution when the agreed outcome and delivery are complete, the user cancels or pauses, an explicit budget is exhausted, or a necessary dependency cannot be resolved with available authority and capabilities. Report the actual reason and unfinished conditions. Mode activation alone does not authorize recurring monitoring or invented follow-up work.

Use the existing task record for consequential decisions under [record decisions](../principle-record-decisions/SKILL.md). Preserve the current owner, outcome and latest corrections, scope and authorization, unit and phase, actual candidate, applicable evidence, unresolved findings or decisions, delivery operation state, and next action. Keep secrets out of the record.

On resumption, inspect current repository and destination state and revalidate the record's assumptions before continuing. A checkpoint describes prior observations; it does not prove current correctness. Use a separate TOML checkpoint only when the task genuinely needs persistence beyond the existing record.

## Return

Report the requested result, completion or current phase, actual artifact and delivery destination when applicable, decisive evidence, material limitations, and any concrete next action.

Use `pass` only when the agreed route and delivery are complete. A supported discussion or investigation answer completes its route. For review-only or verification-only work, return the actual phase outcome even when reporting it completes the requested task. Preserve an applicable `needs-change`, `unverified`, or `needs-decision` outcome and explain the unresolved condition.

A requested pause or exhausted budget is a suspension reason, not proof of a passing phase. Preserve the latest phase outcome, or state that it has not yet been assessed, alongside the reason work stopped.
