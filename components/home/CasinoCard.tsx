"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Crown, Zap } from "lucide-react";
import type { Casino } from "@/lib/casinos";

interface CasinoCardProps {
  casino: Casino;
  index: number;
}

const SUITS = ["♠", "♥", "♦", "♣"];

/* Pull the biggest number out of the bonus string for hero display */
function extractBonusHero(bonus: string): { pct: string | null; amount: string } {
  const pct    = bonus.match(/(\d+)%/);
  const amount = bonus.match(/€(\d+)/);
  return {
    pct:    pct    ? pct[1]    : null,
    amount: amount ? `€${amount[1]}` : "",
  };
}

/* Circumference for the SVG score ring */
const R   = 22;
const C   = 2 * Math.PI * R;

export function CasinoCard({ casino, index }: CasinoCardProps) {
  const isTop   = !!casino.badge;
  const suit    = SUITS[index % 4];
  const suitAlt = SUITS[(index + 2) % 4];
  const hero    = extractBonusHero(casino.bonus);
  const pct     = (casino.score / 10) * C;         // filled arc length
  const initials = casino.name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();

  return (
    <motion.div
      className={`casino-card group flex flex-col ${isTop ? "is-top-rated" : ""}`}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── TOP-RATED crown ribbon ── */}
      {isTop && (
        <div
          className="flex items-center justify-center gap-1.5 py-1.5 text-xs font-black uppercase tracking-widest"
          style={{
            background: "linear-gradient(90deg, #b08820, #f0c040, #ffd966, #f0c040, #b08820)",
            backgroundSize: "200% auto",
            animation: "shimmer 3s linear infinite",
            color: "#05050a",
          }}
        >
          <Crown size={11} strokeWidth={2.5} />
          {casino.badge}
          <Crown size={11} strokeWidth={2.5} />
        </div>
      )}

      {/* ── Header band (casino colour) ── */}
      <div
        className="relative px-5 pt-5 pb-4 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${casino.color}ee 0%, ${casino.color}66 60%, #141414 100%)` }}
      >
        {/* Suit watermarks */}
        <span
          className="absolute -top-1 -left-1 select-none pointer-events-none font-serif
                     transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
          style={{ fontSize: 64, color: "rgba(255,255,255,0.07)", lineHeight: 1 }}
        >
          {suit}
        </span>
        <span
          className="absolute bottom-0 right-2 select-none pointer-events-none font-serif
                     transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12"
          style={{ fontSize: 44, color: "rgba(255,255,255,0.05)", lineHeight: 1 }}
        >
          {suitAlt}
        </span>

        <div className="relative z-10 flex items-center gap-3">
          {/* Avatar */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-black text-white shrink-0"
            style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.18)" }}
          >
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
              Casino Online
            </p>
            <h3 className="text-sm font-black text-white leading-tight truncate"
              style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", letterSpacing: "0.03em" }}>
              {casino.name}
            </h3>
          </div>

          {/* SVG Score ring */}
          <div className="shrink-0 relative" style={{ width: 52, height: 52 }}>
            <svg width="52" height="52" style={{ transform: "rotate(-90deg)" }}>
              <circle cx="26" cy="26" r={R} fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="4" />
              <circle
                cx="26" cy="26" r={R} fill="none"
                stroke={isTop ? "#f0c040" : "#00c254"}
                strokeWidth="4"
                strokeDasharray={`${pct} ${C - pct}`}
                strokeLinecap="round"
                style={{ filter: `drop-shadow(0 0 4px ${isTop ? "#f0c04066" : "#00c25466"})` }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="text-xs font-black leading-none"
                style={{
                  fontFamily: "var(--font-display, Oswald, sans-serif)",
                  color: isTop ? "#f0c040" : "#00c254",
                }}
              >
                {casino.score.toFixed(1)}
              </span>
              <span className="text-[8px] uppercase tracking-wider" style={{ color: "#666" }}>score</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bonus hero block ── */}
      <div
        className="mx-4 mt-4 rounded-xl p-4 relative overflow-hidden"
        style={{
          background: isTop
            ? "linear-gradient(135deg, rgba(240,192,64,0.1), rgba(240,192,64,0.04))"
            : "linear-gradient(135deg, rgba(0,194,84,0.1), rgba(0,194,84,0.04))",
          border: `1px solid ${isTop ? "rgba(240,192,64,0.3)" : "rgba(0,194,84,0.3)"}`,
        }}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-1"
          style={{ color: isTop ? "#f0c040" : "#00c254" }}>
          <Zap size={9} strokeWidth={3} />
          Bónus de Boas-Vindas
        </p>

        {/* Big hero number */}
        {hero.pct && (
          <div
            className="text-4xl font-black leading-none mb-0.5"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              color: isTop ? "#f0c040" : "#00c254",
              textShadow: `0 0 20px ${isTop ? "rgba(240,192,64,0.4)" : "rgba(0,194,84,0.4)"}`,
            }}
          >
            {hero.pct}%
            <span className="text-base ml-1 font-semibold" style={{ color: "#aaaaaa" }}>
              {hero.amount && `até ${hero.amount}`}
            </span>
          </div>
        )}
        {!hero.pct && (
          <div
            className="text-3xl font-black leading-none mb-0.5"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              color: isTop ? "#f0c040" : "#00c254",
            }}
          >
            {hero.amount}
          </div>
        )}
        <p className="text-xs leading-snug" style={{ color: "#888" }}>
          {casino.bonus}
        </p>
      </div>

      {/* ── Feature chips ── */}
      <div className="flex flex-wrap gap-1.5 px-4 mt-3">
        {casino.features.map((f) => (
          <span
            key={f}
            className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
            style={{ background: "#1c1c1c", border: "1px solid #2a2a2a", color: "#666" }}
          >
            <ShieldCheck size={8} style={{ color: "#00c254" }} strokeWidth={2.5} />
            {f}
          </span>
        ))}
      </div>

      {/* ── CTA — always at the bottom ── */}
      <div className="p-4 mt-auto">
        <motion.a
          href={casino.link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-primary flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm no-underline"
          style={{ color: "#040a06", fontSize: "14px" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          JOGAR AGORA
          <ExternalLink size={13} strokeWidth={2.5} />
        </motion.a>
        <p className="text-center text-[10px] mt-2" style={{ color: "#444" }}>
          18+ · T&amp;Cs aplicam-se · Jogue responsavelmente
        </p>
      </div>

      {/* Bottom glow bar on hover */}
      <div
        className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isTop
            ? "linear-gradient(90deg, transparent, #f0c040, transparent)"
            : "linear-gradient(90deg, transparent, #00c254, transparent)",
        }}
      />
    </motion.div>
  );
}
