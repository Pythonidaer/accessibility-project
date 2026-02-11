"use client";

import { useEffect, useRef, useState } from "react";

const ALLRECORDS_ATTRS = {
  id: "allrecords",
  className: "t-records",
  "data-hook": "blocks-collection-content-node",
  "data-tilda-project-id": "546870",
  "data-tilda-page-id": "24295203",
  "data-tilda-page-alias": "color-of-the-year-2022",
  "data-tilda-formskey": "01b578e9af5cf3a9d7e0bb6f6f976b83",
  "data-tilda-lazy": "yes",
  "data-tilda-project-headcode": "yes",
};

/** Runs <script> tags that were inserted via innerHTML (they don't run by default). */
function runScriptsInContainer(container: HTMLElement) {
  const scripts = container.querySelectorAll("script");
  scripts.forEach((oldScript) => {
    const newScript = document.createElement("script");
    if (oldScript.src) {
      newScript.src = oldScript.src;
    } else {
      newScript.textContent = oldScript.textContent ?? "";
    }
    oldScript.parentNode?.appendChild(newScript);
  });
}

/**
 * Render Tilda HTML only after mount to avoid hydration mismatch: Tilda's
 * scripts add classes (e.g. r_showed, r_anim) to the DOM, so server HTML
 * would differ from client after those scripts run.
 */
export function AccessibilityContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !ref.current || !html) return;
    runScriptsInContainer(ref.current);
  }, [mounted, html]);

  if (!mounted) {
    return <div {...ALLRECORDS_ATTRS} aria-busy="true" />;
  }

  return (
    <div
      ref={ref}
      {...ALLRECORDS_ATTRS}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
