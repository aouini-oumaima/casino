"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const checks = [
  { color: "#00c254", text: "Only casinos with an active SRIJ licence" },
  { color: "#00c254", text: "T&Cs analysed — no hidden small print" },
  { color: "#00c254", text: "Tested by real players" },
];

export function InfoSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "#0d0d0d", borderTop: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c" }}
    >
      {/* Ambient green glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 70% at 30% 50%, rgba(0,194,84,0.05) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full"
              style={{ border: "1px solid rgba(0,194,84,0.35)", color: "#00c254", background: "rgba(0,194,84,0.07)" }}
            >
              ♦ Essential Information
            </div>

            <h2
              className="mb-5 leading-tight"
              style={{
                fontFamily: "var(--font-display, Oswald, sans-serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#f8f8f8",
              }}
            >
              WHAT YOU NEED TO KNOW ABOUT{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #009940, #00c254, #00e061, #00c254, #009940)",
                  backgroundSize: "300% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 3s linear infinite",
                  filter: "drop-shadow(0 0 10px rgba(0,194,84,0.5))",
                }}
              >
                ONLINE CASINOS
              </span>
            </h2>

            <div className="space-y-3 text-sm leading-relaxed mb-8" style={{ color: "#888" }}>
              <p>
                Online casinos are regulated by the{" "}
                <strong style={{ color: "#f8f8f8" }}>SRIJ</strong> — the authority that ensures
                legality, security and transparency across all platforms.
              </p>
              <p>
                A valid <strong style={{ color: "#f8f8f8" }}>SRIJ licence</strong> means data
                protection, secure payments and audited games. Never play without checking.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-primary px-7 py-3.5 rounded-xl text-sm"
              style={{ color: "#040a06" }}
            >
              Contact Us
            </Link>
          </motion.div>

          {/* ── Right ── */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {checks.map((c, i) => (
              <motion.div
                key={c.text}
                className="flex items-center gap-4 rounded-xl p-4 neon-card"
                style={{ background: "#141414", border: "1px solid #1c1c1c" }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{
                  x: 6,
                  borderColor: "#00c254",
                  boxShadow: "0 0 20px rgba(0,194,84,0.15)",
                }}
              >
                <motion.div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black shrink-0"
                  style={{ background: "rgba(0,194,84,0.12)", color: "#00c254", border: "1px solid rgba(0,194,84,0.2)" }}
                  whileHover={{ scale: 1.15, boxShadow: "0 0 14px rgba(0,194,84,0.4)" }}
                >
                  ✓
                </motion.div>
                <p className="text-sm font-semibold" style={{ color: "#f0f0f0" }}>{c.text}</p>
              </motion.div>
            ))}

            {/* Quote block */}
            <motion.div
              className="rounded-xl p-5 mt-2"
              style={{ background: "rgba(230,57,70,0.05)", border: "1px solid rgba(230,57,70,0.18)" }}
              whileHover={{ borderColor: "rgba(230,57,70,0.4)", boxShadow: "0 0 24px rgba(230,57,70,0.08)" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm italic leading-relaxed" style={{ color: "#777" }}>
                &ldquo;Gambling should always be entertainment — never a source of income.
                Set limits and play responsibly.&rdquo;
              </p>
              <p className="text-xs mt-2 font-black uppercase tracking-wider neon-red-text">
                — Beam4media Team
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
