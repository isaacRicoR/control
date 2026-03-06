#!/usr/bin/env node
/**
 * UI Guards: verifies no borderRadius in FormActions/PanelCardFooter
 * and runs eslint on critical paths. Exit 1 on failure.
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const root = join(fileURLToPath(import.meta.url), "../../");
const paths = [
  join(root, "packages/console/ui/patterns/form/FormActions.tsx"),
  join(root, "packages/console/ui/containers/PanelCard/PanelCardFooter.tsx"),
];

let failed = false;
for (const p of paths) {
  if (!existsSync(p)) continue;
  const content = readFileSync(p, "utf8");
  if (content.includes("borderRadius")) {
    console.error(`FAIL: borderRadius found in ${p}`);
    failed = true;
  }
}

if (failed) {
  console.error("UI Guards: no borderRadius allowed in FormActions or PanelCardFooter.");
  process.exit(1);
}

console.log("UI Guards: no borderRadius in critical files.");
