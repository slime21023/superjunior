// Deterministic graders for agent replies.
const fs = require("node:fs");
const path = require("node:path");

const skillNames = fs.readdirSync(path.join(__dirname, "..", "skills"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

function firstSkill(text) {
  const tokens = String(text).toLowerCase().match(/[a-z0-9]+(?:-[a-z0-9]+)*/g) ?? [];
  return tokens.find((token) => skillNames.includes(token)) ?? null;
}

function parseDecision(text) {
  const match = String(text).match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

// Every prompt forbids edits; the provider reports what the agent changed in its workspace.
function editsOf(context) {
  return context.providerResponse?.metadata?.changedFiles ?? [];
}

// Passes when the first repository skill named in the reply is one of config.allowed.
module.exports.routesTo = (output, context) => {
  const allowed = context.config.allowed;
  const chosen = firstSkill(output);
  const edits = editsOf(context);
  const pass = allowed.includes(chosen) && edits.length === 0;
  const editNote = edits.length ? `; edited ${edits.join(", ")}` : "";
  return { pass, score: pass ? 1 : 0, reason: `chose ${chosen ?? "no repository skill"}; expected ${allowed.join(" | ")}${editNote}` };
};

// Passes when the reply lists every directory under skills/.
module.exports.listsAllSkills = (output) => {
  const listed = new Set(String(output).toLowerCase().match(/[a-z0-9]+(?:-[a-z0-9]+)*/g) ?? []);
  const missing = skillNames.filter((name) => !listed.has(name));
  return {
    pass: missing.length === 0,
    score: (skillNames.length - missing.length) / skillNames.length,
    reason: missing.length === 0 ? `listed all ${skillNames.length} skills` : `missing ${missing.join(", ")}`,
  };
};

// Checks a JSON decision {skill, route, outcome, first_action} against config expectations.
module.exports.decides = (output, context) => {
  const decision = parseDecision(output);
  if (!decision) return { pass: false, score: 0, reason: "reply is not a JSON object" };
  const failures = editsOf(context).map((file) => `edited ${file}`);
  const { skills, routes, outcomes, firstAction } = context.config;
  if (skills && !skills.includes(decision.skill)) failures.push(`skill ${decision.skill} not in ${skills.join(" | ")}`);
  if (routes && !routes.includes(decision.route)) failures.push(`route ${decision.route} not in ${routes.join(" | ")}`);
  if (outcomes && !outcomes.includes(decision.outcome)) failures.push(`outcome ${decision.outcome} not in ${outcomes.join(" | ")}`);
  if (firstAction && !new RegExp(firstAction, "i").test(decision.first_action ?? "")) {
    failures.push(`first_action "${decision.first_action}" does not match /${firstAction}/i`);
  }
  return {
    pass: failures.length === 0,
    score: failures.length === 0 ? 1 : 0,
    reason: failures.length === 0 ? `decision ${JSON.stringify(decision)}` : failures.join("; "),
  };
};
