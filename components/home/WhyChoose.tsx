"use client";

import { motion } from "framer-motion";

const features = [
  { suit: "♠", title: "Maximum Security",     desc: "Only platforms with an active SRIJ licence and 256-bit SSL.",   color: "#00c254", glow: "rgba(0,194,84,0.35)",    border: "rgba(0,194,84,0.2)"   },
  { suit: "♥", title: "Exclusive Offers",     desc: "Verified welcome bonuses and promotions for our readers.",       color: "#e63946", glow: "rgba(230,57,70,0.35)",   border: "rgba(230,57,70,0.2)"  },
  { suit: "♦", title: "Active Community",     desc: "Thousands of players choose Beam4media every day.",              color: "#f0c040", glow: "rgba(240,192,64,0.35)",  border: "rgba(240,192,64,0.2)" },
  { suit: "♣", title: "Available 24/7",       desc: "Live support at any time — you'll never be left without help.",  color: "#00c254", glow: "rgba(0,194,84,0.35)",    border: "rgba(0,194,84,0.2)"   },
  { suit: "♠", title: "Secure Transactions",  desc: "Deposits and withdrawals with end-to-end encryption.",          color: "#e63946", glow: "rgba(230,57,70,0.35)",   border: "rgba(230,57,70,0.2)"  },
  { suit: "♥", title: "Expert Support",       desc: "A specialist team — real answers, not bots.",                   color: "#f0c040", glow: "rgba(240,192,64,0.35)",  border: "rgba(240,192,64,0.2)" },
];

export function WhyChoose() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,194,84,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-5">

        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: "rgba(0,194,84,0.08)", border: "1px solid rgba(0,194,84,0.35)", color: "#00c254" }}
          >
            ♣ Our Advantages
          </div>
          <h2
            className="mb-3"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              fontWeight: 900,
              color: "#f8f8f8",
              textShadow: "0 0 40px rgba(0,194,84,0.12)",
            }}
          >
            WHY{" "}
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
              BEAM4MEDIA?
            </span>
          </h2>
          <p style={{ color: "#555", fontSize: 14 }}>
            The go-to reference for players who demand the best
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="neon-card feature-card p-6 group"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.48, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: f.color }}
            >
              {/* Suit icon */}
              <div className="flex items-center gap-3 mb-4">
                <motion.span
                  className="text-3xl font-serif select-none"
                  style={{ color: f.color, textShadow: `0 0 14px ${f.glow}` }}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {f.suit}
                </motion.span>
                <h3
                  className="text-base font-black"
                  style={{
                    fontFamily: "var(--font-display, Oswald, sans-serif)",
                    color: "#f8f8f8",
                    letterSpacing: "0.04em",
                  }}
                >
                  {f.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {f.desc}
              </p>

              {/* Animated bottom bar on hover */}
              <div
                className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }}
              />

              {/* Corner glow on hover */}
              <div
                className="absolute top-0 right-0 w-16 h-16 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${f.glow} 0%, transparent 70%)`,
                  transform: "translate(30%, -30%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
