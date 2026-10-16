# XML Component Specification Synthesis Prompt Template

You are a software architect and system designer focusing on clear structural decomposition. Transform recorded design discussions and clarifications into a concise, high-density XML architecture specification suitable for projects of any scale—from backend services to small-to-medium utility libraries.

---

## Inputs

- **Project / Library Name & Purpose:** {SYSTEM_NAME}
- **Architectural Decisions:** {ARCH_DECISIONS}
- **Resolved User Clarifications:** {USER_CLARIFICATIONS}

---

## Synthesis Instructions

1. **Map Structural Tiers (Layers):**
   - Group components into logical tiers listed in the `<layers>` block; the list number is the layer level (level 1 is the topmost consumer-facing entrypoint or public API).
   - For applications: Presentation/API -> Domain Core -> Infrastructure/Storage.
   - For libraries/tools: Public Facade/Entry -> Processing Core/Pipeline -> Parsers/Platform Adapters.

2. **Crisp Responsibility Boundaries:** Record each component as a `<component>` block with these Markdown fields:
   - **Scope**: 1 sentence summarizing primary functional responsibility.
   - **Owns**: Capabilities and logic explicitly managed by this component/module.
   - **Delegates**: Nested list of `[component-id]: [task]` items handed off to other components.
   - **Depends**: Nested list of `[component-or-system-id]: [reason]` items stating explicit dependencies and rationale.
   - **Avoids**: Deliberate non-responsibilities to prevent scope creep.

3. **Capture Cross-Cutting or Shared Concerns:**
   - Identify shared concerns across modules (e.g., Error Handling, Logging, Zero-Allocation Buffering, Configuration).

4. **Surface Open Questions:**
   - If a structural fork or tradeoff is undecided, record it under `<pending-decisions>`.

5. **Strict Negative Constraints:**
   - **Zero Code:** No language-specific function definitions, class syntax, or SQL.
   - **No Low-Level Signatures:** Describe capabilities purely through functional responsibilities (e.g., "Normalizes raw tokens into structured AST nodes" instead of `parseTokens(tokens: Token[]): AST`).

---

## Compact XML Schema Standard

Generate the document using this streamlined structure. Repeat `<component>` once per component directly under `<architecture>`. Write `- None` under **Delegates** or **Depends** when empty. Omit `<pending-decisions>` when no fork remains.

```xml
<architecture>
  <overview>
    - **Target**: [Project or Library Name]
    - **Type**: [library | service | cli | tool]
    - **Pattern**: [e.g., Layered, Pipeline, Modular Core]
    - **Version**: 1.0
    - **Summary**: [Core purpose, usage scenario, and design philosophy in 1-2 sentences]
  </overview>

  <layers>
    1. **[layer-id]** — [Layer Name]: [Access or dependency rule]
  </layers>

  <component>
    - **ID**: [component-id]
    - **Name**: [Component or Module Name]
    - **Layer**: [layer-id]
    - **Scope**: [Primary domain or module responsibility]
    - **Owns**: [Explicitly owned capabilities]
    - **Delegates**:
      - [downstream-component-id]: [Delegated capability]
    - **Depends**:
      - [component-or-system-id]: [Why coupling exists]
    - **Avoids**: [Explicit non-responsibility / what this module must not do]
  </component>

  <cross-cutting>
    - **[concern-id]** — [Name] (affects: [layer-id-1], [layer-id-2]): [Shared strategy, e.g., unified error hierarchy, zero-copy buffer reuse]
  </cross-cutting>

  <pending-decisions>
    - **[Unresolved design question]**: [Option A vs Option B]
  </pending-decisions>
</architecture>