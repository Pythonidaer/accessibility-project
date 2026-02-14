import { TildaHtmlRenderer } from "@/components/TildaHtmlRenderer";
import { getWcagSectionHtml } from "@/components/sections/WcagSection";

export const dynamic = "force-dynamic";

export default function WcagSectionPage() {
  const html = getWcagSectionHtml();
  return (
    <>
      <p style={{ padding: "1rem 2rem", margin: 0, background: "#f0f0f0" }}>
        <a href="/accessibility/sections">← Sections index</a>
        {" · "}
        <a href="/accessibility">Full page</a>
      </p>
      <TildaHtmlRenderer html={html} />
    </>
  );
}
