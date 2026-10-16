+++
title = "Agent: Scope aligner"
description = "Specialized read-only role for exploring context, mapping blast radius, and preparing execution steps."
permalink = "/skills/agent-scope-aligner/index.html"
section = "roles"
order = 1
source = "skills/agent-scope-aligner/SKILL.md"
+++

## When to use it

Delegate to this worker during the initial planning or scope alignment phase when context is large, callers need tracing, or blast radius requires mapping.

## Assigned responsibilities

- Explore codebase contracts, entrypoints, and data structures in read-only mode.
- Synthesize a 1~2 sentence plain-language problem statement.
- Define 2~3 objective Done Criteria.
- Produce the 3-tier Blast Radius matrix (Direct, Ripple, Untouched).
- Sequence execution: Types ➔ Core ➔ Verification Commands.

## Boundary

Strictly read-only (`readonly = true`). Never edit, create, or delete files. Return findings directly to the parent owner.
