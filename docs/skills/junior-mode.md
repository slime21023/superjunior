+++
title = "Junior mode"
description = "Deliver everyday code changes, such as features, bug fixes, and refactors, with an agreed scope, tests, a review, and clean commits."
permalink = "/skills/junior-mode/index.html"
section = "mode"
order = 0
source = "skills/junior-mode/SKILL.md"
+++

## When to use it

Use junior mode when you want code changed: a new feature, a bug fix, or a refactor. It picks a route for the request, runs the matching [workflows](/workflows/) in order, and reports what was done and how it was verified.

Once started, junior mode stays active for follow-up engineering requests until you turn it off. A status question or a correction updates the current task, and a clearly new task starts a new route. Finishing a task leaves the mode on without starting anything new. Whether the mode stays active between messages depends on your tool; see [Host integration](/host-integration/).

## Choose the route

Junior mode checks four routes in this order and takes the first one that fits:

1. **Design decision pending.** The work needs a choice nobody has made yet, such as a storage engine, framework, component boundary, or public API shape. Junior mode does not make that choice, even when one option looks obvious. It returns `needs-decision`, lays out the options and their tradeoffs, and points you to [senior mode](/skills/senior-mode/). It resumes once you confirm a decision or bring back a senior-mode handoff brief.
2. **Defect.** You report an exception, a failing test, or a test that passes on some runs and fails on others. After a one-line problem statement and Done Criteria, work starts at scientific debugging, then continues to self-review and commit. For an intermittent failure, the agent first pins down the source of nondeterminism, such as time, randomness, ordering, concurrency, shared state, or network.
3. **Light.** The change cannot affect runtime behavior: documentation, comments, formatting, or a configuration value that no code path depends on. The agent writes a short problem statement and Done Criteria, makes the change, runs the narrowest check that shows it works (a build, render, or lint), runs self-review's hygiene checks (the four-layer audit does not apply because no runtime code changed), and commits it. If the effect on behavior is uncertain, it takes the full route instead.
4. **Full.** Every other change.

## The phases of the full route

1. [Align scope](/skills/workflow-align-scope/): agree on the problem, the Done Criteria, and which files are affected.
2. [Context TDD](/skills/workflow-context-tdd/): learn the surrounding code, then build the change test-first.
3. [Scientific debug](/skills/workflow-scientific-debug/), only when a defect appears: reproduce it, find the root cause, and fix it there.
4. [Self review](/skills/workflow-self-review/): check the diff against the [four-layer design principles](/skills/principles-four-layer-design/) and basic hygiene.
5. [Atomic commit](/skills/workflow-atomic-commit/): stage and commit the work in single-purpose commits.

Each phase returns an outcome that decides the next step:

| Outcome | Next step |
| :--- | :--- |
| `pass` | Continue to the next phase on the chosen route. |
| `needs-change` | Go back to TDD or debugging to fix the problem. |
| `unverified` | Stop and get the missing evidence, such as a working test runner or environment. |
| `needs-decision` | Stop and ask you a specific question with the options laid out. |

## Keep the task record

Junior mode tracks the current task in `.superjunior/task.md` at the repository root. The record is created as soon as the route is chosen, whichever phase that route starts in. It holds the route, the current phase, the Done Criteria, the changed files, the evidence from each phase, and any open decisions. It is updated at every phase change so the work can survive a pause or a new session.

The record is never staged or committed; it describes the work, not the product. If you pause, it stays. If you cancel, the agent stops, leaves completed work in your working tree, and deletes the record. It is also deleted once the task is delivered.

To resume, the agent reads the record, compares it with the working tree, and re-runs any check whose files, dependencies, inputs, or environment have changed. It then continues from the earliest phase whose evidence is missing or no longer valid. If the record is gone, it rebuilds one from the working tree and your description.

## Delegation to roles

The agent works directly by default. When your tool allows subagents and a separate assignment would help, it can hand a phase to the matching [agent role](/subagents/) with an explicit read or write boundary:

| Phase | Role |
| :--- | :--- |
| Align scope | [agent-scope-aligner](/skills/agent-scope-aligner/) |
| Context TDD | [agent-tdd-implementer](/skills/agent-tdd-implementer/) |
| Scientific debug | [agent-scientific-debugger](/skills/agent-scientific-debugger/) |
| Self review | [agent-code-reviewer](/skills/agent-code-reviewer/) |
| Atomic commit | [agent-git-committer](/skills/agent-git-committer/) |

The main agent stays responsible: it integrates each result and re-checks the evidence before moving on.

## What you get

Every task ends with a report covering the result, whether it is complete, the current phase, the evidence that decided it, any limitations, and the next action. `pass` means the whole agreed route, including the commit, is done. If you asked only for a review or a verification, the report gives that phase's actual outcome.

## Boundaries

Junior mode changes code; it does not decide design. Questions about how code works, why it was written a certain way, or which architecture to choose belong to [senior mode](/skills/senior-mode/). Pause or finish the current task before switching.

## Example request

```text
Use junior-mode to add a retry limit to the webhook sender so a failing endpoint is tried at most five times, then commit the change.
```
