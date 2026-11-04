+++
title = "Junior mode"
description = "Coordinate a code change from scope through verification and the delivery you requested."
section = "mode"
order = 0
permalink = "/skills/junior-mode/index.html"
source = "skills/junior-mode/SKILL.md"
+++

Use `junior-mode` for a feature, defect, or refactor that should end in changed code. Give it the required behavior, constraints, acceptance checks, and delivery. For installation, start with [Getting started](/getting-started/).

## Make a request

```text
Use junior-mode to fix the saved filter.
An empty tag selection must return all items.
Preserve filtering when tags are selected.
Reproduce the failure, verify the affected callers, and review the diff.
Create local commits for this change; do not push.
```

If you want working-tree changes only, say that instead. The requested scope determines what completion means.

<h2 id="choose-the-route">Choose the route</h2>

The mode first separates discussion and unresolved design decisions from implementation. A question about current behavior or design rationale can go to [senior mode](/skills/senior-mode/) while the active code-change task is retained. A design choice that blocks implementation needs a confirmed decision before work continues.

For code changes, it selects one route:

| Route | When it applies | Sequence |
| :--- | :--- | :--- |
| Defect | Exceptions, failing tests, or intermittent behavior | Debug → Implement/Verify → Review → Commit when requested |
| Light | Changes with no runtime impact | Brief Align → Change/Verify → Hygiene Review → Commit when requested |
| Full | Other code changes, or uncertain behavioral impact | Align → Implement → Review → Commit when requested |

Unexpected failures can send any route into debugging. The mode can omit inapplicable phases while retaining the evidence required by the task.

<h2 id="check-the-handoff">Check the handoff</h2>

The mode applies [agent roles](/subagents/) in dependency order and checks each result before advancing. Their output fields remain specific to their work.

| Result received | What junior mode must establish |
| :--- | :--- |
| Scope summary | Done Criteria are observable, the affected boundary is known, and no blocking ambiguity remains. |
| Implementer `COMPLETED` | The current changes satisfy acceptance criteria and have the required verification evidence. |
| Debugger `IDENTIFIED` | The diagnosis supports the next implementation step; the overall fix still needs passing reproduction and regression checks. |
| Reviewer verdict | Blocking findings are resolved. `APPROVE` does not prove that tests executed. |
| Committer result | All requested commits exist, their contents are confirmed, and their checks apply to those contents. `PREPARED` is enough only for preparation-only work. |

A change after verification can invalidate the evidence. The mode repeats the affected checks and review instead of carrying forward a stale result.

<h2 id="read-the-workflow-outcome">Read the workflow outcome</h2>

| Outcome | Meaning and next action |
| :--- | :--- |
| `pass` | All required phases and the authorized delivery are complete. |
| `needs-change` | A known defect or required work remains; return to the affected phase. |
| `unverified` | Required execution or verification evidence is missing; identify what is needed. |
| `needs-decision` | A consequential user choice blocks progress; resolve that choice before implementation. |

The final response leads with the actual result, then gives material changes, decisive evidence, commit information when applicable, and unresolved issues. A partial or review-only assignment is reported on its own terms.

<h2 id="continue-an-existing-task">Continue an existing task</h2>

Junior mode remains active across engineering follow-ups until you opt out. Corrections and status questions belong to the existing task; explicitly identify a new task when you want one.

For an active code-change task, the mode maintains `.superjunior/task.md` at the repository root. It records the route, phase, Done Criteria, candidate files, evidence, and open decisions. The record is local working state and is never staged or committed.

Pausing keeps the record. Cancellation stops work, preserves working-tree changes, and removes the record. Completion also removes it without deactivating the mode. On resumption, the mode reconciles the record with the repository and repeats checks invalidated by changed files, dependencies, inputs, or environment.

```text
Use junior-mode to resume the task in .superjunior/task.md.
Check the current working tree before relying on earlier verification.
```

## Work directly or delegate

Roles run directly by default. Authorized delegation is useful for an independent, bounded assignment; the owner still supplies context, checks evidence, and integrates the result. Host support determines whether separate agents can run.

See [Host integration](/host-integration/) for permissions and persistence, or [Examples](/examples/) for narrower requests.
