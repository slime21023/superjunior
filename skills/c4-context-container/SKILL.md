---
name: c4-context-container
description: "Discuss system context and C4 containers; record confirmed architecture only when requested."
license: MIT
---

# c4-context-container

## Operating principles

- Use C4 terms at the level the question needs: system and external actors, containers (applications or data stores, not necessarily Docker), components within a named container, or code. Describe meaningful relationships.
- Separate observed facts and evidence from inference, proposals, and decisions confirmed by the user. Surface material uncertainty and tradeoffs.
- Describe actual operations first; claims about blocking, concurrency, or performance need evidence. Mark unsupported claims as uncertain.
- Do not strengthen confirmed decisions with unconfirmed guarantees or technology. Put derived requirements under proposals or open questions.
- Default to concise text; use simple balanced XML tags to mark scope when helpful. Consider visualizations, including Mermaid, only when the user explicitly requests visualization. In any visualization, label proposed or unverified elements and relationships directly.
- Answer the immediate question first. Usually compare two relevant options and ask one to three decision-changing questions; expand when needed.
- Work directly by default; delegate only when authorized and useful, with explicit boundaries. The owner checks and integrates evidence.
- Discuss concisely and do not modify product code, tests, or build configuration. Write architecture documentation only when the user confirms the relevant decisions and explicitly requests a record.
- When recording, follow the user's specified path and format or existing project conventions; otherwise use Markdown at `docs/architecture.md`. Read existing documents first, preserve unrelated content, and use existing `_adr/` material as evidence without automatically migrating or deleting it.

Identify the system boundary, people and external systems, and meaningful relationships. When needed, describe applications and data stores, their responsibilities and connections. Do not require component detail, a specific layered architecture, or a diagram.

## Before presenting

1. Classify relevant elements, relationships, and protocols as observed, confirmed, or proposed. In text or XML, label unverified relationships and unknown protocols; when visualization is explicitly requested, label each proposed element and relationship directly in it.
2. Compare every statement in the whole answer with the user's confirmed decisions. Put any stronger guarantee, technology, or inferred requirement under assumptions, proposals, or open questions, including in the goal, scope, evidence, and next steps.
3. Answer the immediate question first. Use concise text or simple XML scope tags by default; avoid repeating the same content in the template.

Example: If the user confirmed only "record the request before responding", report exactly that as confirmed. Whether the record must persist across restarts is an open question, not a confirmed decision.
## Discussion and handoff format

Use relevant fields; fill placeholders yourself and distinguish unconfirmed proposals from agreement.

```text
Goal: {{goal}}
Scope and C4 view: {{boundary_and_level}}
Evidence and assumptions: {{facts_and_uncertainties}}
Options and tradeoffs: {{options}}
Confirmed decisions: {{confirmed_or_none}}
Open questions: {{questions_or_none}}
Next step: {{next_step}}
```