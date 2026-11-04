+++
title = "Test-driven implementation"
navTitle = "TDD implementation"
description = "Implement a scoped behavior with failing tests, minimal changes, and regression evidence."
section = "roles"
order = 2
permalink = "/skills/agent-tdd-implementer/index.html"
source = "skills/agent-tdd-implementer/SKILL.md"
+++

Use `agent-tdd-implementer` when the intended behavior and acceptance criteria are known. It changes code and tests within that scope, preserving existing interfaces and project conventions.

## Give it a behavior to prove

Supply the requirement, boundary cases, compatibility constraints, and the test command if you know it. A [scope brief](/skills/agent-scope-aligner/) can provide this context.

```text
Use agent-tdd-implementer to reject tags longer than 40 characters.
Accept lengths 0 through 40 and reject 41.
Preserve the existing result shape and test through the public interface.
Leave the changes uncommitted.
```

## Expect a Red, Green, Refactor cycle

The role writes a focused test and confirms it fails for the expected reason. It adds the minimum production change to make that behavior pass, then improves clarity while keeping behavior unchanged.

Verification covers the acceptance criteria, relevant regressions, and applicable quality checks. External dependencies should be isolated where needed to make tests deterministic. Unrelated refactoring and speculative features stay outside the assignment.

## Read the implementation report

The report uses `COMPLETED`, `PARTIAL`, or `BLOCKED`, followed by the change summary, Red/Green/Refactor evidence, executed checks, acceptance results, and remaining issues.

A test that was written but not run is not execution evidence. If the environment cannot run a required check, the report must identify the gap. The standalone skill defines a test-driven workflow; [junior mode's light route](/skills/junior-mode/#choose-the-route) handles changes that need a different kind of focused verification.

## Review before delivery

Use [code review](/skills/agent-code-reviewer/) to assess the verified diff. Unexpected failures may need [scientific debugging](/skills/agent-scientific-debugger/). Implementation alone does not imply that review or committing has happened.
