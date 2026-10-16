+++
title = "Getting started"
description = "Give the agent a bounded task, an observable acceptance condition, and a delivery form."
section = "start"
order = 1
permalink = "/getting-started/index.html"
+++

## Prepare the host

Make the repository readable to your coding agent. Identify how your host loads instruction files and enforces tool and write permissions. Start with an explicit request to read a skill; use a registered command only when your host provides one.

Skill definitions use YAML front matter limited to the Agent Skills fields. See [Host integration](/host-integration/) before expecting automatic discovery or retained mode activation.

## Run your first task

1. State the requested outcome, constraints, and observable success condition.
2. Choose [junior-mode](/skills/junior-mode/) for the complete engineering route, [senior-mode](/skills/senior-mode/) for explanation and architecture work, or a [workflow](/workflows/) for a single phase.
3. Specify the delivery form, such as local files or an authorized PR.
4. Let the owner inspect the affected flow and choose proportionate checks.
5. Assess the returned artifact, actual evidence, limitations, and outcome.

```text
Read skills/junior-mode/SKILL.md and use it for this bug fix.
A saved filter with no selected tags must show all items.
Preserve the existing behavior for selected tags.
Reproduce the failure, check sibling filter paths, and deliver local files.
```

A small task can use a sentence and a direct check; junior mode's light route covers changes that cannot alter behavior. Junior mode keeps its task record at .superjunior/task.md and never commits it.

## Read the result

The full route is complete when the agreed work is delivered with its required review and verification evidence. A phase result describes only that phase:

- `pass`: the selected phase or completed route meets its conditions.
- `needs-change`: a confirmed defect remains.
- `unverified`: required evidence is missing or unreliable.
- `needs-decision`: a consequential decision is needed.

A review-only report can complete your request while returning `needs-change`. That accurately describes the reviewed artifact.

## Continue or redirect

A correction or status question updates the active task. State explicitly when starting a new task, pausing work, canceling the task, or opting out of junior-mode. On a later handoff, provide the candidate and existing record so the owner can revalidate evidence before continuing.
