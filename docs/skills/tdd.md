+++
title = "TDD bug fix"
description = "Capture a real defect with a narrow regression and validate the minimal correction."
permalink = "/skills/tdd/index.html"
section = "other"
order = 4
source = "skills/tdd/SKILL.md"
+++

## When to use it

Use when TDD or a regression test is explicitly requested, or a defect has a fast, low-cost local test target. Preserve the fallback when testing requires disproportionate setup, live dependencies, or brittle mocks.

## Red to green

1. Establish the expected contract, faulty behavior, affected path, and minimal reproduction mentally. The source's first cognitive step performs no file writes or commands.
2. Confirm the local runner works and select the closest existing test target.
3. Write the narrowest assertion against externally observable behavior.
4. Run it and validate that the failure is caused by the expected defect. Correct harness or fixture errors before treating the signal as red evidence.
5. Apply the smallest production correction without unrelated cleanup.
6. Rerun the regression and nearby sibling tests to check the blast radius.

The regression should survive an internal refactor. Keep fixtures scoped and local. Never weaken assertions merely to reach green.

## Circuit breakers

After two failed fix attempts, or a fix that breaks sibling tests, stop editing and reassess the test assumption or implementation model.

When results fluctuate without code changes, stop and make the observation deterministic before using it to guide a fix.

## Impractical test fallback

Use a fallback when the check needs more than two third-party-service mocks, live network or production credentials, nonreproducible state, or infrastructure cost greater than the fix.

Choose the narrowest reliable option:

1. Standalone reproduction script.
2. Exact CLI command checking exit status or output.
3. Focused log or snapshot observation.

An explicit reliable procedure is better evidence than a brittle harness.

## Return the proof

Report the defect and contract, exact red command and failure, root cause and minimal correction, green result and sibling checks, and a fallback note when applicable.

This skill supplies focused development evidence. Required review, broader verification, and delivery retain their own conditions under the [workflows](/workflows/).
