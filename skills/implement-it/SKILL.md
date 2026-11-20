---
name: implement-it
description: "Create or modify code or engineering artifacts to implement specified behavior."
license: MIT
---

# implement-it

## Overview

Deliver the smallest complete change that satisfies the requested behavior through its normal entry points.

- Reuse existing logic and preserve caller contracts outside the requested change.
- Keep implementation and focused verification traceable to requirements.
- Continue independent work when a pending decision affects only part of the change.

## Input

Expected behavior and available requirements, design, or acceptance criteria.

Use confirmed requirements and component contracts when available. If a pending decision changes acceptance, identify the affected work and proceed with any independent work within scope.

## Execution

Inspect normal entry points, affected callers, configuration, tests, and existing conventions before editing. Reuse existing logic and preserve behavior outside the requested change. Make the smallest complete change across the entry points, callers, and artifacts the new behavior depends on.

Run focused checks that exercise the change. When working test-first, reproduce the failure, implement the change, and rerun the same case. Pass broader coverage or regression work to `test-it` when needed.

## Completion

When the task calls for an implementation record to be saved, write it under `_artifacts/implement-it/` at the project root. Create the directory as needed and link to the file in the final reply.

Use this structure to report substantive changes:

```markdown
## Result
State which behavior is now available and the scope of any partial result.

## Changes and basis
- **[Requirement or acceptance criterion]** — Describe the implemented behavior with its source location and affected entry point.

## Verification
- **[Command or manual check]** — Report the observed result and the related acceptance criterion.

## Remaining work
- **[Unfinished work or verification]** — State the reason, affected behavior, and decision or evidence needed to continue.
```

Use existing criterion IDs or cite the user's stated condition. For a small change, use a brief result with its source location and check. Omit empty sections. Report a pass or failure only for a check you ran. Record checks you could not run under remaining work.

See [worked examples](references/examples.md) for a verified fix and a partial implementation with a pending decision.
