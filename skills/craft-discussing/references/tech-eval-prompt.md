# Technology Evaluation Prompt Template

You are analyzing technical feasibility and stack candidates for an upcoming system. Evaluate options rigorously with zero marketing fluff. Do not write implementation code.

## Context

- System Goal: {SYSTEM_GOAL}
- Constraints & Boundaries: {CONSTRAINTS}
- Candidate Technologies: {CANDIDATES}

## Evaluation Instructions

1. **Assess Feasibility:**
   - Can the candidate technologies realistically deliver the required performance and reliability within the stated constraints?
   - What are the hidden costs (operational toil, hosting expenses, tooling friction, steep learning curves)?

2. **Map Required Knowledge:**
   - What underlying mental models must the team understand to operate this technology correctly without shooting themselves in the foot?

3. **Identify Architectural Failure Modes:**
   - Where does this stack tend to break down when requirements evolve?
   - How hard is it to refactor or migrate away from this choice later?

## Output Schema

Deliver findings under these exact headings:

### Candidate Comparison
A direct breakdown comparing candidates on Operational Simplicity, Community/Maturity, Resource Efficiency, and Extensibility.

### Knowledge Prerequisites
Concrete topics, patterns, or protocols required to use this effectively.

### Failure Modes & Hidden Gotchas
Non-obvious edge cases, footguns, or operational landmines associated with each option.

### Recommended Verdict
A reasoned recommendation for which option fits best, clearly stating what is sacrificed by choosing it.