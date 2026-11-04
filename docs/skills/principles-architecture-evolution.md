+++
title = "Architecture and evolution"
description = "Layer 4: dependencies and organization appropriate to the system."
permalink = "/skills/principles-architecture-evolution/index.html"
section = "principles"
order = 5
+++

This guide supports the [engineering-principles skill](/skills/engineering-principles/). Use this layer when reviewing dependencies and organization. Protect important domain boundaries, and introduce interfaces when they solve a concrete need. Avoid dependency cycles that make the system difficult to understand, build, or change.

Organize related code so it is easy to find; a shared directory is acceptable if its contents are cohesive. Remove dead code created by the change and keep necessary cleanup within the task's scope.

Review concrete coupling or maintenance risks and verify any cleanup. See the [four-layer design](/skills/principles-four-layer-design/) for the full framework.
