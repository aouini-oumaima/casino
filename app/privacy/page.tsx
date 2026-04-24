import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Beam4media Privacy Policy — GDPR compliance, data collected, user rights. Lisbon, Portugal.",
};

const sections = [
  {
    id: "who-we-are",
    title: "1. Who We Are",
    content: `Beam4media is an online casino review and comparison site based in Lisbon, Portugal. We are responsible for the processing of your personal data in connection with your use of this site.

Contact for privacy questions: contact@beam4media.com`,
  },
  {
    id: "data-collected",
    title: "2. What Data We Collect",
    content: `We collect the following types of data:

Contact Form:
• Full name
• Email address
• Subject and message content

Analytics (anonymous):
• Pages visited (no personal identification)
• Device type and browser
• Country of access (not specific IP)
• Time spent on site

We do not collect financial data, identity documents or any sensitive information.`,
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Data",
    content: `We use your data to:

• Respond to your enquiries submitted via the contact form
• Improve site content and experience based on anonymous analytics
• Comply with applicable legal obligations

We never sell, transfer or share your personal data with third parties for marketing purposes.

Legal basis for processing: consent (form) and legitimate interest (anonymous analytics).`,
  },
  {
    id: "cookies",
    title: "4. Cookies",
    content: `We use the following types of cookies:

Technical Cookies (necessary):
• Basic site functionality
• Browsing session

Analytics Cookies (optional):
• Google Analytics (anonymous and aggregated data)
• Traffic monitoring without personal identification

How to manage cookies:
You can disable cookies in your browser settings. For Google Analytics, you can use the opt-out extension available at tools.google.com/dlpage/gaoptout.`,
  },
  {
    id: "third-party-links",
    title: "5. Third-Party Links",
    content: `This site contains links to online casinos and other external sites. When you click those links, you leave our site and are subject to the privacy policies of those third parties.

We are not responsible for the privacy practices of the listed casinos or any other external site. We recommend reading the privacy policy of each platform before registering.`,
  },
  {
    id: "retention",
    title: "6. Data Retention",
    content: `We retain your personal data for the following periods:

• Contact form data: 12 months after the last contact
• Anonymous analytics: processed in real time, no personal storage
• Technical logs: 30 days

After these periods, data is securely deleted. You may request early deletion at any time.`,
  },
  {
    id: "rights",
    title: "7. Your Rights (GDPR)",
    content: `Under the General Data Protection Regulation (GDPR), you have the following rights:

• Right of Access — request a copy of the data we hold about you
• Right of Rectification — correct inaccurate or incomplete data
• Right to Erasure ("right to be forgotten")
• Right to Restriction — restrict the processing of your data
• Right to Portability — receive your data in a structured format
• Right to Object — object to processing based on legitimate interest

To exercise any of these rights, contact us at contact@beam4media.com. We will respond within 30 days.

You also have the right to lodge a complaint with the relevant data protection authority.`,
  },
  {
    id: "data-contact",
    title: "8. Data Enquiries Contact",
    content: `For any question relating to the protection of your personal data:

Email: contact@beam4media.com
Subject: "Data Protection — [your request]"
Location: Lisbon, Portugal

We respond within 30 working days, as required by GDPR.`,
  },
  {
    id: "updates",
    title: "9. Updates to This Policy",
    content: `This Privacy Policy may be updated periodically to reflect changes in our practices or applicable legislation.

The date of the last update is shown at the top of this page. In the event of significant changes, we will inform users appropriately.

Continued use of the site after changes constitutes acceptance of the new policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 text-center overflow-hidden"
        style={{ background: "#080808" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-64"
            style={{ background: "radial-gradient(ellipse at top, rgba(0,194,84,0.1) 0%, transparent 70%)" }}
          />
        </div>
        <span className="absolute top-8 left-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#e63946" }}>♦</span>
        <span className="absolute top-8 right-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#e63946" }}>♥</span>

        <div className="relative max-w-2xl mx-auto px-5">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "rgba(0,194,84,0.08)", border: "1px solid rgba(0,194,84,0.3)", color: "#00c254" }}
          >
            ♦ GDPR Compliant
          </div>
          <h1
            className="leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(2.5rem, 7vw, 4rem)",
              fontWeight: 700,
              color: "#f8f8f8",
            }}
          >
            Privacy{" "}
            <span style={{ color: "#00c254" }}>Policy</span>
          </h1>
          <p className="text-sm" style={{ color: "#666" }}>
            Last updated: April 2025 · GDPR (EU) 2016/679 Compliance
          </p>
        </div>
      </section>

      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #00c254 30%, #00c254 70%, transparent)" }} />

      <section className="py-16" style={{ background: "#0a0a0a" }}>
        <div className="max-w-3xl mx-auto px-5">

          {/* GDPR badge */}
          <div
            className="rounded-xl p-5 mb-8 text-sm"
            style={{
              background: "rgba(0,194,84,0.06)",
              border: "1px solid rgba(0,194,84,0.25)",
              color: "#666",
            }}
          >
            <strong style={{ color: "#00c254" }}>✓ GDPR Compliance:</strong> Beam4media complies
            with the General Data Protection Regulation (EU) 2016/679. Your data is safe with us.
          </div>

          {/* Table of contents */}
          <div
            className="rounded-xl p-6 mb-8"
            style={{ background: "#141414", border: "1px solid #1c1c1c" }}
          >
            <h2
              className="text-xs font-black uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#00c254" }}
            >
              ♠ Table of Contents
            </h2>
            <ol className="space-y-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="privacy-toc-link text-sm no-underline hover:underline transition-colors"
                    style={{ color: "#666" }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            {sections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="rounded-xl p-7"
                style={{
                  background: "#141414",
                  border: "1px solid #1c1c1c",
                }}
              >
                <h2
                  className="text-base font-black mb-4"
                  style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#00c254" }}
                >
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#666" }}>
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
