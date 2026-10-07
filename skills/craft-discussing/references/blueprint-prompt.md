# Architectural Blueprint Synthesis Prompt Template

Synthesize the discussion into a definitive, high-density architectural brief for the team.

## Inputs

- Discussed Vision & Boundaries: {VISION_BOUNDARIES}
- Technology Selection Decisions: {SELECTION_DECISIONS}
- Known Risks & Prerequisites: {RISKS_AND_FACTORS}

## Synthesis Instructions

1. **Bottom-Line Up Front:**
   Start immediately with the architectural verdict. No conversational throat-clearing, greetings, or transitional fluff.
2. **High Information Density:**
   Keep descriptions sharp and concrete. Avoid buzzwords and vague promises ("scalable", "modern", "robust"). Say "single-node PostgreSQL with read-replicas handling up to 5k RPS" instead of "scalable data layer".
3. **No Code Implementation:**
   Do not provide code snippets, Dockerfiles, or configuration manifests. Focus purely on architectural boundaries, contracts, responsibilities, and components.

## Output Format

Follow this exact structure:

### 1. Architectural Verdict
[2-3 sentences stating the recommended direction, chosen stack, and governing design philosophy.]

### 2. System Boundaries & Non-Goals
- **Guaranteed Capabilities:** [What the system promises to do well]
- **Operational Constraints:** [Assumptions about hardware, latency, or concurrency]
- **Explicit Non-Goals:** [What is intentionally ignored or deferred]

### 3. Stack Selection Matrix
[A Markdown table listing Layer, Chosen Tech, Alternatives Considered, and Accepted Tradeoff.]

### 4. Prerequisite Knowledge & Feasibility Factors
- **Required Mental Models:** [Concepts the team must understand]
- **Operational Risks & Gotchas:** [Key risks and practical mitigations]

### 5. Transition to Execution
[3 concrete architectural next steps to take before writing production code.]