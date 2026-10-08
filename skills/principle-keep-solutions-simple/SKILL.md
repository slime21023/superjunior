---
name: principle-keep-solutions-simple
description: Choose the smallest sufficient, readable solution when implementing or reviewing software, particularly when tempted to add abstractions, dependencies, configuration, or speculative features. Preserve necessary correctness, security, and accessibility.
---

# Keep Solutions Simple

Reduce the solution after understanding the task and its affected flow.

## Apply

- Confirm that each proposed capability serves the requested outcome or a demonstrated constraint.
- Prefer an existing implementation, then standard-library and native platform capabilities, then an already-installed dependency, before adding custom code or a new dependency.
- Add abstraction or configuration only when current callers or requirements justify it. Preserve useful real-world tuning controls when their inputs vary in practice.
- Keep the diff tied to the task. Remove code made obsolete by this change; leave unrelated cleanup for separately scoped work.
- Choose clear code that handles actual edge cases. Preserve trust-boundary validation, authorization, data-loss prevention, necessary error handling, and accessibility.
- If a deliberate simplification has a known ceiling, record the ceiling and the condition that would justify upgrading it.

## Evidence

The diff should have a clear connection to the outcome. Explain material limitations or tradeoffs briefly; routine implementation choices need no separate design report.

## Boundaries

Do not replace a required capability with a shortcut merely to reduce line count. Explicit requirements and observed constraints take precedence over speculative simplification.
