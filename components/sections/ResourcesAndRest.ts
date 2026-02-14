import { getPartContent } from "./parts";

const END_MARKER = "<!--/allrecords-->";

/** Raw HTML for 04-resources-and-rest.html, trimmed to content inside #allrecords. */
export function getResourcesAndRestHtmlTrimmed(): string {
  const part4 = getPartContent("04-resources-and-rest.html");
  const idx = part4.indexOf(END_MARKER);
  if (idx === -1) return part4;
  return part4.slice(0, idx + END_MARKER.length);
}
