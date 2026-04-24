"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: "🏛️",
    title: "Independence",
    desc: "We are not owned by any casino. 100% independent reviews based on real tests.",
    color: "#e63946",
    border: "rgba(230,57,70,0.25)",
    bg: "rgba(230,57,70,0.08)",
  },
  {
    icon: "🔍",
    title: "Transparency",
    desc: "We disclose all affiliate relationships. Trust is our greatest asset — we never compromise it.",
    color: "#00c254",
    border: "rgba(0,194,84,0.25)",
    bg: "rgba(0,194,84,0.08)",
  },
  {
    icon: "🛡️",
    title: "Responsibility",
    desc: "Responsible gambling is our absolute priority. Every review includes support resources.",
    color: "#f0c040",
    border: "rgba(240,192,64,0.25)",
    bg: "rgba(240,192,64,0.08)",
  },
];

export function MissionSection() {
  return (
    <section className="py-20" style={{ background: "#0a0a0a" }}>
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#f8f8f8",
            }}
          >
            Our <span className="red-text">Mission</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: "#666" }}>
            Helping players find safe, licensed and enjoyable casinos.
            We research, test and review every platform we recommend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="feature-card p-8 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: p.bg, border: `1px solid ${p.border}` }}
              >
                {p.icon}
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-display, Oswald, sans-serif)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: p.color,
                }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {p.desc}
              </p>
              <div
                className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
