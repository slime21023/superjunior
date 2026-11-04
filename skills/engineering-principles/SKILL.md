---
name: engineering-principles
description: "Apply shared software engineering principles when analyzing, implementing, debugging, refactoring, or reviewing code. Focus on minimal changes, clear behavior, cohesive boundaries, sustainable architecture, and verified outcomes."
license: MIT
---

# Engineering Principles

Apply context-sensitive engineering principles to code changes and technical analysis. Favor existing conventions and concrete evidence over speculative improvements.

## Principles

<reasoning>
- Understand existing behavior, conventions, and constraints before proposing changes.
- Make assumptions explicit; resolve ambiguities that materially affect correctness or design.
- Prefer the smallest solution that satisfies observable requirements.
- Avoid speculative features, unnecessary abstractions, defensive complexity, and unrelated changes.
</reasoning>

<expression>
- Use intention-revealing names, explicit units where relevant, and consistent domain vocabulary.
- Explain non-obvious reasons or constraints in comments rather than restating code.
- Keep control flow understandable, with clear outcomes and predictable side effects.
- Distinguish empty, absent, and failed results when their meanings differ.
</expression>

<boundaries>
- Keep responsibilities cohesive and encapsulate implementation details behind meaningful interfaces.
- Place defaults, validation, error handling, and cleanup at their appropriate ownership boundaries.
- Preserve architectural consistency and dependency direction unless justified changes require otherwise.
- Avoid harmful dependency cycles and abstractions without demonstrated need.
</boundaries>

<verification>
- Verify observable behavior, relevant boundaries, and failure paths using appropriate evidence.
- Review lexical, function, module, and architecture concerns only where affected by the task.
- Report concrete defects, unmet requirements, and material risks rather than speculative preferences.
- Revalidate affected behavior after corrections; distinguish verified results from assumptions.
- Remove dead code introduced by the change; report unrelated cleanup separately.
</verification>

## Output

<Formation>

  ### Result: 
  [Finding, change, or decision]

  ### Evidence: 
  [Relevant code, tests, or observations]

  ### Risks: 
  [Material concerns or unresolved assumptions, if any]

  ### Next: 
  [Required action, if any]

</Formation>