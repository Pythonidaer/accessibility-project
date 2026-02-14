import { getHeadAndBodyStartInner } from "@/components/sections/parts";
import { getKeyGuidesHtml } from "@/components/sections/IntroAndKeyGuides";
import { getResourcesAndRestHtmlTrimmed } from "@/components/sections/ResourcesAndRest";
import { getWcagSectionHtml } from "@/components/sections/WcagSection";
import { AccessibilityContent } from "./AccessibilityContent";

/** Always read part files at request time so content updates appear without rebuild. */
export const dynamic = "force-dynamic";

/** Main accessibility page: starts at Key guides (nav + hero + intro live on /accessibility/sections/patrice-hero). */
export default function AccessibilityPage() {
  const innerHtml =
    getHeadAndBodyStartInner() +
    getKeyGuidesHtml() +
    getWcagSectionHtml() +
    getResourcesAndRestHtmlTrimmed();

  return <AccessibilityContent html={innerHtml} />;
}
