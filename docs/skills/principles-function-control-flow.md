+++
title = "Function and control flow"
description = "Layer 2: understandable flow, results, and side effects."
permalink = "/skills/principles-function-control-flow/index.html"
section = "principles"
order = 3
+++

This guide supports the [engineering-principles skill](/skills/engineering-principles/). Use this layer when writing or reviewing functions. Extract useful concepts when doing so makes the flow easier to understand; use guard clauses and abstraction levels without imposing fixed nesting limits.

Make side effects clear. A command can return useful data, such as a newly created ID. Distinguish empty results, absence, and failure when their meanings differ: an empty collection can represent a successful query with no matches, not a failed query. Validate boundary inputs and handle errors according to the contract.

Review whether the flow is easy to follow and callers can anticipate side effects and distinguish outcomes. See the [four-layer design](/skills/principles-four-layer-design/) for the full framework.
