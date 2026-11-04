+++
title = "Module boundaries"
description = "Keep related responsibilities together and make ownership clear across interfaces."
section = "principles"
order = 5
permalink = "/skills/principles-module-boundaries/index.html"
+++

This supporting guide applies the boundary principles in [engineering-principles](/skills/engineering-principles/) to modules and APIs.

## Find the owner

Identify who owns state, defaults, validation, error handling, and cleanup. A useful interface hides implementation details while exposing the decisions a caller actually needs to make.

For example, a retry policy needs to know whether repeating the operation is valid and how much delay is acceptable. Place that decision where the relevant knowledge lives; a generic helper cannot infer it reliably.

Group responsibilities that change for the same reason. Introduce a new boundary when it reduces demonstrated coupling or complexity.

## Inspect what crosses the interface

Look for internal representations that force callers to know unnecessary details. Check whether one module's change requires unrelated consumers to change, or whether several callers repeat logic that belongs with the owner.

Narrow interfaces are useful when they clarify responsibility. Adding a wrapper around every dependency does not by itself establish a better boundary.

## Change the boundary completely

When an interface changes, follow affected callers, tests, exports, and configuration. Preserve validation and error handling during moves or merges.

If a local change exposes a system-wide dependency problem, use the [architecture guide](/skills/principles-architecture-evolution/) to assess that wider concern.
