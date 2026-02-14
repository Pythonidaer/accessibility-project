import Link from "next/link";

const SECTIONS = [
  { slug: "nav-and-hero", label: "Nav and Hero" },
  { slug: "patrice-hero", label: "Patrice Hero (animated bar)" },
  { slug: "intro-and-key-guides", label: "Intro and Key Guides" },
  { slug: "wcag-section", label: "WCAG Section" },
  { slug: "resources-and-rest", label: "Resources and Rest" },
] as const;

export default function AccessibilitySectionsIndex() {
  return (
    <main style={{ padding: "2rem", maxWidth: 600 }}>
      <h1>Accessibility Home — Sections</h1>
      <p>
        View each part of the accessibility home page in isolation to compare
        layout and behavior.
      </p>
      <nav aria-label="Accessibility section previews">
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <Link href="/accessibility">Full accessibility page</Link>
          </li>
          {SECTIONS.map(({ slug, label }) => (
            <li key={slug} style={{ marginBottom: "0.5rem" }}>
              <Link href={`/accessibility/sections/${slug}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
