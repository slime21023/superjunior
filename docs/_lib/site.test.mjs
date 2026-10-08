import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = fileURLToPath(new URL("../../", import.meta.url));
const output = join(root, "_site");

function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

const pages = files(output).filter((path) => extname(path) === ".html");
const html = new Map(pages.map((path) => [path, readFileSync(path, "utf8")]));

test("every checked-in skill has a hand-authored reference page", () => {
  const expected = files(join(root, "skills"))
    .filter((path) => path.endsWith(sep + "SKILL.md"))
    .map((path) => relative(root, path).split(sep).join("/")).sort();
  const documented = [...html.values()].flatMap((page) =>
    [...page.matchAll(/data-source="([^"]+)"/g)].map((match) => match[1])
  ).sort();
  assert.deepEqual(documented, expected, "Missing, duplicated, or unknown skill reference");
});

test("all internal page, fragment, and asset links resolve", () => {
  for (const [path, page] of html) {
    const pathname = "/" + relative(output, path).split(sep).join("/");
    const base = new URL(pathname, "https://janstack.invalid");
    for (const match of page.matchAll(/\b(?:href|src)=(["'])(.*?)\1/g)) {
      const value = match[2].replaceAll("&amp;", "&");
      const url = new URL(value, base);
      if (url.origin !== base.origin) continue;
      let target = resolve(output, "." + decodeURIComponent(url.pathname));
      const within = relative(output, target);
      assert.ok(!within.startsWith("..") && !isAbsolute(within), value);
      assert.ok(existsSync(target), `${relative(output, path)} → ${value}`);
      if (statSync(target).isDirectory()) target = join(target, "index.html");
      assert.ok(existsSync(target), `Missing page: ${value}`);
      if (url.hash && extname(target) === ".html") {
        const targetHtml = html.get(target) ?? readFileSync(target, "utf8");
        const identifiers = [...targetHtml.matchAll(/\b(?:id|name)=(["'])(.*?)\1/g)]
          .map((item) => item[2]);
        assert.ok(identifiers.includes(decodeURIComponent(url.hash.slice(1))),
          `Missing fragment: ${relative(output, path)} → ${value}`);
      }
    }
  }
});

test("downloadable skill definitions preserve the checked-in bytes", () => {
  for (const path of files(join(root, "skills"))) {
    const destination = join(output, "source", relative(root, path));
    assert.ok(existsSync(destination), destination);
    assert.deepEqual(readFileSync(destination), readFileSync(path), destination);
  }
});
