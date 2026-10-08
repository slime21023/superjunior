+++
title = "Example tasks"
navTitle = "Examples"
description = "Portable prompts for a complete loop, bounded phases, architecture, and resumption."
section = "practice"
order = 0
permalink = "/examples/index.html"
+++

These prompts ask the agent to read repository instructions. Replace the illustrative behavior and paths with your real task and available artifacts. Registered commands depend on your [host](/host-integration/).

## Complete a bug fix locally

```text
Read skills/potato-mode/SKILL.md.
Fix the shared parser: an empty input must return an empty collection.
Preserve valid nonempty-input behavior and inspect all affected callers.
Use proportionate review and verification, then deliver local files.
```

Expected route: develop → review → verify → deliver. A narrow regression may support development evidence. Review assesses the actual diff, verification establishes required behavior, and local handoff completes the requested delivery.

## Review without applying fixes

```text
Read skills/workflow-review/SKILL.md.
Review the supplied candidate against the original acceptance conditions.
Inspect affected callers and the attached check results.
Preserve product contents. Return actionable findings and review status.
```

A confirmed bug returns `needs-change`, even when the findings report completes the review request. Missing required independent assessment returns `unverified`.

## Verify an existing candidate

```text
Read skills/workflow-verify/SKILL.md.
Verify the supplied build against these acceptance cases:
empty input, valid input, and invalid input.
Use the agreed local test environment and preserve product contents.
Return actual procedures, observations, artifact identity, and gaps.
```

The verifier distinguishes product defects from a broken harness or unavailable environment. It states review status separately and does not silently correct the product.

## Deliver an already checked result

```text
Read skills/workflow-deliver/SKILL.md.
Hand over the supplied artifact as a local package.
Reconcile the attached review and verification evidence with its contents.
Confirm that the package opens and that usage instructions are included.
```

Valid evidence can be reused. Missing required checks are obtained within scope before delivery. If an operation may have partly succeeded, the executor inspects its destination before retrying.

## Resume after a handoff

```text
Read skills/potato-mode/SKILL.md and the existing task record.
Resume the agreed task using the current working-tree contents.
Revalidate the recorded candidate and any destination state.
Continue from the earliest required phase with missing or invalid evidence.
```

A recorded passing test is historical evidence. Changes to contents, dependencies, inputs, or environment can require affected checks to run again.

## Discuss architecture before implementation

```text
Read skills/craft-discussing/SKILL.md.
Compare viable architectures for the stated workload and constraints.
Agree on boundaries and technology tradeoffs, then return a design brief.
```

Follow with arch-componentize to persist confirmed boundaries and arch-detail to specify a declared component. Keep the discussion and design scopes intact.

## Request a status update or pause

A status question continues the current task. An explicit pause suspends work and preserves the current phase, artifact, evidence, unresolved conditions, and next action. Opting out of potato-mode changes retained mode activation; a completed task does not invent another task.
