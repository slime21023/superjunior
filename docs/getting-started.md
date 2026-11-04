+++
title = "Complete your first task"
description = "Install the skills, provide a bounded request, and check what the agent delivers."
section = "start"
order = 1
permalink = "/getting-started/index.html"
+++

## Install the skills

Choose a target project and copy every directory from this repository's `skills/` into that project's skill directory. Keep the skill folders side by side; several skills refer to their neighbors.

Use the locations in [Host integration](/host-integration/#install-the-skills). You do not need to build the handbook to install the skills.

Start a session in the target project and ask:

```text
List the SuperJunior skills you can discover.
Do not edit files or start a task.
```

Confirm that the list includes `junior-mode`, `senior-mode`, and the roles you intend to use. If discovery fails, check the directory layout or explicitly ask the agent to read the installed `SKILL.md`; the host guide has [troubleshooting steps](/host-integration/#if-a-skill-is-not-found).

## Give the agent a checkable request

A useful request states the desired behavior, constraints, evidence needed, and delivery. A small task can express all four in a few sentences.

```text
Use junior-mode to fix the saved filter.
With no selected tags, it must show all items.
Keep the behavior for selected tags unchanged.
Reproduce the failure and check the related filter paths.
Leave the verified changes in my working tree without committing.
```

Choose [senior mode](/skills/senior-mode/) instead when you need an explanation or a design decision. Choose an [individual role](/subagents/) for a bounded task such as reviewing an existing diff.

Working-tree changes and local commits are different deliveries. Name the one you want; ask separately for any remote action such as opening a pull request or publishing.

## Read the outcome

For a code-change task, junior mode reports what changed, the evidence, remaining limitations, and whether the requested delivery is complete. Its [workflow outcomes](/skills/junior-mode/#read-the-workflow-outcome) distinguish completed work, work needing changes, missing verification, and decisions that require your input.

Other skills have their own result fields. A direct review returns a verdict and findings. A diagnosis includes confidence and reproduction evidence. Senior mode separates facts, options, confirmed decisions, and open questions. Use the relevant skill page to interpret its result.

Check the evidence behind a label. A completed review does not show that tests ran; a prepared commit message does not show that a commit exists. If a required check was unavailable, the response should identify that limitation.

## Continue, pause, or cancel

In junior mode, a correction or status question belongs to the active task. To introduce a different task or change the delivery, say so explicitly.

Junior mode keeps a local task record at `.superjunior/task.md`. Pausing keeps it for resumption; cancellation leaves completed working-tree changes and removes the record. The record is also removed after delivery and is never part of the commit.

To resume, ask the agent to reconcile the record with the current working tree. It must repeat verification made stale by changed inputs. [Junior mode](/skills/junior-mode/#continue-an-existing-task) explains the lifecycle; persistence across sessions also depends on the host.

## Try a second task

Use [Examples](/examples/) for review, debugging, commit preparation, explanation, and architecture requests. Each example names the result to expect and links to the skill that defines it.
