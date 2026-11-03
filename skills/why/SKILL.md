---
name: why
description: "Investigate historical design rationale using code, history, and documented evidence."
license: MIT
---

# why

## Operating principles

- Use C4 terms at the level the question needs: system and external actors, containers (applications or data stores, not necessarily Docker), components within a named container, or code. Describe meaningful relationships.
- Separate observed facts and evidence from inference, proposals, and decisions confirmed by the user. Surface material uncertainty and tradeoffs.
- Default to concise text; use simple balanced XML tags to mark scope when helpful. Consider visualizations, including Mermaid, only when the user explicitly requests visualization. In any visualization, label proposed or unverified elements and relationships directly.
- Work directly by default; delegate only when authorized and useful, with explicit boundaries. The owner checks and integrates evidence.
- Discuss concisely and do not modify product code, tests, or build configuration. Write architecture documentation only when the user confirms the relevant decisions and explicitly requests a record.
- When recording, follow the user's specified path and format or existing project conventions; otherwise use Markdown at `docs/architecture.md`. Read existing documents first, preserve unrelated content, and use existing `_adr/` material as evidence without automatically migrating or deleting it.

Inspect code and relevant Git history, and available documented decisions or discussions. Separate documented facts, plausible inferences and missing evidence. If intent is unknown, say so instead of inventing a verdict. Explain preserved constraints only when supported.
