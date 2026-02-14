"use client";

import { TildaHtmlRenderer } from "@/components/TildaHtmlRenderer";

export function AccessibilityContent({ html }: { html: string }) {
  return <TildaHtmlRenderer html={html} />;
}
