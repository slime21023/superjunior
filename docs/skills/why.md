+++
title = "Investigate design rationale"
navTitle = "Why it was designed"
description = "Use history and recorded decisions to explain why a behavior or design was introduced."
section = "senior"
order = 1
permalink = "/skills/why/index.html"
source = "skills/why/SKILL.md"
+++

Use `why` when the question concerns a past choice: a retry limit, a dependency, a compatibility branch, or an architectural boundary. It investigates without modifying files.

## Identify the decision

Name the code or behavior and, if available, the period, commit, issue, or decision record that might explain it.

```text
Use why to investigate the three-attempt limit in the retry helper.
Trace when it was introduced and look for a recorded reason.
Separate documented rationale from plausible explanations.
Do not redesign the helper or change files.
```

The skill examines current code, Git history, commits and diffs, and available decision records or discussions. It separates the original choice from later changes.

## Read the confidence

| Confidence | Meaning |
| :--- | :--- |
| `CONFIRMED` | The rationale is supported by recorded evidence. |
| `INFERRED` | The explanation is supported indirectly and remains an inference. |
| `UNKNOWN` | The available material does not establish a reliable reason. |

The response identifies the question, finding, origin and evolution, supporting evidence, and any evidenced constraints or tradeoffs. Assumptions and missing history belong in the result.

Current implementation alone does not prove intent. An unknown rationale can be the correct conclusion; the skill should not invent a reason to fill the gap.

## Choose what follows

Use [how-works](/skills/how-works/) if you need current execution explained. Use [architecture-discuss](/skills/architecture-discuss/) to decide whether the old choice still fits today's constraints. A historical investigation does not itself authorize a redesign or a documentation edit.
