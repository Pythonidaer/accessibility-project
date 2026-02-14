import { getPartContent } from "./parts";

/** Raw HTML for 03-wcag-section.html (WCAG principles, Section 508, Laws, etc.). */
export function getWcagSectionHtml(): string {
  return getPartContent("03-wcag-section.html");
}
