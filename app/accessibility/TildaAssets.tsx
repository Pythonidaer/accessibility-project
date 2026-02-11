"use client";

import { useEffect } from "react";

const STYLES = [
  "/pagedemo-assets/css/tilda-grid-3.0.min.css",
  "/pagedemo-assets/css/tilda-blocks-2.14.css",
  "/pagedemo-assets/css/tilda-animation-1.0.min.css",
  "/pagedemo-assets/css/tilda-carousel-1.0.min.css",
  "/pagedemo-assets/css/custom.css",
  "/pagedemo-assets/css/accessibility-overrides.css",
  "/pagedemo-assets/css/accessibility-custom.css",
];

const SCRIPTS = [
  "/pagedemo-assets/js/lazyload-1.3.min.js",
  "/pagedemo-assets/js/tilda-animation-1.0.min.js",
  "/pagedemo-assets/js/tilda-events-1.0.min.js",
  "/pagedemo-assets/js/tilda-animation-ext-1.0.min.js",
  "/pagedemo-assets/js/tilda-animation-sbs-1.0.min.js",
  "/pagedemo-assets/js/js.cookie.min.js",
];

export function TildaAssets() {
  useEffect(() => {
    STYLES.forEach((href) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.media = "all";
      document.head.appendChild(link);
    });

    SCRIPTS.forEach((src) => {
      if (document.querySelector(`script[src="${src}"]`)) return;
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });
  }, []);

  return null;
}
