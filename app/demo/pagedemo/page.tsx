import Link from "next/link";

export default function PagedemoDemoPage() {
  return (
    <main>
      <h1>Very Peri Page Demo</h1>
      <p>
        This demo reproduces the original Color of the Year 2022 design from
        color-of-the-year.com. CSS and JavaScript are served locally from{" "}
        <code>/pagedemo-assets/</code>.
      </p>
      <p>
        <Link href="/pagedemo.html">Open Page Demo →</Link>
      </p>
      <p>
        <Link href="/">← Back to Home</Link>
      </p>
      <p>
        <Link href="/table-of-contents">Table of Contents</Link>
      </p>
    </main>
  );
}
