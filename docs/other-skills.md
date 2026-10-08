+++
title = "Other engineering skills"
navTitle = "Other skills overview"
description = "Specialist skills for explanation, rationale, focused bug fixes, and architecture design."
section = "other"
order = 0
permalink = "/other-skills/index.html"
+++

Choose the skill that matches the requested result. Discussion and investigation stay within their scope; implementation requires an implementation task.

| Skill | Use it for | Result |
| --- | --- | --- |
| [How works](/skills/how-works/) | Runtime mechanics, code ownership, subsystem onboarding | A sourced mental model |
| [Why](/skills/why/) | Historical motivation and engineering rationale | Facts, inferences, gaps, and change guidance |
| [Karpathy guidelines](/skills/karpathy-guidelines/) | Clear assumptions, simple changes, and observable goals | Better implementation judgment |
| [TDD](/skills/tdd/) | An explicit regression request or a cheap local bug reproduction | Validated red-to-green evidence or a reliable fallback |
| [Craft discussing](/skills/craft-discussing/) | Architectural discovery, feasibility, and technology choices | An agreed architectural brief |
| [Architecture componentization](/skills/arch-componentize/) | Persisting confirmed component boundaries and dependencies | `_adr/base.xml` |
| [Architecture detail](/skills/arch-detail/) | Specifying one component's contracts and behavior | `_adr/components/{component-id}.md` |

## Explanation and rationale

Use how-works to explain what the current code does and where responsibilities live. Use why to investigate why a particular choice was made. Historical rationale needs documentary support; code structure alone can provide an inference.

## Design sequence

Start with craft-discussing when the problem, constraints, or stack need agreement. Use arch-componentize once component boundaries are confirmed. Use arch-detail for one declared component after its interaction and failure policies are decided.

These design skills produce discussion or specifications. They preserve their implementation boundaries when called from [potato-mode](/skills/potato-mode/).

## Implementation support

Karpathy guidelines apply throughout development. TDD is useful when the defect has a cheap, reliable local path; its fallback avoids building an expensive harness merely for ceremony.

The [develop workflow](/skills/workflow-develop/) coordinates a scoped implementation and may use these skills where appropriate.
