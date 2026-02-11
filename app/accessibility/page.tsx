import fs from "fs";
import path from "path";
import { AccessibilityContent } from "./AccessibilityContent";

/** Always read part files at request time so content updates appear without rebuild. */
export const dynamic = "force-dynamic";

const PARTS_DIR = path.join(
  process.cwd(),
  "public",
  "accessibility-home-parts"
);

const PART_FILES = [
  "00-head-and-body-start.html",
  "01-nav-and-hero.html",
  "02-intro-and-key-guides.html",
  "03-wcag-section.html",
  "04-resources-and-rest.html",
];

function getPartContent(filename: string): string {
  const filepath = path.join(PARTS_DIR, filename);
  return fs.readFileSync(filepath, "utf8");
}

/** Extract the inner HTML of #allrecords from part0 (everything after the opening div tag). */
function extractAllrecordsInnerFromPart0(part0: string): string {
  const marker = '<div id="allrecords"';
  const idx = part0.indexOf(marker);
  if (idx === -1) return part0;
  const afterOpen = part0.indexOf(">", idx) + 1;
  return part0.slice(afterOpen);
}

/** Trim part4 to only content inside #allrecords (up to and including <!--/allrecords-->). */
function trimPart4ToAllrecordsEnd(part4: string): string {
  const endMarker = "<!--/allrecords-->";
  const idx = part4.indexOf(endMarker);
  if (idx === -1) return part4;
  return part4.slice(0, idx + endMarker.length);
}

export default function AccessibilityPage() {
  const part0 = getPartContent(PART_FILES[0]);
  const part1 = getPartContent(PART_FILES[1]);
  const part2 = getPartContent(PART_FILES[2]);
  const part3 = getPartContent(PART_FILES[3]);
  const part4 = getPartContent(PART_FILES[4]);

  const innerHtml =
    extractAllrecordsInnerFromPart0(part0) +
    part1 +
    part2 +
    part3 +
    trimPart4ToAllrecordsEnd(part4);

  return <AccessibilityContent html={innerHtml} />;
}
