+++
title = "Agent: Git committer"
description = "A subagent role that stages verified changes into single-purpose commits with messages that explain why."
permalink = "/skills/agent-git-committer/index.html"
section = "roles"
order = 5
source = "skills/agent-git-committer/SKILL.md"
+++

## When to use it

Delegate commit preparation to this role at the end of a task, once the changes are verified and reviewed. To commit in the current session, use [atomic commit](/skills/workflow-atomic-commit/) directly.

## What to give the worker

Give it the verified working tree, the files that belong to the delivery, and the reason for the change. The reason matters: it becomes the body of the commit message.

## What it does

1. Runs `git status` and `git diff` to see the whole working tree.
2. Stages the intended files one by one with `git add <file>`.
3. Checks the staged snapshot with `git diff --cached` for secrets and leftover debug statements.
4. Writes a Conventional Commit message whose body explains why the change was made and what tradeoffs it carries.

## What you get

A summary with the committed files, the commit hash and message, and proof that the tests passed at the time of the commit.

## Boundaries

Each commit does one thing: functional changes, reformatting, and unrelated tweaks go into separate commits. Every commit must run and pass on its own, so it never commits a broken intermediate state. It avoids `git add .` when untracked scratch files are present, and it never stages junior mode's `.superjunior/` task record.

Definition: [agent.toml](/source/skills/agent-git-committer/agent.toml).
