---
name: test-it
description: "Design, write, or run tests to verify behavior against requirements and contracts."
license: MIT
---

# test-it

## Overview

Turn requirements into repeatable checks and report the evidence for each key case.

- Choose the narrowest test level that demonstrates the required behavior.
- Mark a case passed or failed only when execution produced a determinate result.
- Keep acceptance criteria open while key evidence is outstanding.

## Input

The behavior or change under test and the available execution environment.

Use the relevant `_spec/` acceptance criteria, component contracts, or user instructions. Reuse implementation checks when their evidence applies to the current change and covers the behavior under test.

## Execution

Map each key case to a requirement and state its preconditions, action, and expected outcome. Cover relevant normal, boundary, failure, and regression cases. Use existing test conventions and choose the narrowest test level that can demonstrate the required behavior. Check the affected entry point when acceptance depends on a cross-component interaction or user-visible result.

Record reproduction steps or commands, the observed result, and any environment or data needed to repeat the check. Preserve failing evidence for diagnosis. After a fix, rerun the failing case and relevant regressions.

## Completion

When the task calls for a verification report to be saved, write it under `_artifacts/test-it/` at the project root. Create the directory as needed and link to the file in the final reply.

Use this structure for a substantive verification report:

```markdown
## Verification result
Summarize the behavior verified and criteria still missing evidence.

## Acceptance criteria and evidence
| Acceptance criterion | Case and expected result | Command or steps | Status and actual result |
| --- | --- | --- | --- |
| [Criterion ID or user requirement] | [Preconditions, action, expected outcome] | [Repeatable command or steps] | [Status and observation or reason] |

## Gaps and handoff
- **[Affected criterion]** — Describe the expected and observed difference or missing prerequisite. Identify the case to rerun and link to relevant output when available.
```

Use one row per key case, including when multiple cases map to the same criterion. Mark a case **Passed** or **Failed** only after it ran and produced a determinate result. Use **Not run** for designed or pending checks and **Blocked** when a missing prerequisite prevents a result. Keep any criterion with a key case still outstanding open.

For small changes, a short list of cases, commands, and results is enough. Omit the gaps section when there are no gaps. See [worked examples](references/examples.md) for completed regression checks and blocked end-to-end verification.
