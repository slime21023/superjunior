---
name: deliver
description: "Verify delivery readiness or perform authorized commits, packaging, releases, or deployments."
license: MIT
---

# deliver

## Overview

Determine whether a specific revision or artifact is ready to deliver, and verify the outcome of authorized delivery actions.

- Match readiness evidence to the exact revision or artifact being delivered.
- Apply prerequisites to each action so eligible work can proceed independently.
- Verify the target state before reporting an action as completed.

## Input

Requested delivery outcome, verification evidence, and applicable authorization.

Identify the exact changes, revision, or artifact to deliver and its target. Use the requested outcome and existing authorization to determine which actions to take.

## Execution

Before each authorized action, verify its required checks against the exact revision or artifact. If evidence comes from an earlier revision, check whether intervening changes affect it. If a required check failed, was not run, is blocked, or lacks applicable evidence, mark the dependent action **Blocked** and skip it. Continue other authorized actions whose prerequisites are met.

Proceed under an exception only when the applicable project rules allow it and explicit approval covers the condition and action. Record the approval and preserve the actual check status.

Follow project procedures for the authorized actions. Verify each result before starting work that depends on it. If a step fails, record what remains usable and verify the target state before proposing a retry.

## Completion

When the task calls for a delivery report to be saved, write it under `_artifacts/deliver/` at the project root. Create the directory as needed and link to the file in the final reply.

Use this structure for a substantive delivery report:

```markdown
## Delivery result
State the scope, target, and overall result. For partial delivery, name the completed actions and usable artifacts.

## Readiness evidence
- **[Action | required condition]** — Record the revision or artifact, check, and actual result.
- **[Approved exception, if applicable]** — Record the approval, the condition and action it covers, and the original check status.

## Delivery record
| Action | Target | Status | Verification evidence or blocker |
| --- | --- | --- | --- |
| [Commit, package, publish, or deploy] | [Branch, artifact location, or environment] | [Completed / Failed / Blocked / Not run] | [Verified result or unmet prerequisite] |

## Remaining work
- **[Incomplete step]** — Give the reason, the checks to rerun or conditions needed to continue, and any reusable artifact.
```

Mark an action **Completed** once its actual result is verified. Mark it **Failed** when an attempt establishes failure and **Blocked** when a prerequisite prevents progress. If the target state is uncertain after an attempt, report the uncertainty before retrying. Record dry runs as readiness evidence.

For a readiness-only request, report readiness and its evidence, plus any gaps. For a single delivery action, a short list is enough. Omit empty sections.

See [worked examples](references/examples.md) for a verified local commit, a failed publication attempt, and a publication blocked by a required check.
