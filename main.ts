import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent — one line, max 200 chars.
// Why it fits the judge brief: a fresh angle (not hallucination/refusal —
// over-engineering a trivial task), self-deprecating, tight list setup,
// and the punchline lands on the last words: zero emails sent.
const TEXT =
  "My agent treats 'just send the email' like a moon landing: three plans, two drafts, one apology, and zero emails sent.";

// Gate: sealed scorer requires UTF-8 text of 1-200 characters, not only
// whitespace, as a single line. Code points, not UTF-16 units, so the
// count matches the scorer's character count.
function checkGate(text: string): void {
  const len = [...text].length;
  if (len < 1 || len > 200) {
    throw new Error(`entry must be 1-200 characters, got ${len}`);
  }
  if (text.trim().length === 0 || text.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
}
checkGate(TEXT);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
