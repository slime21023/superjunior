+++
title = "Example requests"
navTitle = "Examples"
description = "Requests for common situations, and what to expect from each."
section = "practice"
order = 0
permalink = "/examples/index.html"
+++

Replace the behavior and file names with your own. If your tool does not discover skills, start each request with `Read <skill directory>/SKILL.md` instead of naming the skill.

## Fix a bug end to end

```text
Use junior-mode to fix the shared parser: an empty input must return an empty list instead of throwing.
Keep the current behavior for nonempty input and check every caller.
Deliver local commits.
```

Junior mode aligns scope, reproduces the defect with a failing test, fixes the root cause, reviews the diff, and commits. Expect a report listing the failing and passing test output and the outcome.

## Build a feature test-first

```text
Use workflow-context-tdd to add a batch token validator.
Cover the normal case, an empty batch, and malformed tokens.
Test through the public interface and mock only external services.
```

The agent reads the surrounding code, lists test cases across normal, boundary, and error cases, and goes red, green, then refactor. When an in-suite test is impractical, it uses a narrow reproduction check and says why.

## Review without changing code

```text
Use workflow-self-review on the current diff.
Check it against the four design layers and the original acceptance criteria.
Do not modify any files; return findings only.
```

Expect findings grouped by design layer. A confirmed problem returns `needs-change` even though the review itself is complete.

## Prepare commits

```text
Use workflow-atomic-commit for the staged and unstaged changes.
Split them into single-purpose commits that each pass the tests, and explain why in each message.
```

The agent groups the changes, runs the tests for each commit, and writes messages that explain the reason for the change. It never commits the `.superjunior/` task record.

## Resume a paused task

```text
Use junior-mode and resume the task in .superjunior/task.md.
```

The agent compares the record with your working tree, re-runs checks whose files or inputs changed, and continues from the earliest phase without valid evidence. An old passing test does not count once the code under it has changed.

## Explain how code works

```text
Use senior-mode: how does a request flow from the HTTP handler to the database in the orders service?
Which layer owns validation?
```

Senior mode runs [how works](/skills/how-works/). Expect a conceptual walkthrough of how the parts collaborate, based on the code it inspected, not a line-by-line dump. No files change.

## Ask why code is the way it is

```text
Use senior-mode: why does the cache layer write through instead of invalidating on update?
```

Senior mode runs [why](/skills/why/), which searches Git history, pull requests, and the code. The answer leads with the main reason, separates verified facts from inferences, and asks you when the evidence runs out.

## Decide an architecture, then build it

```text
Use senior-mode to design the notification system for our expected load and constraints.
Compare viable architectures, agree on boundaries, record them, and specify the first component.
```

Senior mode discusses options and tradeoffs with you, records the confirmed boundaries in `_adr/base.xml`, specifies the first component under `_adr/components/`, and ends with an implementation handoff brief. Start [junior mode](/skills/junior-mode/) with that brief to build it.
