// Z for Zombie Day — one letter for your day.
//
// Why Z, and why "zombie":
//  - Vivid and specific: a whole day with zero sleep, shuffling
//    through every hour like the living dead — one sharp picture,
//    not a vague mood.
//  - Funny and surprising: nobody expects a horror-movie monster
//    as the honest report of an ordinary sleepless day, yet anyone
//    who has had one recognises it at once.
//  - True: it is a real day, not a performance — tired, slow,
//    half-awake, still moving.
//  - The letter fits its word: Z is the initial of "zombie" and
//    of "zero sleep", and its jagged shape even looks like the
//    zig-zag walk of someone running on no sleep at all.
// The entry itself is exactly one character, "Z", with no newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, "Z", "utf8");
