import type { Metadata } from "next";
import Script from "next/script";
import { BodyClass } from "./BodyClass";
import { TildaAssets } from "./TildaAssets";

export const metadata: Metadata = {
  title: "Accessibility — Digital accessibility resources and documentation",
  description:
    "Resources for digital accessibility: Subject Matter Expert guidance, WCAG, maintaining standards, and inclusive design.",
};

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="t-body" style={{ margin: 0 }}>
      <BodyClass />
      <TildaAssets />
      {/* Load Tilda core first so inline scripts can call t_onReady / t396_init */}
      <Script src="/pagedemo-assets/js/tilda-fallback-1.0.min.js" strategy="beforeInteractive" />
      <Script src="/pagedemo-assets/js/jquery-1.10.2.min.js" strategy="beforeInteractive" />
      <Script src="/pagedemo-assets/js/tilda-scripts-3.0.min.js" strategy="beforeInteractive" />
      <Script src="/pagedemo-assets/js/tilda-blocks-2.8.js" strategy="beforeInteractive" />
      <Script src="/pagedemo-assets/js/tilda-zero-1.0.min.js" strategy="beforeInteractive" />
      {children}
    </div>
  );
}
