export default function LawsStandardsResourcesChecklists() {
  return (
    <main>
      <h1>Resources for Understanding State and National Accessibility Laws and Standards for Digital Resources</h1>
      <p>
        Including Title II of the ADA, WCAG requirements, Plain Language laws—and checklists for each.
      </p>

      <section>
        <h2>Title II of the Americans with Disabilities Act (ADA)</h2>
        <h3>Resources</h3>
        <ul>
          <li>
            <a href="https://www.ada.gov/law-and-regs/ada/" target="_blank" rel="noopener noreferrer">ADA.gov: Laws and Regulations</a>
          </li>
          <li>
            <a href="https://www.ada.gov/resources/title-ii/" target="_blank" rel="noopener noreferrer">ADA Title II Technical Assistance</a>
          </li>
          <li>
            <a href="https://www.ada.gov/resources/web-guidance/" target="_blank" rel="noopener noreferrer">ADA.gov Web Accessibility Guidance</a>
          </li>
        </ul>
        <h3>Title II Digital Accessibility Checklist</h3>
        <ul>
          <li>Identify all public-facing and internal digital services covered under Title II</li>
          <li>Ensure web content meets WCAG 2.1 Level AA (or current DOJ reference)</li>
          <li>Document accessibility policies and grievance procedures</li>
          <li>Provide accessible alternatives for content that cannot be made accessible (e.g., legacy PDFs)</li>
          <li>Conduct regular self-evaluations and respond to complaints promptly</li>
        </ul>
      </section>

      <section>
        <h2>Web Content Accessibility Guidelines (WCAG)</h2>
        <h3>Resources</h3>
        <ul>
          <li>
            <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer">WCAG 2.2 Quick Reference</a>
          </li>
          <li>
            <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">W3C WCAG Overview</a>
          </li>
          <li>
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/" target="_blank" rel="noopener noreferrer">Understanding WCAG 2.1</a>
          </li>
        </ul>
        <h3>WCAG 2.1 Level AA Checklist (Summary)</h3>
        <ul>
          <li><strong>Perceivable:</strong> Text alternatives for images; captions for video; content can be presented in different ways; sufficient color contrast; text resizable without loss of function</li>
          <li><strong>Operable:</strong> Keyboard accessible; no keyboard traps; sufficient time; no seizure-inducing content; skip links and clear navigation; multiple ways to find content</li>
          <li><strong>Understandable:</strong> Readable language; predictable behavior; input assistance (labels, errors, suggestions)</li>
          <li><strong>Robust:</strong> Valid markup; name, role, value for UI components; compatible with assistive technologies</li>
        </ul>
      </section>

      <section>
        <h2>Plain Language Laws and Standards</h2>
        <h3>Resources</h3>
        <ul>
          <li>
            <a href="https://www.plainlanguage.gov/" target="_blank" rel="noopener noreferrer">PlainLanguage.gov</a> — Federal plain language guidelines and resources
          </li>
          <li>
            <a href="https://www.plainlanguage.gov/law/" target="_blank" rel="noopener noreferrer">Plain Writing Act of 2010</a>
          </li>
          <li>
            <a href="https://www.plainlanguage.gov/guidelines/" target="_blank" rel="noopener noreferrer">Federal Plain Language Guidelines</a>
          </li>
          <li>
            Check your state&apos;s plain language or readability requirements for government communications
          </li>
        </ul>
        <h3>Plain Language Checklist</h3>
        <ul>
          <li>Use common, everyday words; avoid jargon and acronyms (or define them)</li>
          <li>Write short sentences and paragraphs</li>
          <li>Use active voice</li>
          <li>Address the reader directly (e.g., &ldquo;you&rdquo;)</li>
          <li>Organize content with clear headings and lists</li>
          <li>Put the most important information first</li>
          <li>Use tables for comparisons; avoid walls of text</li>
          <li>Test content with real users when possible</li>
        </ul>
      </section>
    </main>
  );
}
