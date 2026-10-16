export function parseTags(input) {
  if (input.length === 0) {
    throw new Error("No tags");
  }
  return input.split(",").map((tag) => tag.trim()).filter(Boolean);
}
