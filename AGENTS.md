# AGENTS.md

## Project Goal

Build the collection of skills for coding agents about SDLC (Software Development Life Cycle) that can use with any kinds of software development.

## Design Principles

- **Single Responsibility**: A single Skill is responsible for only one clearly defined capability.
- **Composability**: Skills can be freely chained and combined.
- **Contract First**: Inputs, outputs, and execution conditions must be clearly defined.
- **Stateless by Default**: By default, a Skill does not maintain hidden state.
- **Observable**: Execution processes, artifacts, and errors are traceable.
- **Verifiable**: Every Skill has verifiable completion criteria.
- **Progressive Disclosure**: Agents load detailed instructions and resources for relevant Skills only when needed.

## Skill List

- **explore**: Gather evidence about the problem domain and existing system.
- **specify**: Define requirements, scope, constraints, and acceptance criteria.
- **plan-working**: Sequence work items by dependency and define when each is complete.
- **design-component**: Define component responsibilities, boundaries, interfaces, behavior, and interactions.
- **implement-it**: Create or modify code and engineering artifacts to implement the specified behavior.
- **test-it**: Design and run tests that produce reproducible evidence against requirements and contracts.
- **review**: Evaluate artifacts against requirements and standards to identify defects, risks, and inconsistencies.
- **debug**: Reproduce unexpected behavior, identify its root cause, and propose a fix.
- **document**: Create and maintain documentation for system behavior, engineering decisions, and procedures.
- **deliver**: Verify release readiness and carry out authorized packaging, submission, release, or deployment.
