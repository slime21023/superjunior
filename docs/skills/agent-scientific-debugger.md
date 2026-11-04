+++
title = "Scientific debugging"
description = "Reproduce a failure, test explanations, and verify a minimal root-cause fix."
section = "roles"
order = 3
permalink = "/skills/agent-scientific-debugger/index.html"
source = "skills/agent-scientific-debugger/SKILL.md"
+++

Use `agent-scientific-debugger` for exceptions, incorrect behavior, failing tests, or intermittent failures. It can investigate and fix code within the assignment; state explicitly if you want diagnosis only.

## Start from the observed failure

Provide expected and actual behavior, a reproduction command or input, relevant logs, and any conditions under which the failure changes.

```text
Use agent-scientific-debugger to fix the retry test.
It sometimes performs four attempts even though the limit is three.
Reproduce the failure, isolate the cause, and verify the smallest fix.
Preserve the public interface and leave changes uncommitted.
```

The role follows Observe → Hypothesize → Experiment → Verify. It tests one explanation at a time and traces where actual behavior first diverges from the expected result. For intermittent behavior, controlled dependencies and timing can make that divergence observable.

## Distinguish diagnosis from verification

The debug summary reports a diagnosis status:

| Status | How to read it |
| :--- | :--- |
| `IDENTIFIED` | The root-cause claim is supported by evidence. |
| `SUSPECTED` | The proposed cause remains a hypothesis. |
| `UNRESOLVED` | The investigation has not established the cause. |

The report separately includes the source location, observations, proposed or applied fix, reproduction, and verification result: `PASS`, `FAIL`, or `NOT_RUN`.

Finding the cause does not prove the fix. Check that the corrected behavior passes the reproduction and relevant existing tests, and that regression coverage is included when feasible. If reproduction is unavailable, the role must describe its evidence and uncertainty.

## Choose the next step

A supported diagnosis can go to [TDD implementation](/skills/agent-tdd-implementer/). A verified fix can go to [code review](/skills/agent-code-reviewer/). [Junior mode](/skills/junior-mode/) tracks the full defect route and its remaining work.
