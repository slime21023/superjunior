+++
title = "Other engineering skills"
navTitle = "Other skills overview"
description = "Specialist skills for explanation, rationale, focused bug fixes, and architecture design."
section = "other"
order = 0
permalink = "/other-skills/index.html"
+++

Choose the skill that matches the requested result. Discussion and investigation stay within their scope; implementation requires an implementation task.

```xml
<specialist-skills>
  <skill name="How works">Runtime mechanics, code ownership, subsystem onboarding</skill>
  <skill name="Why">Historical motivation and engineering rationale</skill>
  <skill name="Karpathy guidelines">Clear assumptions, simple changes, observable goals</skill>
  <skill name="TDD">Explicit regression request or cheap local bug reproduction</skill>
  <skill name="Craft discussing">Architectural discovery, feasibility, technology choices</skill>
  <skill name="Architecture componentization">Persisting confirmed boundaries and dependencies</skill>
  <skill name="Architecture detail">Specifying one component contracts and behavior</skill>
</specialist-skills>
```

- [How works](/skills/how-works/): Explains runtime mechanics, ownership, and subsystem structure.
- [Why](/skills/why/): Explores historical motivation and engineering rationale.
- [Karpathy guidelines](/skills/karpathy-guidelines/): Guidelines to keep changes simple, surface assumptions, and verify goals.
- [TDD](/skills/tdd/): Regression fix with red-to-green evidence or reliable fallback.
- [Craft discussing](/skills/craft-discussing/): Architectural discovery and technology choice comparison.
- [Architecture componentization](/skills/arch-componentize/): Synthesizes architectural decisions into `_adr/base.xml`.
- [Architecture detail](/skills/arch-detail/): Formulates detailed component contracts in `_adr/components/{id}.md`.

## Explanation and rationale

Use how-works to explain what the current code does and where responsibilities live. Use why to investigate why a particular choice was made. Historical rationale needs documentary support; code structure alone can provide an inference.

## Design sequence

Start with craft-discussing when the problem, constraints, or stack need agreement. Use arch-componentize once component boundaries are confirmed. Use arch-detail for one declared component after its interaction and failure policies are decided.

These design skills produce discussion or specifications. They preserve their implementation boundaries when called from [junior-mode](/skills/junior-mode/).

## Implementation support

Karpathy guidelines apply throughout development. TDD is useful when the defect has a cheap, reliable local path; its fallback avoids building an expensive harness merely for ceremony.

The [context TDD workflow](/skills/workflow-context-tdd/) coordinates a scoped implementation and may use these skills where appropriate.
