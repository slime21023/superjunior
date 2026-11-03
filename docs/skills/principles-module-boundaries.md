+++
title = "Module boundaries"
description = "Layer 3: cohesive responsibilities and appropriate information hiding."
permalink = "/skills/principles-module-boundaries/index.html"
section = "principles"
order = 4
source = "skills/principles-module-boundaries/SKILL.md"
+++

Use this layer when designing modules or APIs. Group related responsibilities, protect internal mutable state, and hide details that would cause unwanted coupling. Introduce boundaries when they reduce meaningful complexity.

Place defaults, cleanup, and error handling where the necessary information and responsibility belong. For example, retries require knowing whether an operation is safe to repeat and how much delay is acceptable.

Review whether callers face unnecessary details or work, and whether state and failures are handled at the appropriate boundary. See the [four-layer design](/skills/principles-four-layer-design/) for the full framework.