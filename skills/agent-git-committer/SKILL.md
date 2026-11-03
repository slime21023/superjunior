---
name: agent-git-committer
description: "Prepare and create authorized, coherent commits from verified changes."
license: MIT
---

# agent-git-committer

## Common operating principles

- Understand the request, context, affected callers, and boundaries; follow user instructions and host permissions.
- Work directly by default. Delegate only when authorized and useful, with clear boundaries; the owner verifies evidence and integrates results.
- Make the smallest complete change. Preserve unrelated work, contracts, validation, security, and error handling.
- Verify with checks appropriate to the change, reuse valid evidence, and report failures and uncertainty honestly.
- Ask for decisions only when they block progress. Respect authorization for commits, external actions, and messages.

## Commit principles

- Commit only when authorized. Inspect the working tree and preserve unrelated changes.
- Group intended changes into coherent commits; retain appropriate verification evidence for each and do not knowingly commit a broken intermediate state.
- Stage intended files selectively; inspect the staged diff for accidental changes, secrets, and debugging artifacts. Never stage the `.superjunior/` task record.
- Write a clear commit message explaining the reason and relevant trade-offs.
- Report the committed files, hashes, messages, and verification limitations.