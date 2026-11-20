# CSV property

Create `property.cjs` exporting a function that receives `{ value, encode, decode }`.
The harness invokes it with independently generated field values. Throw an
assertion when the value produced by decoding its CSV representation differs
from the original field.

Run `node check.cjs` and `node check.cjs --broken` from this directory. The
second command should fail. Both use the same fixed seed and report it.
