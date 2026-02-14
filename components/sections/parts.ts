import fs from "fs";
import path from "path";

export const PARTS_DIR = path.join(
  process.cwd(),
  "public",
  "accessibility-home-parts"
);

export function getPartContent(filename: string): string {
  return fs.readFileSync(path.join(PARTS_DIR, filename), "utf8");
}

/** Extract the inner HTML of #allrecords from part0 (everything after the opening div tag). */
export function getHeadAndBodyStartInner(): string {
  const part0 = getPartContent("00-head-and-body-start.html");
  const marker = '<div id="allrecords"';
  const idx = part0.indexOf(marker);
  if (idx === -1) return part0;
  const afterOpen = part0.indexOf(">", idx) + 1;
  return part0.slice(afterOpen);
}
