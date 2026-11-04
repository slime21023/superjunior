+++
title = "Prepare and create commits"
navTitle = "Git commits"
description = "Turn authorized changes into coherent local commits, or prepare messages without committing."
section = "roles"
order = 5
permalink = "/skills/agent-git-committer/index.html"
source = "skills/agent-git-committer/SKILL.md"
+++

Use `agent-git-committer` when changes are ready for delivery or you want help composing commit messages. State which files or changes belong to the assignment and whether commits should actually be created.

## Choose the delivery

For local commits:

```text
Use agent-git-committer for the verified parser fix and its tests.
Inspect staged and unstaged changes, preserve unrelated work,
and create focused local commits with messages explaining why.
Do not push.
```

For messages only:

```text
Use agent-git-committer to draft a message for the current diff.
Do not change files, stage changes, or create commits.
```

The role uses existing authorization. A message-only request ends at preparation.

## What the role checks

It inspects the working tree and staged diff, selectively includes authorized changes, and preserves unrelated work. Evidence must apply to the staged snapshot; checks for different content need revalidation.

Each commit represents one logical intention and should leave the repository buildable and test-passing. Messages use a type, scope, and imperative summary, explain the reason for the change, and identify breaking changes or issue references when applicable.

After committing, the role confirms the SHA and contents and checks what remains. A failed command or hook must be reported.

## Read the commit result

The output separates the message from the execution result:

| Status | Meaning |
| :--- | :--- |
| `CREATED` | The reported commits have been confirmed to exist. |
| `PREPARED` | Messages or changes are ready but still await committing. |
| `BLOCKED` | The requested work cannot proceed; inspect the reported reason. |

The result includes actual SHAs or `None`, verification evidence, and remaining changes, failures, or limitations. If an earlier commit succeeded and a later one failed, both the completed and unfinished work should be visible.

For [junior mode](/skills/junior-mode/), delivery is complete only when all requested commits are confirmed. A draft message cannot satisfy a request for commits.
