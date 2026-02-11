export default function AuditTestingToolsAssistiveTech() {
  return (
    <main>
      <h1>Advice for Conducting Content, Software, and Application Audits Using Testing Software and Assistive Technologies</h1>

      <section>
        <h2>WAVE (Web Accessibility Evaluation Tool)</h2>
        <p>
          WAVE is a free, widely used accessibility evaluation tool from WebAIM. It can be used as a browser extension (Chrome, Firefox, Edge) or as an online service. WAVE surfaces errors, warnings, and contrast issues, highlights structural elements, and provides inline feedback on the page.
        </p>
        <p><strong>Use cases:</strong> Quick scans of individual pages, identifying structural and contrast issues, visual feedback for developers, training on accessibility concepts.</p>
        <ul>
          <li><a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">WAVE Tool</a></li>
          <li><a href="https://webaim.org/articles/wave/" target="_blank" rel="noopener noreferrer">WebAIM: WAVE Documentation</a></li>
          <li><a href="https://www.youtube.com/watch?v=ITUDiTgAZY0" target="_blank" rel="noopener noreferrer">Introduction to WAVE (YouTube)</a></li>
          <li><a href="https://www.youtube.com/watch?v=Daoi8ABPuYc" target="_blank" rel="noopener noreferrer">How to Use the WAVE Web Accessibility Evaluation Tool (YouTube)</a></li>
        </ul>
      </section>

      <section>
        <h2>ARC Toolkit</h2>
        <p>
          ARC Toolkit is a browser extension (Chrome, Edge, Firefox) from TPGi that runs inside DevTools. It performs automated checks against WCAG 2.0, 2.1, 2.2, Section 508, and EN 301 549. Results are categorized as errors, warnings, and best practices, with code-level details in the Elements panel.
        </p>
        <p><strong>Use cases:</strong> Developer-focused audits, standards-specific testing, integration with DevTools workflow, detailed element inspection.</p>
        <ul>
          <li><a href="https://www.tpgi.com/arc-platform/arc-toolkit/" target="_blank" rel="noopener noreferrer">ARC Toolkit (TPGi)</a></li>
          <li><a href="https://accessibility.education.gov.uk/tools-testing/tools/arc-toolkit" target="_blank" rel="noopener noreferrer">ARC Toolkit Guide (UK Gov)</a></li>
          <li><a href="https://blogs.perficient.com/2024/02/29/empowering-accessibility-a-comprehensive-guide-to-setting-up-and-configuring-the-arc-toolkit" target="_blank" rel="noopener noreferrer">Setting Up and Configuring ARC Toolkit (Article)</a></li>
        </ul>
      </section>

      <section>
        <h2>Accessibility Insights for Web</h2>
        <p>
          Accessibility Insights for Web is a free Microsoft extension for Chrome and Edge. It offers two workflows: FastPass (automated checks and tab stops in under five minutes) and Assessment (20+ manual tests for WCAG 2.1 AA). It uses axe-core for automation and provides clear, actionable guidance.
        </p>
        <p><strong>Use cases:</strong> Quick FastPass scans, full WCAG assessments, keyboard testing, manual test guidance, integrating into CI/CD.</p>
        <ul>
          <li><a href="https://accessibilityinsights.io/docs/web/overview/" target="_blank" rel="noopener noreferrer">Accessibility Insights for Web Overview</a></li>
          <li><a href="https://www.youtube.com/watch?v=XVvBJoEe4Is" target="_blank" rel="noopener noreferrer">Accessibility Insights Overview (YouTube)</a></li>
          <li><a href="https://www.youtube.com/watch?v=m1l7ghxOKF0" target="_blank" rel="noopener noreferrer">Assessment Workflow (YouTube)</a></li>
        </ul>
      </section>

      <section>
        <h2>WebAIM Contrast Checker</h2>
        <p>
          The WebAIM Contrast Checker evaluates color contrast between foreground and background. You enter hex values or use a color picker. It reports contrast ratios and whether colors pass WCAG AA and AAA for normal and large text. A bookmarklet lets you test on-screen content; the Link Contrast Checker evaluates links identified by color alone.
        </p>
        <p><strong>Use cases:</strong> Verifying text and background contrast, checking link colors, designing accessible color palettes, validating design specs.</p>
        <ul>
          <li><a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">WebAIM Contrast Checker</a></li>
          <li><a href="https://webaim.org/articles/contrast/" target="_blank" rel="noopener noreferrer">Evaluating Contrast and Color Use (WebAIM)</a></li>
          <li><a href="https://section508.gov/training/create/making-color-usage-accessible/webaim-contrast-checker" target="_blank" rel="noopener noreferrer">Using the WebAIM Contrast Checker (Section508.gov)</a></li>
        </ul>
      </section>

      <section>
        <h2>axe DevTools</h2>
        <p>
          axe DevTools is the browser extension version of Deque&apos;s axe-core engine. It runs automated accessibility checks in Chrome, Firefox, and Edge and integrates with DevTools. Findings include impact level, WCAG mapping, and remediation guidance.
        </p>
        <p><strong>Use cases:</strong> Automated scans during development, CI integration, quick issue identification, alignment with axe-core rules.</p>
        <ul>
          <li><a href="https://www.deque.com/axe/devtools/" target="_blank" rel="noopener noreferrer">axe DevTools</a></li>
          <li><a href="https://www.deque.com/axe/core-documentation/api-documentation/" target="_blank" rel="noopener noreferrer">axe-core Documentation</a></li>
        </ul>
      </section>

      <section>
        <h2>Assistive Technologies</h2>
        <h3>NVDA (NonVisual Desktop Access)</h3>
        <p>
          NVDA is a free, open-source screen reader for Windows. It reads web content aloud and announces headings, links, form labels, and landmarks. Testing with NVDA reveals how structure, semantics, and focus management affect screen reader users.
        </p>
        <p><strong>Use cases:</strong> Screen reader testing on a budget, verifying heading hierarchy, link and button announcements, form labeling, dynamic content updates.</p>
        <ul>
          <li><a href="https://www.nvaccess.org/" target="_blank" rel="noopener noreferrer">NVDA Download</a></li>
          <li><a href="https://webaim.org/articles/nvda/" target="_blank" rel="noopener noreferrer">WebAIM: Using NVDA to Evaluate Web Accessibility</a></li>
          <li><a href="https://www.youtube.com/watch?v=Vx1vSd5uYS8" target="_blank" rel="noopener noreferrer">Accessibility Testing with the NVDA Screenreader (YouTube)</a></li>
          <li><a href="https://www.youtube.com/watch?v=HAVs5GhwxtE" target="_blank" rel="noopener noreferrer">Set Up and Use NVDA for Accessibility Testing (YouTube)</a></li>
        </ul>

        <h3>JAWS (Job Access With Speech)</h3>
        <p>
          JAWS is a commercial screen reader for Windows and is widely used in enterprise and government. It has two modes: browse mode for navigation and forms mode for data entry. Testing with JAWS helps ensure compatibility with a dominant screen reader in regulated environments.
        </p>
        <p><strong>Use cases:</strong> Enterprise and government audits, compatibility with a high-market-share screen reader, forms and complex application testing.</p>
        <ul>
          <li><a href="https://webaim.org/articles/jaws/" target="_blank" rel="noopener noreferrer">WebAIM: Using JAWS to Evaluate Web Accessibility</a></li>
          <li><a href="https://accessibility.huit.harvard.edu/jaws" target="_blank" rel="noopener noreferrer">Getting Started Testing with JAWS (Harvard)</a></li>
          <li><a href="https://bbc.github.io/accessibility-news-and-you/assistive-technology/testing-steps/jaws-windows.html" target="_blank" rel="noopener noreferrer">JAWS for Windows Testing Steps (BBC)</a></li>
        </ul>

        <h3>Dragon Naturally Speaking</h3>
        <p>
          Dragon is speech recognition software (Nuance) that lets users navigate and control the computer with voice. Users activate controls by speaking visible or accessible text, use keyboard commands verbally, and may control the mouse by voice. Testing with Dragon surfaces issues with link text, focus indicators, and form labels.
        </p>
        <p><strong>Use cases:</strong> Voice control testing, motor accessibility, ensuring controls are activate-able by spoken label, keyboard and focus design validation.</p>
        <ul>
          <li><a href="https://webaim.org/blog/at-experiment-dragon/" target="_blank" rel="noopener noreferrer">WebAIM: Assistive Technology Experiment—Dragon</a></li>
          <li><a href="https://www.tpgi.com/testing-with-speech-recognition/" target="_blank" rel="noopener noreferrer">TPGi: Testing with Speech Recognition</a></li>
          <li><a href="https://bbc.github.io/accessibility-news-and-you/assistive-technology/testing-steps/dragon-windows.html" target="_blank" rel="noopener noreferrer">Dragon for Windows Testing Steps (BBC)</a></li>
        </ul>

        <h3>ZoomText</h3>
        <p>
          ZoomText is screen magnification software for Windows that zooms screen content and can include speech. Testing with ZoomText helps verify layouts at high zoom levels, contrast, and readability when content is enlarged.
        </p>
        <p><strong>Use cases:</strong> Low-vision testing, layout behavior at magnification, contrast and text legibility, navigation when zoomed.</p>
        <ul>
          <li><a href="https://webaim.org/blog/at-experiment-zoomtext/" target="_blank" rel="noopener noreferrer">WebAIM: Assistive Technology Experiment—ZoomText</a></li>
          <li><a href="https://bbc.github.io/accessibility-news-and-you/assistive-technology/testing-steps/zoomtext-windows.html" target="_blank" rel="noopener noreferrer">ZoomText for Windows Testing Steps (BBC)</a></li>
          <li><a href="https://accessibility-manual.dwp.gov.uk/best-practice/screen-magnifier-testing" target="_blank" rel="noopener noreferrer">Screen Magnifier Testing (UK DWP)</a></li>
        </ul>
      </section>
    </main>
  );
}
