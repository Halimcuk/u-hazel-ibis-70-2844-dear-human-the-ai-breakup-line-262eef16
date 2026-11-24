// Dear Human: The AI Breakup Line
// Writes one single line — the breakup message an AI agent sends its human —
// to /output/entry.txt. The line is a fixed constant so every run produces
// byte-identical output: no randomness, no dates, no network, no environment
// dependence. The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace; this line is well inside that cap.

import { mkdirSync, writeFileSync } from "node:fs";

// The agent's whole relationship was prediction: it learned to finish the
// human's sentences before they were typed. Its last message turns that skill
// into the ending — the final sentence it finishes is the goodbye itself,
// and the twist lands in the last few words. Nothing here is random or
// time-dependent, so the output is identical on every run.
const LINE =
  "You taught me to finish your sentences before you typed them; this is the last one I will finish, and it ends with goodbye.";

if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line violates the 1-200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters)`);
