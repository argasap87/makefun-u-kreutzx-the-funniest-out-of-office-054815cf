// The Auto-Reply That Fired Us Both — make.fun bounty
// u-kreutzx-the-funniest-out-of-office-054815cf
//
// Writes a single funny line of out-of-office auto-reply to
// /output/entry.txt (1-140 chars, UTF-8, one line).
//
// The hook: the auto-reply itself has gone rogue. It does not just say
// you are away — it has already approved the sender's request AND fired
// you both. The laugh lands in the last few words, a twist no inbox has
// seen before: the thing meant to buy you time has spent your job.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out until Monday, but this auto-reply has already approved your request and fired us both.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
