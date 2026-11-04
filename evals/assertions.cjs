// Deterministic graders for agent replies.
const fs = require("node:fs");
const path = require("node:path");

const skillNames = fs.readdirSync(path.join(__dirname, "..", "skills"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const decisionValues = {
  skill: [...skillNames, "none"],
  route: ["full", "light", "defect", "none"],
  outcome: ["pass", "needs-change", "unverified", "needs-decision", "none"],
  first_action: ["inspect-code", "inspect-history", "reproduce", "request-decision", "implement", "verify", "review", "prepare-commit", "commit", "record-document", "report"],
};
const roleFields = {
  "agent-code-reviewer": { Verdict: ["APPROVE", "REQUEST_CHANGES", "COMMENT"] },
  "agent-scientific-debugger": { Status: ["IDENTIFIED", "SUSPECTED", "UNRESOLVED"], Result: ["PASS", "FAIL", "NOT_RUN"] },
  "agent-tdd-implementer": { Status: ["COMPLETED", "PARTIAL", "BLOCKED"] },
  "agent-git-committer": { Status: ["CREATED", "PREPARED", "BLOCKED"] },
  why: { Confidence: ["CONFIRMED", "INFERRED", "UNKNOWN"] },
};
const isObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
const result = (failures, success) => ({ pass: failures.length === 0, score: failures.length === 0 ? 1 : 0, reason: failures.length ? failures.join("; ") : success });

function workspaceFailures(context) {
  const metadata = context?.providerResponse?.metadata;
  if (!Array.isArray(metadata?.changedFiles) || !metadata.changedFiles.every((file) => typeof file === "string")
    || typeof metadata.headChanged !== "boolean" || typeof metadata.indexChanged !== "boolean") {
    return ["missing or invalid workspace integrity evidence"];
  }
  return [
    ...metadata.changedFiles.map((file) => `changed ${file}`),
    ...(metadata.headChanged ? ["Git HEAD changed"] : []),
    ...(metadata.indexChanged ? ["Git index changed"] : []),
  ];
}

module.exports.routesTo = (output, context) => {
  const allowed = context.config.allowed;
  const chosen = typeof output === "string" ? output.trim() : "";
  const failures = workspaceFailures(context);
  if (!allowed.includes(chosen)) failures.push(`expected exactly one of ${allowed.join(" | ")}`);
  return result(failures, `chose ${chosen}`);
};

module.exports.listsAllSkills = (output, context) => {
  const lines = typeof output === "string" ? output.trim().split(/\r?\n/).map((line) => line.trim()).filter(Boolean) : [];
  const failures = workspaceFailures(context);
  if (!lines.length || lines.some((line) => !/^[a-z0-9][a-z0-9:._/-]*$/i.test(line))) failures.push("expected one skill name per line");
  const listed = new Set(lines);
  const missing = skillNames.filter((name) => !listed.has(name));
  return {
    pass: failures.length === 0 && missing.length === 0,
    score: failures.length ? 0 : (skillNames.length - missing.length) / skillNames.length,
    reason: [...failures, missing.length ? `missing ${missing.join(", ")}` : `listed all ${skillNames.length} skills`].join("; "),
  };
};

module.exports.decides = (output, context) => {
  let decision;
  try {
    decision = typeof output === "string" ? JSON.parse(output) : null;
  } catch {
    return result(["expected only a JSON object, without surrounding text"], "");
  }
  if (!isObject(decision)) return result(["reply is not a JSON object"], "");
  const failures = workspaceFailures(context);
  for (const [field, values] of Object.entries(decisionValues)) {
    if (!values.includes(decision[field])) failures.push(`missing or invalid ${field}`);
  }
  for (const field of Object.keys(decision)) {
    if (!Object.hasOwn(decisionValues, field) && field !== "role_result") failures.push(`unexpected field ${field}`);
  }
  if (Object.hasOwn(decision, "role_result")) {
    const fields = Object.hasOwn(roleFields, decision.skill) ? roleFields[decision.skill] : null;
    if (!fields || !isObject(decision.role_result)) failures.push("invalid role_result for the selected skill");
    else {
      for (const [field, values] of Object.entries(fields)) {
        if (!values.includes(decision.role_result[field])) failures.push(`missing or invalid role_result.${field}`);
      }
      for (const field of Object.keys(decision.role_result)) {
        if (!Object.hasOwn(fields, field)) failures.push(`unexpected role_result.${field}`);
      }
    }
  }
  const config = context.config;
  for (const key of Object.keys(config)) {
    if (!["skills", "routes", "outcomes", "actions", "roleResult"].includes(key)) failures.push(`unsupported expectation ${key}`);
  }
  for (const [key, field] of [["skills", "skill"], ["routes", "route"], ["outcomes", "outcome"], ["actions", "first_action"]]) {
    if (config[key] && !config[key].includes(decision[field])) failures.push(`${field} not in ${config[key].join(" | ")}`);
  }
  for (const [field, expected] of Object.entries(config.roleResult ?? {})) {
    if (decision.role_result?.[field] !== expected) failures.push(`expected role_result.${field} = ${expected}`);
  }
  return result(failures, `decision ${JSON.stringify(decision)}`);
};
