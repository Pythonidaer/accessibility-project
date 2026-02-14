"use client";

import { useEffect, useRef, useState } from "react";

export const ALLRECORDS_ATTRS = {
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

declare global {
  interface Window {
    t_onReady?: (fn: () => void) => void;
  }
}

/** Wait until Tilda runtime (t_onReady) is defined so inline scripts don't throw ReferenceError. */
function whenTildaReady(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (typeof window.t_onReady === "function") return Promise.resolve();

  return new Promise((resolve) => {
    const maxWait = 10000;
    const intervalMs = 50;
    const start = Date.now();

    const poll = () => {
      const id = setInterval(() => {
        if (typeof window.t_onReady === "function") {
          clearInterval(id);
          resolve();
          return;
        }
        if (Date.now() - start > maxWait) {
          clearInterval(id);
          resolve();
        }
      }, intervalMs);
    };

    // Give layout Scripts (beforeInteractive) time to load and execute before we start polling
    setTimeout(poll, 300);
  });
}

/** Runs <script> tags that were inserted via innerHTML (they don't run by default). */
export function runScriptsInContainer(container: HTMLElement) {
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

export type TildaHtmlRendererProps = {
  /** HTML string to inject (e.g. Tilda export markup). */
  html: string;
  /** Attributes for the wrapper element. Defaults to ALLRECORDS_ATTRS for the main page container. */
  containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
};

/**
 * Renders Tilda HTML only after mount to avoid hydration mismatch: Tilda's
 * scripts add classes (e.g. r_showed, r_anim) to the DOM, so server HTML
 * would differ from client after those scripts run.
 */
export function TildaHtmlRenderer({
  html,
  containerAttrs = ALLRECORDS_ATTRS,
}: TildaHtmlRendererProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !ref.current || !html) return;
    let cancelled = false;
    whenTildaReady().then(() => {
      if (cancelled || !ref.current) return;
      // Only run scripts if Tilda is actually ready (don't run on timeout if it never loaded)
      if (typeof window.t_onReady !== "function") return;
      runScriptsInContainer(ref.current);
    });
    return () => {
      cancelled = true;
    };
  }, [mounted, html]);

  if (!mounted) {
    return <div {...containerAttrs} aria-busy="true" />;
  }

  return (
    <div
      ref={ref}
      {...containerAttrs}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
