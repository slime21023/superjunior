+++
title = "Karpathy guidelines"
description = "Make assumptions visible, write the minimum code, change only what the task needs, and verify the result."
permalink = "/skills/karpathy-guidelines/index.html"
section = "principles"
order = 6
source = "skills/karpathy-guidelines/SKILL.md"
+++

These guidelines target the mistakes coding agents actually make. Based on [Andrej Karpathy's observations](https://x.com/karpathy/status/2015883857489522876), those are rarely syntax errors. They are the errors of a hasty junior developer: silent assumptions, bloated code, and edits to things nobody asked to change. Agents are good at looping toward a clear goal, so the guidelines give them one.

## When to apply it

Use it whenever an agent writes, reviews, or refactors code. The rules favor caution over speed; on a trivial edit, use judgment instead of adding process.

## The rules

**Think before coding.** State assumptions and ask when unsure, because a wrong guess costs more than a question. When a request can be read several ways, list the readings instead of picking one silently. Suggest a simpler approach when one exists.

**Keep it simple.** Write the minimum code that solves the problem: no unrequested features, abstractions, or configuration, and no handling for cases that cannot happen. If 200 lines could be 50, rewrite it. A useful test is whether a senior engineer would call the result overcomplicated.

**Make surgical changes.** Every changed line should trace back to the request. Leave neighboring code, comments, and formatting alone, and match the existing style. Remove what your change made unused; mention other dead code without deleting it.

**Work toward checkable goals.** Turn the task into something you can verify, then loop until the checks pass. For multi-step work, pair each step with its check.

```text
before: fix the bug
after:  write a failing test for empty input, then make it pass
```

## Review checklist

- Assumptions and alternative readings were stated, not chosen silently.
- No unrequested features, abstractions, or impossible-case handling were added.
- Every changed line relates to the task, and only newly unused code was removed.
- Each goal has a check, and the checks pass.

## Related

- [Four-layer design](/skills/principles-four-layer-design/) for what well-designed code looks like.
- [Align scope](/skills/workflow-align-scope/) for turning a request into Done Criteria.
- [Context-first TDD](/skills/workflow-context-tdd/) for verifying behavior with tests.
