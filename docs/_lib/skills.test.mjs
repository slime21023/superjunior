import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { basename, dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import toml from "@iarna/toml";
import yaml from "js-yaml";

const root = fileURLToPath(new URL("../../", import.meta.url));
const skillsRoot = join(root, "skills");
const skillDirs = readdirSync(skillsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => join(skillsRoot, entry.name));
const files = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? files(path) : [path];
});
const read = (path) => readFileSync(path, "utf8").replace(/\r\n/g, "\n");
const label = (path) => relative(root, path).split(sep).join("/");
const definitionFiles = files(skillsRoot).filter((path) => /\.(md|toml)$/.test(path));
const specKeys = new Set(["name", "description", "license", "compatibility", "metadata", "allowed-tools"]);

test("skill definitions use Agent Skills front matter", () => {
  for (const directory of skillDirs) {
    const path = join(directory, "SKILL.md");
    assert.ok(existsSync(path), `Missing ${label(path)}`);
    const block = read(path).match(/^---\n([\s\S]*?)\n---\n/);
    assert.ok(block, `${label(path)}: missing YAML front matter`);
    const data = yaml.load(block[1]);
    for (const key of Object.keys(data)) assert.ok(specKeys.has(key), `${label(path)}: unsupported key ${key}`);
    assert.equal(data.name, basename(directory), `${label(path)}: name must match its directory`);
    assert.match(data.name, /^[a-z0-9]+(-[a-z0-9]+)*$/, label(path));
    assert.ok(data.name.length <= 64, label(path));
    assert.equal(typeof data.description, "string", label(path));
    assert.ok(data.description.length > 0 && data.description.length <= 1024, `${label(path)}: description length`);
    for (const [key, value] of Object.entries(data.metadata ?? {})) {
      assert.equal(typeof value, "string", `${label(path)}: metadata.${key} must be a string`);
    }
  }
});

test("agent role definitions parse with their required fields", () => {
  for (const directory of skillDirs) {
    const path = join(directory, "agent.toml");
    if (!existsSync(path)) continue;
    const data = toml.parse(read(path));
    assert.equal(data.name, basename(directory), label(path));
    assert.equal(typeof data.description, "string", label(path));
    assert.equal(typeof data.readonly, "boolean", label(path));
    assert.equal(typeof data.instructions, "string", label(path));
  }
});

test("references inside skill definitions resolve", () => {
  for (const directory of skillDirs) {
    for (const path of files(directory).filter((file) => /\.(md|toml)$/.test(file))) {
      const text = read(path).replace(/```[\s\S]*?```/g, "");
      const targets = [
        ...[...text.matchAll(/\]\(([^)\s]+)\)/g)]
          .map((match) => match[1])
          .filter((link) => !/^[a-z]+:/i.test(link) && !link.startsWith("#") && !/[[{<]/.test(link))
          .map((link) => [link, resolve(dirname(path), link.split("#")[0])]),
        ...[...text.matchAll(/`(references\/[\w.-]+)`/g)].map((match) => [match[1], resolve(directory, match[1])]),
        ...[...text.matchAll(/(?<![\w./])\.\.\/[\w-]+\/(?:SKILL\.md|agent\.toml)/g)]
          .map((match) => [match[0], resolve(dirname(path), match[0])]),
      ];
      for (const [reference, target] of targets) {
        assert.ok(existsSync(target), `${label(path)} → ${reference}`);
      }
    }
  }
});

test("XML block tags stay bare and at most two levels deep", () => {
  const problems = [];
  for (const path of definitionFiles) {
    let fence = null;
    const stack = [];
    read(path).split("\n").forEach((line, index) => {
      const where = `${label(path)}:${index + 1}`;
      const opener = line.trim().match(/^```(\w*)/);
      if (opener) { fence = fence === null ? opener[1] : null; return; }
      if (fence !== null && fence !== "xml") return;
      const text = line.replace(/`[^`]*`/g, "");
      if (/<[a-z][\w-]*\s[^>]*>/.test(text) || /<[a-z][\w-]*\/>/.test(text)) problems.push(`${where} attribute or self-closing tag`);
      if (text.includes("<!--")) problems.push(`${where} XML comment`);
      for (const tag of text.matchAll(/<(\/?)([a-z][\w-]*)>/g)) {
        if (tag[1]) {
          if (stack.at(-1) === tag[2]) stack.pop();
          else problems.push(`${where} unbalanced </${tag[2]}>`);
        } else {
          stack.push(tag[2]);
          if (stack.length > 2) problems.push(`${where} nesting depth ${stack.length}`);
        }
      }
    });
    if (stack.length) problems.push(`${label(path)} unclosed ${stack.join(" > ")}`);
  }
  assert.deepEqual(problems, []);
});
