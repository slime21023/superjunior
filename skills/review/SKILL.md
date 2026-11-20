---
name: review
description: "Review an existing specification, design, change, or document for defects and risks."
license: MIT
---

# review

## Overview

Identify actionable defects and risks in an existing artifact while preserving it for the author.

- Tie each finding to evidence, a trigger, and its impact.
- Prioritize findings by consequence and likelihood.
- Distinguish supported findings from questions that still need evidence.

## Input

The artifact or diff and any applicable requirements or standards.

Identify the artifact, revision, or diff in scope. Use applicable acceptance criteria, existing contracts, and project standards as the review basis.

## Execution

Keep the reviewed artifact unchanged. Inspect the surrounding context, affected callers, and tests. Check correctness, regressions, and compatibility against the review basis. Verify that cited test results apply to the reviewed revision.

Report confirmed defects and evidence-backed risks. For each, identify the trigger, consequence, and supporting location. Label risks and state what remains unverified. Put evidence gaps that do not establish a finding under open questions.

Prioritize findings by the likelihood of the trigger and severity of the consequence. Mark a finding as blocking only when supported by the acceptance or delivery criteria. Combine findings with the same root cause.

## Completion

When the task calls for a review report to be saved, write it under `_artifacts/review/` at the project root. Create the directory as needed and link to the file in the final reply.

Lead with findings, ordered by impact. Use this structure for a substantive review:

```markdown
## Findings
1. **[Severity] [Issue summary]** — [File and line or document section]
   - **Evidence and impact** — State the trigger, observed behavior, consequence, and affected requirement or contract.
   - **Correction and verification** — State the behavior to restore and how to check it.

## Open questions
- **[Affected judgment]** — State the missing evidence and the check that would provide it.

## Review scope
State the artifact or revision reviewed, the review basis, and material verification limits.
```

Omit empty sections. If there are no findings, state that none were found within the reviewed scope and retain the scope and material limits. When no tests were run, state what the review relied on.

See [worked examples](references/examples.md) for a confirmed defect and a verification gap.
