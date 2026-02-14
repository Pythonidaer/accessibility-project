import { TildaHtmlRenderer } from "@/components/TildaHtmlRenderer";
import { getNavAndHeroHtml } from "@/components/sections/NavAndHero";

export const dynamic = "force-dynamic";

export default function NavAndHeroSectionPage() {
  const html = getNavAndHeroHtml();
  return (
    <div className="nav-and-hero-section">
      <style>{`
        .nav-and-hero-section [data-elem-id="1555570485788"] {
          visibility: hidden;
        }
        .nav-and-hero-section .tn-atom.t-bgimg {
          visibility: hidden;
        }
      `}</style>
      <p style={{ padding: "1rem 2rem", margin: 0, background: "#f0f0f0" }}>
        <a href="/accessibility/sections">← Sections index</a>
        {" · "}
        <a href="/accessibility">Full page</a>
      </p>
      <TildaHtmlRenderer html={html} />
    </div>
  );
}
