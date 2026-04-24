"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Licence Check",      desc: "We confirm an active SRIJ licence. No valid licence — no review.",                          color: "#e63946" },
  { num: "02", title: "Security Audit",     desc: "We verify 256-bit SSL, firewall and GDPR compliance.",                                      color: "#00c254" },
  { num: "03", title: "Bonus Analysis",     desc: "We read all T&Cs — wagering requirements, limits and exclusions.",                          color: "#f0c040" },
  { num: "04", title: "Games Testing",      desc: "We test slots, table games and live casino — checking fairness and software.",               color: "#e63946" },
  { num: "05", title: "Payments Testing",   desc: "We make real deposits and withdrawals — speed, limits, fees.",                              color: "#00c254" },
  { num: "06", title: "Support Evaluation", desc: "We assess response time, competence and availability of customer support.",                  color: "#f0c040" },
];

export function ReviewProcess() {
  return (
    <section
      className="py-20"
      style={{ background: "#0d0d0d", borderTop: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c" }}
    >
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
            How We <span className="green-text">Review</span> Casinos
          </h2>
          <p className="text-sm" style={{ color: "#666" }}>
            A rigorous 6-step process — we only approve what passes everything
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="rounded-xl p-6 group"
              style={{
                background: "#141414",
                border: "1px solid #1c1c1c",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ borderColor: `${s.color}55`, y: -3 }}
            >
              <div
                className="text-4xl font-black mb-3 transition-all duration-300 group-hover:scale-105"
                style={{
                  fontFamily: "var(--font-display, Oswald, sans-serif)",
                  color: s.color,
                }}
              >
                {s.num}
              </div>
              <h3
                className="text-sm font-black mb-2 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#f8f8f8" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {s.desc}
              </p>
              <div
                className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
