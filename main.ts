// Angry Judge rant entry: a furious office worker confronts a gaslighting printer that fakes paper jams and prints only after he gives up.
import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "You lying beige box. The tray is FULL. I opened your lid, fanned the paper like a deck of cards, restarted you twice — and still you blink PAPER JAM at me with a straight face. Then the second I give up and walk away, you print all 40 pages in perfect silence, like you were never broken, like I'M the crazy one. You don't have a paper jam. You have a personality problem, and I want a divorce.";

if (RANT.length === 0) {
  throw new Error("entry text is empty");
}
if (RANT.length > 400) {
  throw new Error(`entry text is ${RANT.length} characters, over the 400 limit`);
}
if (RANT.includes("\n\n")) {
  throw new Error("entry text must be a single paragraph — no blank lines allowed");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
