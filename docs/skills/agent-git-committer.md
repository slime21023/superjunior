+++
title = "Commit preparation"
description = "Inspect and selectively stage authorized changes, verify the staged snapshot, and create coherent commits with messages explaining why."
permalink = "/skills/agent-git-committer/index.html"
section = "roles"
source = "skills/agent-git-committer/SKILL.md"
+++

Inspect and selectively stage authorized changes, verify the staged snapshot, and create coherent commits with messages explaining why.

The skill contains its complete operating principles. Apply it directly, or delegate a bounded assignment when authorized; the owner verifies and integrates the result.

It inspects staged and unstaged changes, preserves unrelated work, and checks the snapshot that will be committed. Existing authorization determines whether it creates commits or only prepares messages.

The output separates the commit message from the execution result: `CREATED`, `PREPARED`, or `BLOCKED`, actual commit SHAs, verification evidence, and remaining changes or failures. A prepared message does not prove that a commit exists. If one commit succeeds and a later one fails, both the created commit and the remaining work are reported.
