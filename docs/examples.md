+++
title = "Requests you can adapt"
navTitle = "Example requests"
description = "State the behavior, boundaries, and delivery, then read the result according to the selected skill."
section = "start"
order = 3
permalink = "/examples/index.html"
+++

Replace the names and paths below with your project's details. If the host cannot discover a named skill, provide its installed `SKILL.md` path as described in [Host integration](/host-integration/).

## Fix a bug end to end

```text
Use junior-mode to fix the shared parser.
An empty input must return an empty list instead of throwing.
Preserve nonempty-input behavior and check affected callers.
Reproduce the failure, verify the fix, review it, and create local commits.
Do not push.
```

Expect the defect route, verification evidence, review, and confirmed commits. [Junior mode](/skills/junior-mode/) reports completion only for the delivery actually achieved.

## Implement a known behavior test-first

```text
Use agent-tdd-implementer to enforce a maximum tag length of 40 characters.
Test lengths 0, 40, and 41 through the public interface.
Preserve the result shape and leave changes uncommitted.
```

Expect Red/Green/Refactor evidence, relevant regression checks, and a `COMPLETED`, `PARTIAL`, or `BLOCKED` report. If a required check cannot run, the [implementer](/skills/agent-tdd-implementer/) must identify the missing verification.

## Diagnose without applying a fix

```text
Use agent-scientific-debugger to investigate the intermittent retry-test failure.
Find a reproducible case and test the likely causes.
Return the diagnosis and a proposed fix without changing files.
```

The request limits this assignment to investigation. Read the [debugger's](/skills/agent-scientific-debugger/) diagnosis status and evidence separately from its verification result. `IDENTIFIED` does not mean a fix was applied.

## Review an existing diff

```text
Use agent-code-reviewer on the current diff.
The requirement is that an empty tag selection returns all items.
Check affected callers, failure paths, and the acceptance criteria.
Return findings without modifying files or executing code.
```

Expect a verdict and findings tied to source locations, severity, impact, and corrections. The [reviewer](/skills/agent-code-reviewer/) does not replace executed test evidence. Its direct output uses `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`.

## Draft a message or create commits

For a draft:

```text
Use agent-git-committer to draft a message for the parser diff.
Explain why the behavior changed.
Do not stage changes or create commits.
```

Expect `PREPARED` and no commit SHA. When you want actual delivery:

```text
Use agent-git-committer to create local commits for the verified parser fix.
Include its regression tests and preserve unrelated staged and unstaged work.
Report each commit SHA, its checks, and anything left uncommitted.
Do not push.
```

The [committer](/skills/agent-git-committer/) must confirm created commits and report failures or unfinished work. A message draft alone cannot satisfy this second request.

## Resume a paused task

```text
Use junior-mode to resume the task in .superjunior/task.md.
Reconcile the record with the working tree before continuing.
Keep the original delivery scope.
```

The mode checks which evidence is still valid and resumes from the affected phase. See the [task lifecycle](/skills/junior-mode/#continue-an-existing-task).

## Understand current execution

```text
Use senior-mode to explain how an order request reaches the database.
Identify where validation occurs and what happens on failure.
Use code references and do not change files.
```

Expect an evidence-based walkthrough using [how-works](/skills/how-works/), with assumptions and unknown behavior identified.

## Investigate a historical choice

```text
Use why to investigate the retry helper's three-attempt limit.
Find the introducing change and any recorded rationale.
Separate confirmed history from inference; do not redesign the helper.
```

Expect historical evidence and `CONFIRMED`, `INFERRED`, or `UNKNOWN` confidence. Missing history is a legitimate limit, not an invitation to invent an explanation.

## Discuss, record, then implement

Begin with the decision:

```text
Use senior-mode to compare synchronous and queued notification delivery.
Inspect current behavior, constraints, and failure handling.
Give a recommendation and open questions without writing files.
```

After confirming a choice, request the record:

```text
We choose queued delivery with at-least-once processing.
Record the confirmed boundaries and remaining idempotency question
in docs/architecture.md. Preserve unrelated content.
```

[Senior mode](/skills/senior-mode/) records the confirmed scope and prepares a handoff. Start junior mode with that handoff and your delivery request once implementation-blocking questions are resolved.
