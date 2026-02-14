import { getIntroOnlyHtml } from "@/components/sections/IntroAndKeyGuides";
import { getNavAndHeroHtml } from "@/components/sections/NavAndHero";
import { TildaHtmlRenderer } from "@/components/TildaHtmlRenderer";

/** Always read part files at request time so content updates appear without rebuild. */
export const dynamic = "force-dynamic";

/** Patrice-hero page: hero + intro (no menu). Wrapper class used to hide menu via CSS. */
export default function PatriceHeroPage() {
  const html = getNavAndHeroHtml() + getIntroOnlyHtml();
  return (
    <div className="patrice-hero-page">
      <TildaHtmlRenderer html={html} />
    </div>
  );
}
