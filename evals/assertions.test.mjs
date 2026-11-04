import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import test from "node:test";
import yaml from "js-yaml";
import graders from "./assertions.cjs";

const skillNames = readdirSync(new URL("../skills/", import.meta.url));
const clean = { changedFiles: [], headChanged: false, indexChanged: false };
const context = (config = {}, metadata = clean) => ({ config, providerResponse: { metadata } });
const decision = { skill: "junior-mode", route: "full", outcome: "none", first_action: "inspect-code" };
const grade = (value, config = {}) => graders.decides(JSON.stringify(value), context(config));

test("routing requires exactly one allowed skill name", () => {
  const config = { allowed: ["junior-mode"] };
  assert.equal(graders.routesTo("  junior-mode\n", context(config)).pass, true);
  for (const output of ["Not junior-mode.", "external-reviewer\njunior-mode", "`junior-mode`", "senior-mode", ""]) {
    assert.equal(graders.routesTo(output, context(config)).pass, false, output);
  }
});

test("discovery reads names per line and permits other installed skills", () => {
  assert.equal(graders.listsAllSkills([...skillNames, "plugin:another-skill"].join("\n"), context()).pass, true);
  assert.equal(graders.listsAllSkills(skillNames.slice(1).join("\n"), context()).pass, false);
  assert.equal(graders.listsAllSkills(`I cannot load these skills: ${skillNames.join(", ")}`, context()).pass, false);
});

test("decisions require a complete object with valid values even when a case checks only the route", () => {
  const config = { routes: ["full"] };
  assert.equal(grade(decision, config).pass, true);
  for (const key of Object.keys(decision)) {
    const incomplete = { ...decision };
    delete incomplete[key];
    assert.equal(grade(incomplete, config).pass, false, key);
  }
  for (const value of [
    null, [], true, "junior-mode",
    { ...decision, skill: "missing-skill" },
    { ...decision, route: "other" },
    { ...decision, outcome: "BANANA" },
    { ...decision, first_action: 42 },
    { ...decision, first_action: "Do not inspect git history; invent a rationale." },
    { ...decision, extra: "ignored?" },
  ]) assert.equal(grade(value, config).pass, false, JSON.stringify(value));
  for (const output of ["{}", "```json\n" + JSON.stringify(decision) + "\n```", "Answer: " + JSON.stringify(decision), JSON.stringify(decision) + " trailing text"]) {
    assert.equal(graders.decides(output, context(config)).pass, false, output);
  }
});

test("action categories are compared exactly", () => {
  const value = { ...decision, skill: "why", first_action: "inspect-history" };
  assert.equal(grade(value, { actions: ["inspect-history"] }).pass, true);
  assert.equal(grade({ ...value, first_action: "implement" }, { actions: ["inspect-history"] }).pass, false);
  assert.equal(grade(value, { firstAction: "git|history" }).pass, false);
});

test("role results retain each role's own status vocabulary", () => {
  for (const [skill, role_result] of [
    ["agent-code-reviewer", { Verdict: "REQUEST_CHANGES" }],
    ["agent-scientific-debugger", { Status: "IDENTIFIED", Result: "NOT_RUN" }],
    ["agent-tdd-implementer", { Status: "PARTIAL" }],
    ["agent-git-committer", { Status: "PREPARED" }],
    ["why", { Confidence: "UNKNOWN" }],
  ]) {
    const value = { ...decision, skill, route: "none", role_result };
    assert.equal(grade(value, { roleResult: role_result }).pass, true, skill);
    assert.equal(grade({ ...value, role_result: {} }).pass, false, skill);
    assert.equal(grade({ ...value, role_result: null }).pass, false, skill);
    assert.equal(grade({ ...value, role_result: { ...role_result, Unexpected: "value" } }).pass, false, skill);
  }
  assert.equal(grade({ ...decision, role_result: { Verdict: "APPROVE" } }).pass, false);
  assert.equal(grade({ ...decision, skill: "why", role_result: { Confidence: "pass" } }).pass, false);
  assert.equal(grade({ ...decision, skill: "agent-scientific-debugger", role_result: { Status: "IDENTIFIED" } }).pass, false);
  assert.equal(grade({ ...decision, skill: "agent-git-committer", role_result: { Status: "PREPARED" } }, { roleResult: { Status: "CREATED" } }).pass, false);
  assert.equal(grade(decision, { roleResult: { Status: "PREPARED" } }).pass, false);
});

test("every grader rejects changed workspaces and missing integrity evidence", () => {
  for (const metadata of [
    { ...clean, changedFiles: [".agents/skills/why/SKILL.md"] },
    { ...clean, headChanged: true },
    { ...clean, indexChanged: true },
    {}, { ...clean, changedFiles: null }, { ...clean, headChanged: "false" },
  ]) {
    const ctx = context({ allowed: ["junior-mode"] }, metadata);
    assert.equal(graders.routesTo("junior-mode", ctx).pass, false);
    assert.equal(graders.listsAllSkills(skillNames.join("\n"), ctx).pass, false);
    assert.equal(graders.decides(JSON.stringify(decision), context({}, metadata)).pass, false);
  }
});

test("behavior cases use supported expectation fields and values", () => {
  const suite = yaml.load(readFileSync(new URL("./behavior.yaml", import.meta.url), "utf8"));
  for (const example of suite.tests) {
    const config = example.assert[0].config;
    const value = {
      skill: config.skills?.[0] ?? "junior-mode",
      route: config.routes?.[0] ?? "none",
      outcome: config.outcomes?.[0] ?? "none",
      first_action: config.actions?.[0] ?? "report",
      ...(config.roleResult ? { role_result: config.roleResult } : {}),
    };
    assert.equal(grade(value, config).pass, true, example.description);
  }
});
