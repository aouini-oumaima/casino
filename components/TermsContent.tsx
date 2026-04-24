"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: `Welcome to Beam4media. This site is an online casino affiliate guide intended for players. By using this site, you agree to these Terms and Conditions.

Beam4media is an independent information site that reviews and compares SRIJ-licensed online casinos. We receive commissions from the casinos we recommend, as explained in our affiliate policy below.`,
  },
  {
    title: "2. Eligibility",
    content: `To use this site and access the casinos we recommend, you must:

• Be 18 years of age or older (or the minimum legal age in your jurisdiction, if higher)
• Reside in a jurisdiction where online gambling is legal
• Not be registered in any self-exclusion programme
• Have the legal capacity to enter into binding contracts

Beam4media does not encourage gambling by minors. If you become aware of anyone under 18 using this site, please contact us immediately.`,
  },
  {
    title: "3. Affiliate Disclosure",
    content: `Beam4media maintains affiliate relationships with some of the casinos listed on this site. This means we may receive a commission when a user clicks a link and makes a deposit at a recommended casino.

This financial relationship does not affect our editorial independence. Our reviews are based on objective criteria and independent testing. We do not recommend casinos solely because they pay higher commissions.

All affiliate links are clearly identified and each review is transparent about our relationship with the casino in question.`,
  },
  {
    title: "4. Accuracy of Information",
    content: `We make every effort to keep the information on this site up to date and accurate. However:

• Bonuses and promotions change frequently — always verify on the casino's site before registering
• Bonus terms and conditions (T&Cs) are the responsibility of the casinos, not Beam4media
• Reviews reflect our opinion at the time of publication
• Available games, payment methods and other details may change without prior notice

We always recommend verifying information directly on the casino's site before making any decision.`,
  },
  {
    title: "5. Responsible Gambling",
    content: `Beam4media is committed to promoting responsible gambling. Gambling should be treated as entertainment, never as a source of income.

Support resources:
• BeGambleAware.org — support and information on problem gambling
• SRIJ.turismodeportugal.pt — official regulator in Portugal
• Free support line: 0808 8020 133

Use the self-exclusion tools available at licensed casinos. If you feel gambling is negatively affecting your life, seek professional help.`,
  },
  {
    title: "6. Intellectual Property",
    content: `All content on this site — including text, images, logos, reviews and design — is the property of Beam4media and is protected by applicable copyright laws.

You may not reproduce, distribute or modify our content without prior written authorisation. You may share links to our pages, provided it is not done in a misleading manner.

The trademarks and logos of listed casinos are the property of their respective owners.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `Beam4media is not a casino operator and is not responsible for:

• Casino decisions regarding accounts, payments or bonuses
• Financial losses resulting from playing at any casino
• Changes to casino offerings after our reviews are published
• Content on third-party sites to which we provide links
• Technical issues on casino sites

Use of this site and the casinos we recommend is at your own risk.`,
  },
  {
    title: "8. Privacy",
    content: `Your privacy is important to us. We collect and process personal data in accordance with the General Data Protection Regulation (GDPR) and our Privacy Policy.

Please see our full Privacy Policy at /privacy to understand how we collect, use and protect your personal data.`,
  },
  {
    title: "9. Changes to Terms",
    content: `We reserve the right to update these Terms and Conditions at any time. Changes take effect immediately upon publication on the site.

It is your responsibility to check these terms periodically. Continued use of the site after changes constitutes acceptance of the new terms.`,
  },
  {
    title: "10. Contact",
    content: `For questions related to these Terms and Conditions, please contact us:

Email: contact@beam4media.com
Location: Lisbon, Portugal

We respond to all enquiries within 24 business hours.`,
  },
];

function AccordionItem({
  title,
  content,
  isOpen,
  onToggle,
  index,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden mb-3"
      style={{
        background: "#141414",
        border: isOpen ? "1px solid rgba(230,57,70,0.4)" : "1px solid #1c1c1c",
        boxShadow: isOpen ? "0 4px 24px rgba(230,57,70,0.08)" : "none",
      }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors group"
        onClick={onToggle}
      >
        <span
          className="font-bold text-sm md:text-base transition-colors"
          style={{
            fontFamily: "var(--font-display, Oswald, sans-serif)",
            color: isOpen ? "#e63946" : "#f8f8f8",
          }}
        >
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ color: "#e63946", flexShrink: 0 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6">
              <div
                className="h-px w-full mb-4"
                style={{ background: "rgba(230,57,70,0.2)" }}
              />
              <p
                className="text-sm leading-relaxed whitespace-pre-line"
                style={{ color: "#666" }}
              >
                {content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TermsContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Disclosure note */}
      <div
        className="rounded-xl p-5 mb-8 text-sm"
        style={{
          background: "rgba(230,57,70,0.06)",
          border: "1px solid rgba(230,57,70,0.25)",
          color: "#666",
        }}
      >
        <strong style={{ color: "#e63946" }}>♦ Important Notice:</strong> Beam4media is an
        affiliate site. We may receive commissions from casinos listed on this site. Please read
        these terms in full to understand our practices and responsibilities.
      </div>

      {sections.map((s, i) => (
        <AccordionItem
          key={i}
          index={i}
          title={s.title}
          content={s.content}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </>
  );
}
