+++
title = "Deliver"
description = "Complete the authorized handoff and observe usability of the delivered result."
permalink = "/skills/workflow-deliver/index.html"
section = "workflows"
order = 4
source = "skills/workflow-deliver/SKILL.md"
+++

## Inputs

Identify the artifact, destination or handoff form, review and verification evidence, existing authorization, and recovery needs. Local files, a handoff, a PR, a release, or a deployment can each be the agreed form.

## Complete the delivery

1. Confirm the requested form and existing authority. Ask only when a necessary action has a genuinely missing decision or authorization.
2. Reconcile the actual artifact with required review and verification. Resolve stale evidence or report missing prerequisites before an external write.
3. Choose proportionate recovery, accounting for persistent data and external side effects.
4. Assign one executor to each state-changing operation. Inspect destination state before retrying an operation that may have partly succeeded.
5. Use established project tools for the authorized delivery.
6. Check that the recipient can access and use the result. Record limitations, unavailable observations, and user feedback actually obtained.
7. Return the unit with bounded follow-up items and their owner.

## Delegate observations

The owner retains the delivery decision and designates the executor. The [verifier role](/subagents/) can perform bounded delivered-result checks with explicit artifacts, destinations, expectations, and test resources.

An observation assignment does not authorize another publication, deployment, rollback, or external message. Workers preserve the delivered product and return their evidence.

## Return and outcomes

Return artifact, destination, actual result, required check evidence, limitations, recovery where needed, and follow-up owner.

- `pass`: agreed delivery and required usability checks are complete.
- `needs-change`: a confirmed product or packaging defect needs development.
- `unverified`: required delivery evidence or a prerequisite is missing.
- `needs-decision`: destination, a risk decision, or authorization is unresolved.

Operational and environmental failures remain in delivery while diagnosis or safe retry helps. Preserve partial-operation state. An attempted command does not establish completed delivery.

## Applicable principles

Read [close the delivery loop](/skills/principle-close-delivery-loop/), [bind evidence to version](/skills/principle-bind-evidence-to-version/), [match rigor to risk](/skills/principle-match-rigor-to-risk/), [own the work](/skills/principle-own-the-work/), and [record decisions](/skills/principle-record-decisions/).
