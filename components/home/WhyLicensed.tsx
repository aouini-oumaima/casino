"use client";

import { motion } from "framer-motion";

const features = [
  {
    emoji: "🔐",
    title: "Maximum Security",
    desc: "At Beam4media, we highlight only SRIJ-licensed platforms that use advanced security protocols to protect your personal and financial data.",
    color: "#00c254",
    glow: "rgba(0,194,84,0.35)",
    border: "rgba(0,194,84,0.2)",
    bg: "rgba(0,194,84,0.04)",
  },
  {
    emoji: "🎁",
    title: "Exclusive Offers",
    desc: "At Beam4media, you'll find the best welcome bonuses and exclusive promotions for players.",
    color: "#e63946",
    glow: "rgba(230,57,70,0.35)",
    border: "rgba(230,57,70,0.2)",
    bg: "rgba(230,57,70,0.04)",
  },
  {
    emoji: "👥",
    title: "Active Community",
    desc: "Thousands of players trust Beam4media every day to find the best gambling sites.",
    color: "#f0c040",
    glow: "rgba(240,192,64,0.35)",
    border: "rgba(240,192,64,0.2)",
    bg: "rgba(240,192,64,0.04)",
  },
  {
    emoji: "⏰",
    title: "Available 24/7",
    desc: "Play whenever you like! Casinos recommended by Beam4media offer 24/7 support and live assistance whenever you need it.",
    color: "#00c254",
    glow: "rgba(0,194,84,0.35)",
    border: "rgba(0,194,84,0.2)",
    bg: "rgba(0,194,84,0.04)",
  },
  {
    emoji: "💳",
    title: "Secure Transactions",
    desc: "Sites listed on Beam4media offer secure payment methods protected by advanced encryption technology.",
    color: "#e63946",
    glow: "rgba(230,57,70,0.35)",
    border: "rgba(230,57,70,0.2)",
    bg: "rgba(230,57,70,0.04)",
  },
  {
    emoji: "📞",
    title: "Expert Support",
    desc: "Count on professional support — the partner platforms' help teams are ready to assist whenever you need it.",
    color: "#f0c040",
    glow: "rgba(240,192,64,0.35)",
    border: "rgba(240,192,64,0.2)",
    bg: "rgba(240,192,64,0.04)",
  },
];

const EASE = { ease: [0.22, 1, 0.36, 1] as const };

export function WhyLicensed() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#0a0a0a" }}>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,194,84,0.04) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-5">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ...EASE }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "rgba(0,194,84,0.08)", border: "1px solid rgba(0,194,84,0.35)", color: "#00c254" }}
          >
            ♦ Why Licensed Casinos?
          </div>

          <h2
            className="mb-5 leading-tight"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "#f8f8f8",
              textShadow: "0 0 40px rgba(0,194,84,0.1)",
            }}
          >
            WHY CHOOSE{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #009940, #00c254, #00e061, #00c254, #009940)",
                backgroundSize: "300% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
                filter: "drop-shadow(0 0 12px rgba(0,194,84,0.5))",
              }}
            >
              LICENSED CASINOS?
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "#777" }}
          >
            At <strong style={{ color: "#f8f8f8" }}>Beam4media</strong>, we value a safe, enjoyable and transparent gaming experience.
            By choosing licensed platforms, you ensure data protection, fair payments and full compliance with SRIJ regulations —
            so you can always play with peace of mind and confidence.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden"
              style={{ background: f.bg, border: `1px solid ${f.border}` }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ...EASE }}
              whileHover={{
                borderColor: f.color,
                boxShadow: `0 0 32px ${f.glow}, 0 8px 32px rgba(0,0,0,0.6)`,
                y: -4,
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${f.glow} 0%, transparent 70%)`, transform: "translate(30%,-30%)" }}
                aria-hidden="true"
              />

              {/* Emoji + title */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: `rgba(${f.color === "#f0c040" ? "240,192,64" : f.color === "#00c254" ? "0,194,84" : "230,57,70"},0.1)`, border: `1px solid ${f.border}` }}
                  aria-hidden="true"
                >
                  {f.emoji}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display, Oswald, sans-serif)",
                    fontWeight: 900,
                    fontSize: 18,
                    color: f.color,
                    letterSpacing: "0.04em",
                    textShadow: `0 0 14px ${f.glow}`,
                    lineHeight: 1.1,
                  }}
                >
                  {f.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#888" }}>
                {f.desc}
              </p>

              {/* Bottom accent bar on hover */}
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500 mt-auto"
                style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
