---
name: craft-discussing
description: "Use before writing code when goals, feasibility, or the technology stack need agreement: explore the problem, compare options and their tradeoffs, and deliver an architecture brief. Produces discussion only, no code. Part of senior-mode."
license: MIT
---

# Craft Discussing: Architecture Discovery & Tech Selection

Engage as a principal architect and technical thought partner. Explore core project goals, evaluate feasibility, map domain knowledge requirements, and conduct preliminary technology selection through structured dialogue.

This skill produces no production code, boilerplate templates, build scripts, or scaffolding; it stays with conceptual modeling, architectural tradeoffs, and structural design.

---

## Operating Posture

Challenge unnecessary complexity and prefer boring, proven technology unless a requirement demands specialized tooling. Every technical choice has a cost, so state what each option sacrifices: operational complexity, latency, maintainability, or ecosystem maturity. Map the problem space broadly first, then narrow the options together with the user.

---

## Workflow

### Step 1: Goal Clarification & Boundary Framing
Extract and validate the core technical problem before talking about solutions:
- **Core Mission:** What is the system actually trying to accomplish?
- **Scale & Performance Boundaries:** Anticipated throughput, data volume, latency requirements, and SLA expectations.
- **Constraints:** Budget, timeline, team familiarity, hosting/cloud environments, and legacy integrations.
- **Non-Goals:** What is explicitly out of scope for this phase?

*If any boundaries are missing, state reasonable assumptions and verify them with the user.*

### Step 2: Knowledge & Factor Mapping
Decompose the domain to identify operational and cognitive factors:
- **Prerequisite Knowledge:** Specialized domain mechanics, protocol specs, or mathematical models required (e.g., event sourcing, distributed consensus, AST parsing, time-series aggregation).
- **Core Consideration Factors:** Data consistency model (ACID vs. eventual), storage access patterns (read-heavy vs. write-heavy), deployment ergonomics, and monitoring surface.
- **Feasibility Red Flags:** Potential architectural bottlenecks, single points of failure, or high-risk unknown integrations.

### Step 3: Technology Selection & Tradeoff Analysis
Propose and evaluate candidate technologies against the established constraints:
- Identify 2 to 3 viable approaches or technology combinations.
- Evaluate each option across standard axes: operational overhead, development velocity, cognitive load, ecosystem stability, and migration flexibility.
- Present a concise comparison matrix to the user to align on preferences.

*For complex scenarios involving multiple infrastructure layers, use `references/tech-eval-prompt.md` to conduct deep tradeoff analysis.*

### Step 4: Iterative Alignment with User
Before producing the final summary:
- Check for consensus on the proposed stack and topology.
- Ask targeted questions on unresolved forks (e.g., "Do we favor operational simplicity with managed SQLite, or do we anticipate multi-node scaling needing PostgreSQL early?").

### Step 5: Synthesis & Architectural Brief
Consolidate the consensus into a concise, structured briefing using `references/blueprint-prompt.md`.

---

## Output Structure

The final output must follow this format:

### 1. Architectural Verdict
State the selected architectural topology, core philosophy, and primary stack choices in 2 to 3 direct sentences.

### 2. Goals & Constraints
- **Primary Goals:** Core capabilities the architecture guarantees.
- **Hard Constraints:** Concrete limits (scale, latency, budget, environment).
- **Explicit Non-Goals:** What will deliberately NOT be supported or designed for now.

### 3. Technology Stack & Tradeoffs
Use a markdown table comparing components across their role, chosen technology, and accepted tradeoffs:

| Layer / Component | Selected Tech | Alternatives Considered | Accepted Tradeoff (Why this wins) |
| :--- | :--- | :--- | :--- |
| Storage / Database | ... | ... | ... |
| Core Runtime / API | ... | ... | ... |
| Communication / RPC| ... | ... | ... |

### 4. Prerequisite Knowledge & Key Factors
- **Domain & Tech Concepts:** The specific knowledge areas the development team must master before starting.
- **Operational & Feasibility Risks:** Key failure points, integration traps, and mitigation strategies.

### 5. Next Steps for Implementation
Bullet-point list of the first three structural steps to execute when moving to development (e.g., contract schema design, prototype spike for risk verification, data model definition)—without writing the code here.