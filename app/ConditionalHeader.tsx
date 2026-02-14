"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ConditionalHeader() {
  const pathname = usePathname();
  if (pathname === "/" || pathname?.startsWith("/accessibility")) return null;
  return (
    <header>
      <nav aria-label="Main">
        <Link href="/">Home</Link>
        <Link href="/table-of-contents">Table of Contents</Link>
        <Link href="/accessibility">Accessibility (Tilda)</Link>
      </nav>
    </header>
  );
}
