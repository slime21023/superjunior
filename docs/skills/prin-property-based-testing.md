+++
title = "prin-property-based-testing"
description = "Use generated inputs to test a property of parsers, transformations, ordering, or state transitions."
section = "principles"
order = 8
permalink = "/skills/prin-property-based-testing/index.html"
source = "skills/prin-property-based-testing/SKILL.md"
+++

## When to use

Use generated inputs to test a property of parsers, transformations, ordering, or state transitions.

## How it changes the work

Express a property independently of implementation details and choose a generator for its valid input domain. Include inputs likely to stress boundaries and make failures reproducible.

Generate CSV field values including quotes, commas, and line breaks. Check that parsing the encoded field yields the original value. A codec that drops embedded quotes should fail and produce a repeatable example.

See [Principles and practices](/principles/) for how to combine it with a core skill.
