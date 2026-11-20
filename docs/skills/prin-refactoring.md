+++
title = "prin-refactoring"
description = "Improve the internal structure of existing code while preserving observable behavior."
section = "principles"
order = 6
permalink = "/skills/prin-refactoring/index.html"
source = "skills/prin-refactoring/SKILL.md"
+++

## When to use

Improve the internal structure of existing code while preserving observable behavior.

## How it changes the work

Identify the behavior callers rely on before editing. Use small transformations that preserve that behavior. Run relevant checks after meaningful steps.

Before extracting a tag predicate, verify empty selection, matching, ordering, and multiple tags. Extract the predicate and rerun the same checks without revising their expectations.

See [Principles and practices](/principles/) for how to combine it with a core skill.
