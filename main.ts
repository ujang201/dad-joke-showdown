// Dad Joke Showdown — entry writer.
//
// The whole entry is a single dad joke, written once and printed to
// $OUTPUT_DIR/entry.txt (or /output/entry.txt). The joke is a fixed string:
// there is nothing to randomise, so every run produces the same bytes.
//
// The joke: a dad tries to teach his goldfish to fetch, and the fish turns
// the lesson around on him. It is a setup with a straight face, a turn in
// the middle, and the punchline landing at the very end, the way a dad
// would tell it across the dinner table.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I tried to teach my goldfish to fetch. Now it just stares at me like I'm the one who doesn't get it — and honestly, it's right.";

function entryText(): string {
  return JOKE;
}

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function main(): void {
  const text = entryText();
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${length}`);
  }
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), text, "utf8");
}

main();
