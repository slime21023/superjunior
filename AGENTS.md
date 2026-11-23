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

- **discuss**: Refine a vague idea into a focused goal, scope, and direction before requirements or design begin.
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

## Principle Skills

These optional skills supply decision guidance for a task. Use the output conventions of the active core skill.

- **prin-ears**: Apply Easy Approach to Requirements Syntax when writing or reviewing requirements with triggers, states, optional features, or failures.
- **prin-interface-contracts**: Assess or change a boundary whose inputs, outputs, errors, or compatibility matter to callers.
- **prin-architecture-decision-records**: Capture or evaluate a consequential architecture decision with lasting constraints or trade-offs.
- **prin-failure-handling**: Reason about errors, retries, and partial completion in stateful work or external calls.
- **prin-code-readability**: Assess or improve code whose intent, units, responsibilities, or side effects are hard to read.
- **prin-refactoring**: Improve the internal structure of existing code while preserving observable behavior.
- **prin-tdd**: Use test-driven development when a behavior change can be driven by a focused repeatable test.
- **prin-property-based-testing**: Use generated inputs to test a property of parsers, transformations, ordering, or state transitions.
- **prin-conventional-commits**: Draft or review commit messages when the task or repository calls for Conventional Commits.
- **prin-semantic-versioning**: Assess a version increment for a project that declares a public contract and uses Semantic Versioning.
