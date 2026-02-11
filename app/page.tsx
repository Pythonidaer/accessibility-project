import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Accessibility</h1>
      <p>
        <Link href="/table-of-contents">Table of Contents</Link>
      </p>
      <p>
        <Link href="/demo/pagedemo">Very Peri Page Demo</Link>
      </p>
    </main>
  );
}
