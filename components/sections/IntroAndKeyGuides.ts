import { getPartContent } from "./parts";

/** Raw HTML for 02-intro-only.html (intro paragraph + spacer; used on patrice-hero). */
export function getIntroOnlyHtml(): string {
  return getPartContent("02-intro-only.html");
}

/** Raw HTML for 02-key-guides.html (Key guides heading + copy-color block; used on main accessibility page). */
export function getKeyGuidesHtml(): string {
  return getPartContent("02-key-guides.html");
}

/** Raw HTML for 02-intro-and-key-guides.html (intro text, Key guides, copy-color block). */
export function getIntroAndKeyGuidesHtml(): string {
  return getPartContent("02-intro-and-key-guides.html");
}
