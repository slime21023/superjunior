---
name: debug
description: "Diagnose an observed failure, intermittent behavior, or unexpected result."
license: MIT
---

# debug

## Overview

Explain observed failures with causal evidence and leave a repeatable diagnosis.

- Anchor the investigation in expected and observed behavior.
- Choose checks that distinguish plausible causes.
- Confirm a cause only when evidence connects the trigger, mechanism, and symptom.

## Input

Symptoms, expected behavior, and available logs or reproduction context.

## Execution

Record expected and observed behavior, then reproduce the failure or document the conditions tried and what prevented reproduction. For intermittent failures, record failures and total attempts when available.

For each leading hypothesis, state what observation would support or rule it out. Use diagnostic checks within the requested scope. When practical, vary one relevant condition at a time. Trace the trigger through the failure mechanism to the symptom, and retain the commands, observations, and source or log locations needed to repeat the diagnosis.

When the user also requests a fix, pass the reproduction, diagnosis, and expected behavior to `implement-it` and the regression checks to `test-it`.

## Completion

When the task calls for a diagnosis report to be saved, write it under `_artifacts/debug/` at the project root. Create the directory as needed and link to the file in the final reply.

Use this structure for a substantive diagnosis:

```markdown
## Diagnosis
**[Confirmed / Suspected / Unresolved]** State the cause or the narrowest supported scope.

## Reproduction and observations
- **Conditions and steps** — Give a repeatable command or procedure and the relevant inputs, version, or environment.
- **Expected and actual** — Describe the difference and cite key output or source locations. Include failure and attempt counts for intermittent issues when available.

## Hypotheses and evidence
| Hypothesis | Discriminating check | Observation and assessment |
| --- | --- | --- |
| [Possible cause] | [What would support or rule it out] | [Observed result, source, and whether it supports, rules out, or leaves the hypothesis open] |

## Corrective direction and handoff
- **Corrective direction** — State the behavior to restore.
- **Verification or next check** — List the reproduction and regression checks to rerun after a fix, or the next check that could narrow the cause.
```

Use **Confirmed** when evidence connects the trigger, mechanism, and symptom. Use **Suspected** when evidence supports a candidate and a check is still needed to distinguish it from other explanations. Use **Unresolved** when the evidence only narrows the investigation. A short list can replace the hypothesis table for a straightforward case. Omit the corrective direction when the cause is unresolved.

See [worked examples](references/examples.md) for a confirmed cause and an unresolved intermittent failure.
