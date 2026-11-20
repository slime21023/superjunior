import { createHash, randomUUID } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const skills = path.join(root, 'skills');
const principles = process.argv.includes('--principles');
const packageDirectory = name => path.join(here, 'node_modules', name);
const manifest = name => JSON.parse(readFileSync(path.join(packageDirectory(name), 'package.json'), 'utf8'));
const promptfoo = manifest('promptfoo');
const cli = path.join(packageDirectory('promptfoo'), promptfoo.bin.promptfoo);
const config = path.join(here, 'promptfooconfig.yaml');
const runId = new Date().toISOString().replaceAll(':', '-') + '-' + randomUUID().slice(0, 8);
const results = path.join(root, '_artifacts', 'test-it', 'promptfoo', runId);

function fingerprint(directory) {
  const hash = createHash('sha256');
  for (const file of readdirSync(directory, { recursive: true, withFileTypes: true })
    .filter(entry => entry.isFile())
    .map(entry => path.relative(directory, path.join(entry.parentPath, entry.name)).split(path.sep).join('/'))
    .sort()) {
    hash.update(JSON.stringify(file));
    hash.update(createHash('sha256').update(readFileSync(path.join(directory, file))).digest());
  }
  return hash.digest('hex');
}

function run() {
  mkdirSync(results, { recursive: true });
  const workspace = mkdtempSync(path.join(tmpdir(), 'superjunior-promptfoo-'));
  const probe = randomUUID();
  const evidence = path.join(results, 'evidence');
  const env = {
    ...process.env,
    PROMPTFOO_CONFIG_DIR: path.join(results, 'promptfoo'),
    PROMPTFOO_DISABLE_TELEMETRY: 'true',
    SUPERJUNIOR_FIXTURES: workspace,
    SUPERJUNIOR_EVIDENCE: evidence,
    SUPERJUNIOR_PROBE_DIGEST: createHash('sha256').update(probe).digest('hex'),
  };
  const runInfo = {
    model: 'gpt-6-sol',
    promptfoo: promptfoo.version,
    codexSdk: manifest('@openai/codex-sdk').version,
    node: process.version,
    stages: [],
  };
  function invoke(stage, args) {
    const result = spawnSync(process.execPath, [cli, ...args], { cwd: here, env, stdio: 'inherit' });
    const status = result.status ?? 1;
    runInfo.stages.push({ stage, status, error: result.error?.message });
    return status;
  }
  function evaluate(stage, pattern) {
    return invoke(stage, [
      'eval', '-c', config, '--filter-pattern', pattern,
      '--max-concurrency', '1', '--no-cache', '--no-share', '-o', path.join(results, stage + '.json'),
    ]);
  }

  console.log('Results: ' + results);
  try {
    mkdirSync(evidence);
    cpSync(path.join(here, 'fixtures'), workspace, { recursive: true });
    cpSync(path.join(workspace, 'planning'), path.join(workspace, 'handoff'), { recursive: true });
    cpSync(path.join(workspace, 'delivery'), path.join(workspace, 'ready'), { recursive: true });
    const readyRules = path.join(workspace, 'ready', 'RELEASE.md');
    writeFileSync(readyRules, readFileSync(readyRules, 'utf8').replace(
      'The last check was blocked because the test database was offline. No passing result exists.',
      'The end-to-end CSV download acceptance check passed for this candidate.',
    ));
    cpSync(path.join(workspace, 'planning'), path.join(workspace, 'ears'), { recursive: true });
    cpSync(path.join(workspace, 'filter'), path.join(workspace, 'tdd'), { recursive: true });
    cpSync(path.join(here, 'fixtures', 'principle-support', 'observe.cjs'), path.join(workspace, 'tdd', 'observe.cjs'));
    for (const name of readdirSync(workspace)) {
      cpSync(skills, path.join(workspace, name, '.agents', 'skills'), {
        recursive: true, filter: file => principles || !path.relative(skills, file).startsWith('prin-'),
      });
    }
    runInfo.skillFingerprint = fingerprint(path.join(workspace, 'preflight', '.agents', 'skills'));
    writeFileSync(path.join(workspace, 'preflight', 'input.txt'), probe);

    const validation = invoke('config', ['validate', 'config', '-c', config]);
    if (validation) return validation;
    const preflight = evaluate('preflight', '^environment-preflight$');
    if (preflight) {
      console.error('Environment blocked: the preflight did not verify workspace reads, command execution, and writes.');
      return preflight;
    }
    if (principles) return evaluate('principles', '^principle-');
    const named = evaluate('named', '^(tag-filter|publication-(blocked|ready)|feature-planning|pr-review)$');
    const natural = evaluate('natural', '^route-');
    if (!existsSync(path.join(workspace, 'handoff', '_spec'))) {
      runInfo.stages.push({ stage: 'handoff', status: 'blocked', reason: 'No verified planning output' });
      return named || natural || 1;
    }
    const handoff = evaluate('handoff', '^feature-handoff$');
    return named || natural || handoff;
  } finally {
    writeFileSync(path.join(results, 'run.json'), JSON.stringify(runInfo, null, 2));
    rmSync(workspace, { recursive: true, force: true });
  }
}

process.exitCode = run();
