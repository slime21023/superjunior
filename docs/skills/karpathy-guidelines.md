+++
title = "Karpathy guidelines"
description = "Make assumptions visible, keep changes focused, and verify checkable goals."
permalink = "/skills/karpathy-guidelines/index.html"
section = "other"
order = 3
source = "skills/karpathy-guidelines/SKILL.md"
+++

## When to use it

Apply while writing, reviewing, or refactoring code. The goal is the smallest correct change with visible assumptions and verified success. Use judgment on trivial tasks.

## The four rules

**Think before coding.** State assumptions and surface competing readings of the request. Ask when uncertainty matters. Propose a simpler approach when it meets the need.

**Simplicity first.** Implement the minimum capability that solves the problem. Avoid unrequested features, abstractions, configuration, and handling for impossible cases.

**Surgical changes.** Tie every changed line to the task, match existing style, and preserve adjacent code, comments, and formatting. Remove what this change made unused; mention unrelated dead code without deleting it.

**Goal-driven execution.** Convert work into checkable goals. Pair each meaningful step with its observation and iterate toward the agreed result.

## Example

“Fix empty input” becomes a concrete behavior: empty input returns an empty collection. A reliable failing check identifies the defect, and the minimal correction makes it pass while preserving sibling behavior.

## Boundaries and related skills

A clear goal guides implementation decisions; it does not justify silently changing scope or assumptions. Avoid adding process for a trivial edit.

Use [four-layer design](/skills/principles-four-layer-design/) for clean abstraction and encapsulation, [align scope](/skills/workflow-align-scope/) for acceptance conditions, and [context TDD](/skills/workflow-context-tdd/) for regression verification.
