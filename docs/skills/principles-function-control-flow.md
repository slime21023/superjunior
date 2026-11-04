+++
title = "Functions and control flow"
navTitle = "Functions & flow"
description = "Make each outcome distinguishable and each side effect predictable."
section = "principles"
order = 4
permalink = "/skills/principles-function-control-flow/index.html"
+++

This supporting guide applies [engineering-principles](/skills/engineering-principles/) to functions and their callers.

## Follow the observable paths

Read the normal path, boundary cases, and failures. Check what each path returns or changes and whether callers can distinguish those outcomes.

An empty list can mean a successful search with no matches. A failed search carries a different meaning. Combining both into the same result can make a caller treat a failure as valid data.

Use guard clauses or extracted concepts when they make these paths easier to understand. Follow the surrounding style rather than imposing a fixed nesting limit or splitting every short block into a helper.

## Make effects and cleanup clear

An operation can return useful data while changing state; the caller needs to understand both. Put validation and error handling where the necessary information is available, and make resource cleanup reliable across success and failure.

When responsibility spans several functions, inspect the [module boundary](/skills/principles-module-boundaries/) rather than adding scattered defensive checks.

## Verify the contract

Tests should exercise observable results and meaningful failure paths. If a refactor changes the result shape, error behavior, or state transition, check the affected consumers as well as the function itself.

Use [TDD implementation](/skills/agent-tdd-implementer/) for a new behavior or [scientific debugging](/skills/agent-scientific-debugger/) for an observed failure.
