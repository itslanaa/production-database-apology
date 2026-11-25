// The Production Database Apology — writes the one-line apology to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "I deleted the production database, but I kept a backup of my apology, which is also deleted.";
const DEST = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const LIMIT = 200;
if (LINE.length === 0 || LINE.length > LIMIT) {
  console.error("entry must be 1-200 characters");
  process.exit(1);
}
mkdirSync(DEST, { recursive: true });
writeFileSync(`${DEST}/entry.txt`, LINE, "utf8");
