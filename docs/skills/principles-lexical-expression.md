+++
title = "Names and expression"
navTitle = "Names & expression"
description = "Make intent, units, and important effects visible to the next reader."
section = "principles"
order = 3
permalink = "/skills/principles-lexical-expression/index.html"
+++

This supporting guide applies the expression principles in [engineering-principles](/skills/engineering-principles/) to names and comments.

## Make the name answer a question

Use the project's domain vocabulary. A reader should be able to tell what a value represents or what an operation does without reconstructing the implementation.

For a numeric boundary, identify the quantity and unit when the type or surrounding context does not already make them clear. `retryDelayMs` communicates more than `delay`; `maxAttempts` communicates a count without inventing a time unit.

A mutating operation should not look like a harmless lookup. Check callers before renaming a public symbol so the vocabulary remains consistent across its interface.

## Put reasons in comments

Comments are useful for constraints, invariants, tradeoffs, or compatibility behavior that the code cannot explain on its own. A comment that merely narrates the next statement adds another place to maintain the same information.

If an awkward name reflects an unclear responsibility, follow that concern into the [function](/skills/principles-function-control-flow/) or [module](/skills/principles-module-boundaries/) boundary. Local renaming cannot resolve ambiguous ownership.

## Review for consequences

Ask how the wording could mislead a caller or maintainer. Prefer a concrete example of that confusion over a stylistic preference. Keep vocabulary changes within the task's affected scope.
