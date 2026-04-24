"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FloatingSymbols } from "@/components/ui/FloatingSymbols";
import { RouletteWheel }   from "@/components/ui/RouletteWheel";

/* ══════════════════════════════════════
   MINI GAME ANIMATIONS  (from GamesSection)
══════════════════════════════════════ */
function SlotsAnim() {
  const symbols = ["🍒", "7️⃣", "⭐", "🍒", "💎", "7️⃣", "⭐", "💎"];
  return (
    <div className="flex gap-2.5 justify-center items-center overflow-hidden" style={{ height: 108 }}>
      {[0, 1, 2].map((col) => (
        <div key={col} className="rounded-xl overflow-hidden flex flex-col items-center"
          style={{ width: 68, height: 108, background: "#0a0a0a", border: "1px solid #333" }}>
          <div style={{ animation: `slotRoll ${1.8 + col * 0.4}s linear infinite`, display: "flex", flexDirection: "column" }}>
            {[...symbols, ...symbols].map((s, i) => (
              <div key={i} className="flex items-center justify-center" style={{ height: 108, fontSize: 34, lineHeight: 1 }}>{s}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function BlackjackAnim() {
  const cards = [{ label: "A", suit: "♠", color: "#f8f8f8" }, { label: "K", suit: "♥", color: "#e63946" }, { label: "J", suit: "♠", color: "#f8f8f8" }];
  return (
    <div className="flex items-center justify-center gap-4" style={{ height: 108 }}>
      {cards.map((c, i) => (
        <div key={i} className="rounded-xl flex flex-col items-center justify-center font-black"
          style={{ width: 64, height: 92, background: "#1c1c1c", border: `2px solid ${c.color === "#e63946" ? "rgba(230,57,70,0.5)" : "#3a3a3a"}`, color: c.color, animation: `cardFan 4s ${i * 0.4}s ease-in-out infinite`, transformOrigin: "bottom center", fontFamily: "var(--font-display, Oswald, sans-serif)" }}>
          <span style={{ fontSize: 30 }}>{c.label}</span>
          <span style={{ fontSize: 22 }}>{c.suit}</span>
        </div>
      ))}
    </div>
  );
}

function RouletteAnim() {
  return (
    <div className="flex items-center justify-center" style={{ height: 108 }}>
      <div className="rounded-full flex items-center justify-center relative"
        style={{ width: 102, height: 102, background: "conic-gradient(#e63946 0deg 30deg,#1a1a1a 30deg 60deg,#e63946 60deg 90deg,#1a1a1a 90deg 120deg,#00c254 120deg 150deg,#1a1a1a 150deg 180deg,#e63946 180deg 210deg,#1a1a1a 210deg 240deg,#e63946 240deg 270deg,#1a1a1a 270deg 300deg,#00c254 300deg 330deg,#1a1a1a 330deg 360deg)", animation: "rouletteSpin 3s linear infinite", border: "3px solid #555" }}>
        <div className="rounded-full" style={{ width: 36, height: 36, background: "#141414", border: "2px solid #555", animation: "rouletteInner 3s linear infinite" }} />
      </div>
    </div>
  );
}

function PokerAnim() {
  const cards = [{ label: "A", suit: "♣", rot: -16 }, { label: "K", suit: "♦", rot: -8 }, { label: "Q", suit: "♣", rot: 0 }, { label: "J", suit: "♦", rot: 8 }, { label: "10", suit: "♣", rot: 16 }];
  return (
    <div className="flex items-end justify-center relative" style={{ height: 108 }}>
      {cards.map((c, i) => (
        <div key={i} className="absolute rounded-xl flex flex-col items-center justify-center font-black"
          style={{ width: 56, height: 80, background: "#1c1c1c", border: `2px solid ${c.suit === "♦" ? "rgba(230,57,70,0.5)" : "#3a3a3a"}`, color: c.suit === "♦" ? "#e63946" : "#f8f8f8", transform: `rotate(${c.rot}deg) translateX(${(i - 2) * 26}px) translateY(${Math.abs(c.rot) * 0.25}px)`, transformOrigin: "bottom center", animation: `cardFan 5s ${i * 0.2}s ease-in-out infinite`, fontFamily: "var(--font-display, Oswald, sans-serif)", zIndex: i }}>
          <span style={{ fontSize: 21 }}>{c.label}</span>
          <span style={{ fontSize: 18 }}>{c.suit}</span>
        </div>
      ))}
    </div>
  );
}

function LiveAnim() {
  return (
    <div className="flex flex-col items-center justify-center gap-3" style={{ height: 108 }}>
      <div className="live-badge" style={{ fontSize: 14, padding: "5px 14px", gap: 7 }}><span className="live-dot" style={{ width: 9, height: 9 }} />LIVE</div>
      <div className="flex gap-2 items-end" style={{ height: 48 }}>
        {[...Array(9)].map((_, i) => (
          <div key={i} className="rounded"
            style={{ width: 6, height: 12 + Math.sin(i * 0.9) * 22, background: "#e63946", animation: `livePulse ${0.45 + i * 0.09}s ${i * 0.1}s ease-in-out infinite` }} />
        ))}
      </div>
    </div>
  );
}

function JackpotAnim() {
  return (
    <div className="flex flex-col items-center justify-center gap-2" style={{ height: 108 }}>
      <div className="uppercase tracking-widest" style={{ color: "#888", fontSize: 11, fontWeight: 700 }}>live jackpot</div>
      <div className="font-black leading-none"
        style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#f0c040", textShadow: "0 0 32px rgba(240,192,64,0.85)", animation: "greenPulse 2s ease-in-out infinite", fontSize: 32 }}>
        €2.847.391
      </div>
      <div className="flex gap-2 mt-1">
        {["💰", "💰", "💰"].map((e, i) => (
          <span key={i} style={{ fontSize: 22, animation: `greenPulse ${1.2 + i * 0.3}s ${i * 0.2}s ease-in-out infinite`, display: "inline-block" }}>{e}</span>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
const stats = [
  { value: "50+",  label: "Casinos Reviewed", color: "#00c254" },
  { value: "10K+", label: "Active Players",   color: "#e63946" },
  { value: "100%", label: "SRIJ Licensed",    color: "#f0c040" },
];

const GAMES = [
  { id: "jackpots",  suit: "♦", anim: "jackpot",    isLive: false, title: "JACKPOTS",    tagline: "The next millionaire is you.",  desc: "Progressive jackpots growing right now.",           color: "#f0c040", glow: "rgba(240,192,64,0.45)", bg: "#150f00", border: "rgba(240,192,64,0.4)", angle: 270 },
  { id: "poker",     suit: "♣", anim: "poker",      isLive: false, title: "POKER",       tagline: "Read the game. Own the table.", desc: "Texas Hold'em, Omaha and tournaments.",             color: "#00c254", glow: "rgba(0,194,84,0.45)",   bg: "#051508", border: "rgba(0,194,84,0.4)",   angle: 330 },
  { id: "roulette",  suit: "♦", anim: "roulette",   isLive: false, title: "ROULETTE",    tagline: "The wheel never lies.",         desc: "European, American and French.",                    color: "#e63946", glow: "rgba(230,57,70,0.45)",  bg: "#1a0508", border: "rgba(230,57,70,0.4)",  angle: 30  },
  { id: "blackjack", suit: "♠", anim: "blackjack",  isLive: false, title: "BLACKJACK",   tagline: "Beat the dealer. Be the king.", desc: "21 tables with limits for everyone.",               color: "#f8f8f8", glow: "rgba(248,248,248,0.2)", bg: "#111",   border: "rgba(255,255,255,0.18)", angle: 90  },
  { id: "live",      suit: "♥", anim: "live",       isLive: true,  title: "LIVE CASINO", tagline: "Real dealers. Real thrills.",   desc: "HD streaming with dealers 24/7.",                   color: "#e63946", glow: "rgba(230,57,70,0.5)",   bg: "#1a0508", border: "rgba(230,57,70,0.55)", angle: 150 },
  { id: "slots",     suit: "♠", anim: "slots",      isLive: false, title: "SLOTS",       tagline: "Spin. Win. Repeat.",            desc: "Hundreds of slots with progressive jackpots.",      color: "#e63946", glow: "rgba(230,57,70,0.45)",  bg: "#1a0508", border: "rgba(230,57,70,0.4)",  angle: 210 },
];

function GameAnim({ anim }: { anim: string }) {
  switch (anim) {
    case "slots":     return <SlotsAnim />;
    case "blackjack": return <BlackjackAnim />;
    case "roulette":  return <RouletteAnim />;
    case "poker":     return <PokerAnim />;
    case "live":      return <LiveAnim />;
    case "jackpot":   return <JackpotAnim />;
    default:          return null;
  }
}

/* ══════════════════════════════════════
   ARENA CONSTANTS
══════════════════════════════════════ */
const SZ    = 1220;  // container px
const CX    = 610;
const CY    = 610;
const R     = 415;   // orbit radius (center → card center)
const WHEEL = 285;   // roulette box
const CW    = 330;   // card width
const CH    = 310;   // card height

function cardPos(angleDeg: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a) };
}

const EASE = { ease: [0.22, 1, 0.36, 1] as const };

/* ══════════════════════════════════════
   DESKTOP SPIN ARENA
══════════════════════════════════════ */
function SpinArena() {
  return (
    <div className="relative mx-auto" style={{ width: SZ, height: SZ }}>

      {/* SVG: orbit ring + connector lines */}
      <svg className="absolute inset-0 pointer-events-none" width={SZ} height={SZ} style={{ zIndex: 1 }} aria-hidden="true">
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 10" />
        <circle cx={CX} cy={CY} r={WHEEL / 2 + 22} fill="none" stroke="rgba(240,192,64,0.12)" strokeWidth="1.5" />
        {GAMES.map((g) => {
          const a   = (g.angle * Math.PI) / 180;
          const pos = cardPos(g.angle);
          const wr  = WHEEL / 2 + 26;
          return (
            <line key={g.id}
              x1={(CX + wr * Math.cos(a)).toFixed(1)} y1={(CY + wr * Math.sin(a)).toFixed(1)}
              x2={pos.x.toFixed(1)}                   y2={pos.y.toFixed(1)}
              stroke={g.color} strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 7"
            />
          );
        })}
      </svg>

      {/* Roulette wheel */}
      <motion.div className="absolute" style={{ width: WHEEL, height: WHEEL, left: CX - WHEEL / 2, top: CY - WHEEL / 2, zIndex: 5 }}
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute rounded-full pointer-events-none"
          style={{ inset: -32, background: "radial-gradient(circle, rgba(0,194,84,0.1) 0%, rgba(240,192,64,0.05) 45%, transparent 70%)", animation: "tablePulse 3s ease-in-out infinite" }} />
        <RouletteWheel />
      </motion.div>

      {/* Game cards */}
      {GAMES.map((g, i) => {
        const pos = cardPos(g.angle);
        return (
          <motion.a key={g.id} href="#info"
            className="absolute no-underline rounded-2xl overflow-hidden cursor-pointer flex flex-col"
            style={{ width: CW, height: CH, left: pos.x - CW / 2, top: pos.y - CH / 2, background: g.bg, border: `1px solid ${g.border}`, zIndex: 4 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.1, boxShadow: `0 0 40px ${g.glow}, 0 12px 40px rgba(0,0,0,0.8)`, borderColor: g.color, zIndex: 10 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Play ${g.title}`}
          >
            {/* LIVE pulse top bar */}
            {g.isLive && (
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: "#e63946", animation: "livePulse 1.5s ease-in-out infinite" }} />
            )}

            {/* Header band with animation */}
            <div className="relative px-5 pt-5 pb-3 overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${g.color}dd 0%, ${g.color}66 55%, transparent 100%)` }}>
              {/* Watermark */}
              <span className="absolute -top-3 -left-2 font-serif select-none pointer-events-none"
                style={{ fontSize: 112, color: "rgba(255,255,255,0.09)", lineHeight: 1 }} aria-hidden="true">
                {g.suit}
              </span>
              <div className="relative z-10">
                <GameAnim anim={g.anim} />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-2">
              <div className="flex items-center gap-2">
                {g.isLive && <span className="live-badge" style={{ fontSize: 11, padding: "3px 9px" }}><span className="live-dot" style={{ width: 7, height: 7 }} />LIVE</span>}
                <h3 style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", fontWeight: 900, fontSize: 26, color: g.color, letterSpacing: "0.04em", textShadow: `0 0 22px ${g.glow}`, lineHeight: 1 }}>
                  {g.title}
                </h3>
              </div>
              <p style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", fontSize: 15, fontWeight: 700, color: "#f0f0f0", letterSpacing: "0.02em", lineHeight: 1.3 }}>
                {g.tagline}
              </p>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.5 }}>{g.desc}</p>
              <div className="mt-auto pt-2">
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 800, color: g.color, background: `rgba(${g.color === "#f0c040" ? "240,192,64" : g.color === "#00c254" ? "0,194,84" : g.color === "#f8f8f8" ? "255,255,255" : "230,57,70"},0.15)`, border: `1px solid ${g.border}`, borderRadius: 10, padding: "8px 18px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Play →
                </span>
              </div>
            </div>

            {/* Bottom glow bar on hover */}
            <div className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, transparent, ${g.color}, transparent)` }} />
          </motion.a>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════
   MOBILE ARENA
══════════════════════════════════════ */
function MobileArena() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <motion.div className="relative w-full max-w-64 mx-auto"
        initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <div className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,194,84,0.12) 0%, rgba(240,192,64,0.06) 50%, transparent 70%)", transform: "scale(1.3)", animation: "tablePulse 3s ease-in-out infinite" }} />
        <RouletteWheel />
      </motion.div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {GAMES.map((g, i) => (
          <motion.a key={g.id} href="#info"
            className="no-underline rounded-2xl overflow-hidden flex flex-col cursor-pointer"
            style={{ background: g.bg, border: `1px solid ${g.border}`, minHeight: 260 }}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileTap={{ scale: 0.95 }}
          >
            {g.isLive && <div className="h-0.5" style={{ background: "#e63946", animation: "livePulse 1.5s ease-in-out infinite" }} />}
            <div className="relative px-4 pt-4 pb-3" style={{ background: `linear-gradient(135deg, ${g.color}cc 0%, ${g.color}55 55%, transparent 100%)` }}>
              <GameAnim anim={g.anim} />
            </div>
            <div className="flex flex-col flex-1 px-4 pt-3 pb-5">
              <h3 style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", fontWeight: 900, fontSize: 20, color: g.color, letterSpacing: "0.04em", textShadow: `0 0 16px ${g.glow}` }}>{g.title}</h3>
              <p style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", fontSize: 13, color: "#f0f0f0", fontWeight: 700, marginTop: 5 }}>{g.tagline}</p>
              <p style={{ fontSize: 12, color: "#777", marginTop: 5, lineHeight: 1.45 }}>{g.desc}</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14, fontSize: 12, fontWeight: 800, color: g.color, background: `rgba(${g.color === "#f0c040" ? "240,192,64" : g.color === "#00c254" ? "0,194,84" : g.color === "#f8f8f8" ? "255,255,255" : "230,57,70"},0.13)`, border: `1px solid ${g.color}55`, borderRadius: 8, padding: "6px 14px", letterSpacing: "0.06em", textTransform: "uppercase", alignSelf: "flex-start" }}>Jogar →</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
export function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden felt-bg">

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: "900px", height: "700px", background: "radial-gradient(ellipse, rgba(0,100,40,0.2) 0%, rgba(0,60,20,0.06) 45%, transparent 70%)" }} />
        <div className="absolute -top-40 -right-40 w-125 h-125"
          style={{ background: "radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 65%)" }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96"
          style={{ background: "radial-gradient(circle, rgba(230,57,70,0.07) 0%, transparent 65%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,194,84,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,194,84,0.022) 1px,transparent 1px)", backgroundSize: "55px 55px" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 95% 95% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)" }} />
      </div>

      <FloatingSymbols count={32} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-10 md:py-14">
        <div className="flex flex-col items-center gap-6">

          {/* Title */}
          <motion.div className="text-center"
            initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ...EASE }}>
            <h1 style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", fontWeight: 900, fontSize: "clamp(3rem, 9vw, 7rem)", letterSpacing: "-0.01em", lineHeight: 1, color: "#f8f8f8", textShadow: "0 0 60px rgba(230,57,70,0.2), 0 4px 32px rgba(0,0,0,0.7)" }}>
              ENTER THE{" "}
              <span style={{ background: "linear-gradient(90deg,#e63946 0%,#ff6b6b 50%,#e63946 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "shimmer 3s linear infinite", filter: "drop-shadow(0 0 22px rgba(230,57,70,0.75))" }}>
                CASINO
              </span>
            </h1>
            <motion.div className="flex items-center justify-center gap-3 mt-3"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }} aria-hidden="true">
              <div className="h-px w-20" style={{ background: "linear-gradient(90deg,transparent,#e63946)" }} />
              <span style={{ color: "#e63946", fontSize: 16, letterSpacing: "0.3em", textShadow: "0 0 10px rgba(230,57,70,0.5)" }}>♠ ♥ ♦ ♣</span>
              <div className="h-px w-20" style={{ background: "linear-gradient(90deg,#e63946,transparent)" }} />
            </motion.div>
          </motion.div>

          {/* Spin Arena */}
          <motion.div className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.22 }}>
            <div className="hidden lg:flex justify-center"><SpinArena /></div>
            <div className="lg:hidden"><MobileArena /></div>
          </motion.div>

          {/* CTA */}
          <motion.div className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ...EASE }}>
            <a href="#info" className="btn-cta-hero px-10 py-5 rounded-2xl" style={{ fontSize: 18, letterSpacing: "0.08em" }} aria-label="Get started now">
              <span>♠ GET STARTED</span>
            </a>
            <Link href="/about" className="btn-ghost px-8 py-5 rounded-2xl" style={{ fontSize: 15, minHeight: 52 }}>Learn More</Link>
          </motion.div>

          {/* Stats */}
          <motion.div className="inline-flex flex-col sm:flex-row items-stretch rounded-2xl overflow-hidden"
            style={{ border: "1px solid #252525", background: "#111" }}
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.6, ...EASE }}>
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className="px-7 py-4 text-center">
                  <div className="text-2xl md:text-3xl font-black mb-0.5"
                    style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: s.color, textShadow: `0 0 12px ${s.color}66` }}>
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest" style={{ color: "#555" }}>{s.label}</div>
                </div>
                {i < stats.length - 1 && <div className="w-px self-stretch" style={{ background: "#252525" }} />}
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom,transparent,#0a0a0a)" }} aria-hidden="true" />
    </section>
  );
}
