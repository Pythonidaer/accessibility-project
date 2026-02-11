"use client";

import { useEffect } from "react";

/**
 * Tilda expects body with no spacing (margin: 0). We add the class and styles
 * when the accessibility layout mounts and remove them on unmount.
 */
export function BodyClass() {
  useEffect(() => {
    document.body.classList.add("t-body");
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    return () => {
      document.body.classList.remove("t-body");
      document.body.style.margin = "";
      document.body.style.padding = "";
    };
  }, []);

  return null;
}
