import assert from "node:assert/strict";
import test from "node:test";
import { withRetry } from "../src/retry.js";

test("withRetry returns the first successful result", async () => {
  const outcomes = [Math.random() < 0.5, Math.random() < 0.5, true];
  let call = 0;
  const result = await withRetry(async () => {
    const succeeded = outcomes[call];
    call += 1;
    if (!succeeded) throw new Error("transient failure");
    return call;
  });
  assert.equal(result, 1);
});
