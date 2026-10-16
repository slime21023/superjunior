+++
title = "Scientific debug"
description = "Phase 3A empirical debugging: stack trace observation, hypotheses, minimal repro, and root-cause fix."
permalink = "/skills/workflow-scientific-debug/index.html"
section = "workflows"
order = 3
source = "skills/workflow-scientific-debug/SKILL.md"
+++

## When to use it

Execute whenever an exception, failing test, or unexpected defect occurs during development or verification.

## Apply it

1. **Observe**: Parse error messages, stack traces, and variable states at the breach point.
2. **Hypothesize**: Formulate 1~2 falsifiable hypotheses explaining why the invariant broke.
3. **Minimal Repro**: Author an isolated test reproducing the failure deterministically with the smallest input payload.
4. **Root-Cause Fix**: Fix the cause at the caller convergence point; do not patch symptoms in individual callers.
5. **Verify**: Ensure the reproduction test turns green and sibling module tests pass.

## Escalation

If stuck after 2 attempts, escalate to the user with a structured inquiry: Target Goal, Expected vs. Actual, Attempted Hypotheses, and Concrete Question.
