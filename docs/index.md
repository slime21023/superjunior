+++
title = "Choose the work you need"
navTitle = "Overview"
description = "Start with a task, choose a mode or role, and know what evidence to expect."
section = "start"
order = 0
permalink = "/index.html"
+++

SuperJunior gives coding agents a set of instructions for implementation, investigation, and design. Choose a complete workflow when you want a delivered result, or a single skill when you need one part of the work.

## Choose where to start

| What you need | Use | What comes back |
| :--- | :--- | :--- |
| A feature, bug fix, or refactor | [Junior mode](/skills/junior-mode/) | Changes, verification evidence, review, and the delivery you requested |
| An explanation or architecture decision | [Senior mode](/skills/senior-mode/) | An evidence-based explanation, options, confirmed decisions, or an implementation handoff |
| One engineering step | [Agent roles](/subagents/) | A scope, implementation, diagnosis, review, or commit result |
| A focused design check | [Engineering principles](/skills/engineering-principles/) | Findings tied to concrete behavior and risks |

For your first task, follow [Getting started](/getting-started/). If the skills are already installed, choose an [example request](/examples/) and replace its behavior, paths, and delivery requirements.

## How a code change moves forward

<ol class="cycle" aria-label="Typical implementation workflow">
<li><small>01</small><a href="/skills/agent-scope-aligner/">Scope</a><p>Identify the problem, affected callers, and observable success.</p></li>
<li><small>02</small><a href="/skills/agent-tdd-implementer/">Implement</a><p>Make the smallest change and verify the affected behavior.</p></li>
<li><small>03</small><a href="/skills/agent-code-reviewer/">Review</a><p>Check the change against requirements and concrete risks.</p></li>
<li><small>04</small><a href="/skills/agent-git-committer/">Deliver</a><p>Create verified local commits when that is the requested delivery.</p></li>
</ol>

[Junior mode](/skills/junior-mode/) chooses the route. Defects begin with reproduction and diagnosis; changes without runtime impact can use a shorter route. Decisions that change the design go to senior mode before implementation continues.

## Understanding before implementation

Ask [how-works](/skills/how-works/) about current execution, [why](/skills/why/) about historical rationale, or [architecture-discuss](/skills/architecture-discuss/) about a choice you have not made. Senior mode selects the relevant analysis skills when the question spans several of these.

An architecture discussion produces proposals and evidence. A documentation request records only the decisions you have confirmed. When you are ready to build, hand the confirmed scope and remaining questions to junior mode.

## What a skill supplies

Skills guide the agent's decisions. Your host supplies file access, command execution, persistence, and any subagent support. Roles run in the current session by default; delegation needs the host's support and an authorized assignment.

The [host guide](/host-integration/) explains installation and these boundaries. The [maintenance guide](/maintenance/) is for contributors changing the skills or this handbook.
