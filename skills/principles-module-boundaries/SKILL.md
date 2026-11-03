---
name: principles-module-boundaries
description: Use when designing or reviewing module responsibilities, interfaces, and information hiding.
license: MIT
---

# Principles: Class & Module Boundaries Layer

Keep related responsibilities together and hide implementation details that callers should not depend on.

- Give modules interfaces proportionate to what they do; extract a boundary when it reduces meaningful complexity, not simply to create a deep module.
- Put defaults, cleanup, and error handling where the necessary information and responsibility belong. For example, retry only where the operation's idempotency and acceptable delay are understood.
- Protect internal mutable state and hide implementation or vendor details when exposing them would create unwanted coupling. Group behavior that changes together; do not force unrelated behavior into a shared abstraction.

## Review prompts

- Does the interface expose unnecessary details or place avoidable work on callers?
- Are state, failure handling, and related responsibilities owned by the appropriate boundary?