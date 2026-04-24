"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Lock } from "lucide-react";

const cards = [
  { icon: Mail,   label: "Email",           value: "contact@beam4media.com", link: "mailto:contact@beam4media.com", color: "#e63946", bg: "rgba(230,57,70,0.08)",  border: "rgba(230,57,70,0.2)"  },
  { icon: MapPin, label: "Location",        value: "Lisbon, Portugal",        link: null,                           color: "#00c254", bg: "rgba(0,194,84,0.08)",   border: "rgba(0,194,84,0.2)"   },
  { icon: Clock,  label: "Response Time",   value: "Within 24 hours",         link: null,                           color: "#f0c040", bg: "rgba(240,192,64,0.08)", border: "rgba(240,192,64,0.2)" },
  { icon: Lock,   label: "Confidentiality", value: "All communications are confidential", link: null,               color: "#00c254", bg: "rgba(0,194,84,0.08)",   border: "rgba(0,194,84,0.2)"   },
];

export function ContactInfo() {
  return (
    <div>
      <h3
        className="mb-7"
        style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", fontSize: "1.3rem", fontWeight: 700, color: "#f8f8f8" }}
      >
        Contact Information
      </h3>

      <div className="space-y-3 mb-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.label}
            className="flex items-start gap-4 rounded-xl p-5"
            style={{
              background: "#141414",
              border: "1px solid #1c1c1c",
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ x: 3, borderColor: c.border }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}
            >
              <c.icon size={17} style={{ color: c.color }} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#444" }}>
                {c.label}
              </p>
              {c.link ? (
                <a href={c.link} className="text-sm font-semibold no-underline hover:underline" style={{ color: "#f8f8f8" }}>
                  {c.value}
                </a>
              ) : (
                <p className="text-sm font-semibold" style={{ color: "#f8f8f8" }}>{c.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Helpline box */}
      <motion.div
        className="rounded-2xl p-6 relative overflow-hidden"
        style={{
          background: "rgba(230,57,70,0.06)",
          border: "1px solid rgba(230,57,70,0.3)",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
      >
        <span className="absolute top-3 right-4 text-3xl opacity-10 font-serif pointer-events-none select-none" style={{ color: "#e63946" }}>♥</span>

        <h4
          className="mb-2"
          style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", fontSize: "1rem", fontWeight: 700, color: "#e63946" }}
        >
          🆘 Need Help with Gambling?
        </h4>
        <p className="text-xs mb-4 leading-relaxed" style={{ color: "#666" }}>
          If gambling is affecting your life, seek help immediately. It's free and confidential.
        </p>
        <a
          href="tel:08088020133"
          className="block text-xl font-black no-underline mb-2"
          style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#e63946", letterSpacing: "0.02em" }}
        >
          📞 0808 8020 133
        </a>
        <span className="text-xs block mb-3" style={{ color: "#444" }}>Free helpline · 24h a day</span>
        <a
          href="https://www.begambleaware.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold no-underline hover:underline"
          style={{ color: "#e63946" }}
        >
          Visitar BeGambleAware.org →
        </a>
      </motion.div>
    </div>
  );
}
