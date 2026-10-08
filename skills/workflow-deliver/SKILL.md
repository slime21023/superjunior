+++
name = "workflow-deliver"
description = "Deliver an identified, supported software artifact in the already-authorized form, confirm usability, and record recovery and follow-up. Use for a local handoff, PR, publication, release, or deployment."
outcomes = ["pass", "needs-change", "unverified", "needs-decision"]

[subagents.verifier]
file = "../workflow-verify/references/verifier.toml"
readonly = false
+++

# Deliver the Agreed Result

Complete the requested delivery and return its observed result. Preserve the original scope and authorization.

## Inputs and Principles

Identify the artifact, agreed destination or handoff form, current review and verification evidence, existing authorization, and relevant recovery needs.

Read the applicable principles:
- [Close the delivery loop](../principle-close-delivery-loop/SKILL.md).
- [Bind evidence to version](../principle-bind-evidence-to-version/SKILL.md).
- [Match rigor to risk](../principle-match-rigor-to-risk/SKILL.md).
- [Own the work](../principle-own-the-work/SKILL.md).
- [Record decisions](../principle-record-decisions/SKILL.md).

## Execute

1. Confirm the requested form: local artifact, handoff, PR, release, or deployment. Reuse existing authorization; ask only when the next necessary action genuinely needs a missing decision or authorization.
2. Confirm the artifact is the candidate supported by the required review and verification. Resolve stale evidence or report missing prerequisites before the external write.
3. Choose recovery proportionate to risk. Account for persistent data and external side effects that reverting code would not reverse.
4. Assign one executor for each state-changing delivery operation. Inspect destination state before retrying an operation that may already have partly succeeded.
5. Perform the authorized delivery using established project tools. Keep the operation and its observed result attributable to the delivered artifact.
6. Confirm the recipient can access and use the result with a proportionate check. Record known limitations, unavailable checks, and any user feedback actually obtained.
7. Return the completed unit and bounded follow-up items. The owner decides whether the original task has another unit or is complete.

## Delegation

The owner retains the delivery decision and designates the single executor. Delegate bounded checks or observations to the declared verifier when useful.

Give the worker the delivered artifact and destination, expected behavior, permitted test resources, evidence requirements, and return conditions. An observation task does not authorize another publication, rollback, customer message, or deployment.

Workers preserve the delivered product and return results. Further delegation requires the owner's explicit grant.

## Return

Report the delivered artifact, destination, actual result, required check evidence, limitations, recovery path when needed, and follow-up owner.

- pass: the agreed delivery and required usability checks are complete.
- needs-change: a confirmed product or packaging defect needs development work.
- unverified: required delivery evidence or a prerequisite is missing; distinguish an operation that succeeded from an unverified result.
- needs-decision: a necessary destination, risk decision, or authorization is unresolved.

Environmental or operational failure remains in delivery while diagnosis or safe retry is useful. Report an operation that did not complete, preserving its current state; never label the unit delivered merely because a command was attempted.
