+++
title = "Karpathy guidelines"
description = "Keep assumptions visible, changes focused, and success observable."
section = "principles"
order = 7
permalink = "/skills/karpathy-guidelines/index.html"
+++

This handbook guide complements [engineering-principles](/skills/engineering-principles/). It develops four working habits used throughout SuperJunior; it is not a separate installable skill.

## Think before changing code

Establish the requested behavior and inspect the context that could change the solution. State material assumptions. Ask about ambiguity when the answer would affect correctness or scope; use reasonable assumptions for routine details.

A [scope brief](/skills/agent-scope-aligner/) helps when the affected code and success criteria are not yet clear.

## Choose the smallest complete solution

Use existing code and conventions where they fit. Add only the behavior, configuration, or abstraction needed to satisfy the task. Simplicity still includes necessary validation, error handling, and affected callers.

If the requirement is an empty-input fix, solve and verify that behavior before considering a general parser redesign.

## Keep the diff focused

Each change should have a reason connected to the task. Preserve unrelated edits and avoid opportunistic formatting or refactoring. Remove code made unused by the change; report other cleanup separately.

A small diff is useful when it includes the whole fix. Leaving a caller or test broken to reduce line count is incomplete work.

## Work toward evidence

Turn the goal into a result that can be checked, then select evidence appropriate to it. A behavioral fix may need a failing reproduction followed by passing checks. A documentation edit may need a build, link check, and inspection of what readers see.

Describe unavailable checks and unresolved uncertainty. [Junior mode](/skills/junior-mode/#read-the-workflow-outcome) uses that evidence to distinguish delivery from work that still needs changes, verification, or a decision.
