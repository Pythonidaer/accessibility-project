import Link from "next/link";

export default function TableOfContents() {
  return (
    <main>
      <h1>Table of Contents</h1>
      <nav aria-label="Table of contents">
        <h2 id="accessibility-home">Accessibility home (sections)</h2>
        <ul aria-labelledby="accessibility-home">
          <li>
            <Link href="/accessibility">Accessibility home (full page)</Link>
          </li>
          <li>
            <Link href="/accessibility/sections">Accessibility sections index</Link>
          </li>
          <li>
            <Link href="/accessibility/sections/nav-and-hero">Nav and Hero</Link>
          </li>
          <li>
            <Link href="/accessibility/sections/intro-and-key-guides">Intro and Key Guides</Link>
          </li>
          <li>
            <Link href="/accessibility/sections/wcag-section">WCAG Section</Link>
          </li>
          <li>
            <Link href="/accessibility/sections/resources-and-rest">Resources and Rest</Link>
          </li>
          <li>
            <Link href="/accessibility/sections/patrice-hero">Patrice Hero (animated bar)</Link>
          </li>
        </ul>
        <h2 id="subject-matter">Subject matter &amp; guides</h2>
        <ul aria-labelledby="subject-matter">
          <li>
            <Link href="/subject-matter-expert">Subject Matter Expert on Digital Accessibility</Link>
          </li>
          <li>
            <Link href="/maintaining-accessibility">How to Maintain Accessibility of All of a Company&apos;s Services and Information</Link>
          </li>
          <li>
            <Link href="/developing-staff-relationships">How to Develop Relationships with Staff Across a Company to Gain Extensive Institutional Knowledge</Link>
          </li>
          <li>
            <Link href="/maintaining-accessibility-standards">How to Maintain Standards for Accessibility and Usability</Link>
          </li>
          <li>
            <Link href="/tight-deadlines-best-practices">Best Practices for Working Under Tight Deadlines While Following Department Standards and Policies</Link>
          </li>
          <li>
            <Link href="/managing-multiple-projects">Best Practices for Managing Multiple Projects from Concept Through Completion</Link>
          </li>
          <li>
            <Link href="/researching-accessibility-resources">Accessibility SME: How to Research Best Practices, Standards, Guidelines, and Legislation (with Resources)</Link>
          </li>
          <li>
            <Link href="/staying-current-accessibility">How to Stay Current with Developments in Digital Accessibility and Technology (with Resources)</Link>
          </li>
          <li>
            <Link href="/developing-accessibility-repository">Developing Digital Accessibility Resources and Collaborating to Build and Maintain a Robust Repository</Link>
          </li>
          <li>
            <Link href="/promoting-accessibility">How to Promote Accessibility Within an Organization and Advocate for It as a Vital Part of Customer and Employee Experience</Link>
          </li>
          <li>
            <Link href="/communication-plan-tips">Tips for Creating a Communication Plan to Inform Employees of Their Role and Responsibility for Digital Content and Services</Link>
          </li>
          <li>
            <Link href="/digital-principles-content-management">Digital Principles of Accessibility, Usability, and UX Applied to Content Management and Quality Control</Link>
          </li>
          <li>
            <Link href="/laws-standards-resources-checklists">Resources for Understanding State and National Accessibility Laws and Standards (with Checklists)</Link>
          </li>
          <li>
            <Link href="/audit-testing-tools-assistive-tech">Conducting Audits with Testing Software and Assistive Technologies (Resources, Articles, Videos)</Link>
          </li>
          <li>
            <Link href="/researching-industry-practices-problem-solving">Researching Industry Practices, Gathering and Analyzing Facts, Devising Solutions, and Preparing Concise Reports</Link>
          </li>
          <li>
            <Link href="/meetings-teams-group-problem-solving">Skills for Planning and Facilitating Meetings, Working in Teams, and Group Problem Solving</Link>
          </li>
          <li>
            <Link href="/written-oral-communication-tips">Tips for Exceptional Written and Oral Communication and Organizing Information Clearly and Concisely</Link>
          </li>
          <li>
            <Link href="/prioritizing-managing-multiple-assignments">How to Prioritize, Manage, and Complete Multiple Assignments in a Fast-Paced, Deadline-Driven Environment</Link>
          </li>
          <li>
            <Link href="/reviewing-complex-information">How to Review Complex Information from Multiple Sources and Determine Relevant Information to a Given Situation</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
