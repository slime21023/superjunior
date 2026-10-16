+++
title = "Getting started"
description = "Install the skills, write a request the agent can finish and prove, and read what comes back."
section = "start"
order = 1
permalink = "/getting-started/index.html"
+++

## Install the skills

Copy every directory under `skills/` into your project's skill directory: `.claude/skills/` for Claude Code, or `.agents/skills/` for Codex and Antigravity. Keep the directories side by side and copy them rather than symlinking, because the skills link to each other. [Host integration](/host-integration/) lists personal directories and what your tool needs to support.

If your tool does not discover skills, ask the agent to read one directly, for example `Read .claude/skills/junior-mode/SKILL.md`.

## Write a good request

A request works best when it names four things:

1. **Outcome**: the behavior you want, in a sentence or two.
2. **Constraints**: what must not change, and anything off limits.
3. **Success check**: how you will know it works, such as a test, a command, or an observable result.
4. **Delivery form**: local changes, local commits, or a pull request if you allow one.

Then say which mode to use. Choose [junior mode](/skills/junior-mode/) for a code change, [senior mode](/skills/senior-mode/) for explanation and architecture work, or a single [workflow](/workflows/) for one step.

```text
Use junior-mode for this bug fix.
A saved filter with no selected tags must show all items.
Keep the current behavior when tags are selected.
Reproduce the failure, check the other filter paths, and deliver local commits.
```

A small task can be a single sentence. Junior mode takes a light route for changes that cannot alter runtime behavior, such as documentation, comments, or formatting: a brief scope check, the change, a quick build or lint check, a hygiene check of the diff, and a commit.

## Read the outcome

Every task ends with a report: the result, the current phase, the evidence that decided it, any limits, and the next step. It carries one of these outcomes:

| Outcome | Meaning |
| :--- | :--- |
| `pass` | The work is delivered and verified. |
| `needs-change` | A real problem remains, such as a review finding. |
| `unverified` | The agent could not get reliable evidence; the report says what is missing. |
| `needs-decision` | A design choice is yours to make before work can continue. |

Senior mode uses `pass`, `needs-decision`, and `unverified`. A review-only request can be fully answered and still return `needs-change`, because the outcome describes the code that was reviewed.

## Continue, pause, or cancel

Junior mode stays active across follow-ups until you turn it off. A correction or a status question updates the current task; say so when you start a new one.

Junior mode keeps a task record at `.superjunior/task.md` in your repository. It is never committed. If you pause, the agent stops at the current step and keeps the record, so you can resume later, even in a new session. On resume, the agent compares the record with your working tree, re-runs checks whose inputs changed, and continues from the earliest step that lacks valid evidence. If you cancel, the agent stops, leaves finished work in your working tree, and deletes the record.
