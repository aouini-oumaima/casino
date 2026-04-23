"use client";

import { motion } from "framer-motion";

/* ─── Game data ─── */
const games = [
  {
    id: "slots",
    emoji: "🎰",
    suit: "♠",
    title: "SLOTS",
    tagline: "Gire. Ganhe. Repita.",
    desc: "Centenas de slots com jackpots progressivos.",
    color: "#e63946",
    glow: "rgba(230,57,70,0.35)",
    bg: "rgba(230,57,70,0.06)",
    border: "rgba(230,57,70,0.3)",
    animation: "slots",
  },
  {
    id: "blackjack",
    emoji: "♠",
    suit: "♠",
    title: "BLACKJACK",
    tagline: "Bata o dealer. Seja o rei.",
    desc: "21 mesas com limites para todos os jogadores.",
    color: "#f8f8f8",
    glow: "rgba(248,248,248,0.2)",
    bg: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.15)",
    animation: "blackjack",
  },
  {
    id: "roulette",
    emoji: "🎡",
    suit: "♦",
    title: "ROLETA",
    tagline: "A roda nunca mente.",
    desc: "Europeia, americana e francesa — escolha a sua.",
    color: "#e63946",
    glow: "rgba(230,57,70,0.35)",
    bg: "rgba(230,57,70,0.06)",
    border: "rgba(230,57,70,0.3)",
    animation: "roulette",
  },
  {
    id: "poker",
    emoji: "🃏",
    suit: "♣",
    title: "POKER",
    tagline: "Leia o jogo. Domine a mesa.",
    desc: "Texas Hold'em, Omaha e torneios exclusivos.",
    color: "#00c254",
    glow: "rgba(0,194,84,0.35)",
    bg: "rgba(0,194,84,0.06)",
    border: "rgba(0,194,84,0.3)",
    animation: "poker",
  },
  {
    id: "live",
    emoji: "🔴",
    suit: "♥",
    title: "LIVE CASINO",
    tagline: "Dealers reais. Emoção real.",
    desc: "Transmissão HD com dealers profissionais 24/7.",
    color: "#e63946",
    glow: "rgba(230,57,70,0.5)",
    bg: "rgba(230,57,70,0.08)",
    border: "rgba(230,57,70,0.5)",
    animation: "live",
    isLive: true,
  },
  {
    id: "jackpots",
    emoji: "💰",
    suit: "♦",
    title: "JACKPOTS",
    tagline: "O próximo milionário é você.",
    desc: "Jackpots progressivos a crescer agora mesmo.",
    color: "#f0c040",
    glow: "rgba(240,192,64,0.35)",
    bg: "rgba(240,192,64,0.06)",
    border: "rgba(240,192,64,0.3)",
    animation: "jackpot",
    jackpotValue: 2847391,
  },
];

/* ─── Individual visual animations ─── */

function SlotsAnim() {
  const symbols = ["🍒", "7️⃣", "⭐", "🍒", "💎", "7️⃣", "⭐", "💎"];
  return (
    <div className="flex gap-1 justify-center items-center overflow-hidden" style={{ height: 44 }}>
      {[0, 1, 2].map((col) => (
        <div
          key={col}
          className="rounded flex flex-col items-center overflow-hidden"
          style={{ width: 36, height: 44, background: "#0a0a0a", border: "1px solid #333" }}
        >
          <div
            style={{
              animation: `slotRoll ${1.8 + col * 0.4}s linear infinite`,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {[...symbols, ...symbols].map((s, i) => (
              <div key={i} className="flex items-center justify-center text-lg"
                style={{ height: 44, lineHeight: 1 }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function BlackjackAnim() {
  const cards = [
    { label: "A", suit: "♠", color: "#f8f8f8" },
    { label: "K", suit: "♥", color: "#e63946" },
    { label: "J", suit: "♠", color: "#f8f8f8" },
  ];
  return (
    <div className="flex items-center justify-center gap-1" style={{ height: 44 }}>
      {cards.map((c, i) => (
        <div
          key={i}
          className="rounded flex flex-col items-center justify-center font-black text-xs"
          style={{
            width: 30,
            height: 42,
            background: "#1c1c1c",
            border: "1px solid #333",
            color: c.color,
            animation: `cardFan 4s ${i * 0.4}s ease-in-out infinite`,
            transformOrigin: "bottom center",
            fontFamily: "var(--font-display, Oswald, sans-serif)",
          }}
        >
          <span style={{ fontSize: 13 }}>{c.label}</span>
          <span style={{ fontSize: 10 }}>{c.suit}</span>
        </div>
      ))}
    </div>
  );
}

function RouletteAnim() {
  const segments = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="flex items-center justify-center" style={{ height: 44 }}>
      <div
        className="rounded-full flex items-center justify-center relative"
        style={{
          width: 44,
          height: 44,
          background: "conic-gradient(#e63946 0deg 30deg, #1a1a1a 30deg 60deg, #e63946 60deg 90deg, #1a1a1a 90deg 120deg, #00c254 120deg 150deg, #1a1a1a 150deg 180deg, #e63946 180deg 210deg, #1a1a1a 210deg 240deg, #e63946 240deg 270deg, #1a1a1a 270deg 300deg, #00c254 300deg 330deg, #1a1a1a 330deg 360deg)",
          animation: "rouletteSpin 3s linear infinite",
          border: "2px solid #444",
        }}
      >
        <div className="rounded-full" style={{ width: 16, height: 16, background: "#141414", border: "1px solid #333", animation: "rouletteInner 3s linear infinite" }} />
      </div>
    </div>
  );
}

function PokerAnim() {
  const cards = [
    { label: "A", suit: "♣", rot: -15 },
    { label: "K", suit: "♦", rot: -7 },
    { label: "Q", suit: "♣", rot: 0 },
    { label: "J", suit: "♦", rot: 7 },
    { label: "10", suit: "♣", rot: 15 },
  ];
  return (
    <div className="flex items-end justify-center relative" style={{ height: 44 }}>
      {cards.map((c, i) => (
        <div
          key={i}
          className="absolute rounded flex flex-col items-center justify-center font-black text-[10px]"
          style={{
            width: 26,
            height: 38,
            background: "#1c1c1c",
            border: `1px solid ${c.suit === "♦" ? "rgba(230,57,70,0.4)" : "#333"}`,
            color: c.suit === "♦" ? "#e63946" : "#f8f8f8",
            transform: `rotate(${c.rot}deg) translateX(${(i - 2) * 14}px) translateY(${Math.abs(c.rot) * 0.3}px)`,
            transformOrigin: "bottom center",
            animation: `cardFan 5s ${i * 0.2}s ease-in-out infinite`,
            fontFamily: "var(--font-display, Oswald, sans-serif)",
            zIndex: i,
          }}
        >
          <span style={{ fontSize: 10 }}>{c.label}</span>
          <span>{c.suit}</span>
        </div>
      ))}
    </div>
  );
}

function LiveAnim() {
  return (
    <div className="flex flex-col items-center justify-center gap-1" style={{ height: 44 }}>
      <div className="live-badge">
        <span className="live-dot" />
        AO VIVO
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="rounded-sm"
            style={{
              width: 3,
              height: 4 + Math.sin(i * 1.3) * 6,
              background: "#e63946",
              animation: `livePulse ${0.6 + i * 0.1}s ${i * 0.15}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function JackpotAnim({ value }: { value: number }) {
  const formatted = value.toLocaleString("pt-PT");
  return (
    <div className="flex flex-col items-center justify-center" style={{ height: 44 }}>
      <div
        className="text-lg font-black leading-none"
        style={{
          fontFamily: "var(--font-display, Oswald, sans-serif)",
          color: "#f0c040",
          textShadow: "0 0 16px rgba(240,192,64,0.6)",
          animation: "greenPulse 2s ease-in-out infinite",
        }}
      >
        €{formatted}
      </div>
      <div className="text-[9px] uppercase tracking-widest mt-0.5" style={{ color: "#888" }}>
        jackpot ao vivo
      </div>
    </div>
  );
}

function GameVisual({ game }: { game: typeof games[0] }) {
  switch (game.animation) {
    case "slots":     return <SlotsAnim />;
    case "blackjack": return <BlackjackAnim />;
    case "roulette":  return <RouletteAnim />;
    case "poker":     return <PokerAnim />;
    case "live":      return <LiveAnim />;
    case "jackpot":   return <JackpotAnim value={game.jackpotValue ?? 0} />;
    default:          return null;
  }
}

export function GamesSection() {
  return (
    <section
      id="jogos"
      className="relative py-20 overflow-hidden"
      style={{ background: "#0b0b0b", borderTop: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c" }}
    >
      {/* Ambient — stronger red glow for casino atmosphere */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(230,57,70,0.06) 0%, transparent 70%)" }} />
      {/* Green corner accents */}
      <div className="absolute -top-20 -left-20 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,194,84,0.06) 0%, transparent 65%)" }} />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,194,84,0.06) 0%, transparent 65%)" }} />

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
            style={{ background: "rgba(230,57,70,0.1)", border: "1px solid rgba(230,57,70,0.35)", color: "#e63946" }}
          >
            ♦ Jogos em Destaque
          </div>
          <h2
            className="mb-2"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "-0.01em",
              lineHeight: 1,
              color: "#f8f8f8",
              textShadow: "0 0 60px rgba(230,57,70,0.25), 0 4px 24px rgba(0,0,0,0.6)",
            }}
          >
            ENTRE NO{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #e63946 0%, #ff6b6b 50%, #e63946 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
                filter: "drop-shadow(0 0 18px rgba(230,57,70,0.7))",
              }}
            >
              CASINO
            </span>
          </h2>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #e63946)" }} />
            <span style={{ color: "#e63946", fontSize: 18, letterSpacing: "0.2em" }}>♠ ♥ ♦ ♣</span>
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #e63946, transparent)" }} />
          </div>
          <p style={{ color: "#888", fontSize: 15, fontWeight: 500, letterSpacing: "0.04em" }}>
            Seis mundos. Uma plataforma. Zero esperas.
          </p>
        </motion.div>

        {/* Game cards — 3-col then 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {games.map((game, i) => (
            <motion.div
              key={game.id}
              className="neon-card group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: game.bg,
                border: `1px solid ${game.border}`,
                transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.25s ease",
              }}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -8,
                boxShadow: `0 24px 64px rgba(0,0,0,0.7), 0 0 40px ${game.glow}, 0 0 80px ${game.glow.replace("0.35", "0.12")}`,
                borderColor: game.color,
              }}
            >
              {/* Live pulse overlay */}
              {game.isLive && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: "#e63946", animation: "livePulse 1.5s ease-in-out infinite" }}
                />
              )}

              {/* Background suit watermark */}
              <div
                className="absolute -bottom-4 -right-4 select-none pointer-events-none font-serif
                           transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                style={{ fontSize: 96, color: "rgba(255,255,255,0.03)", lineHeight: 1 }}
              >
                {game.suit}
              </div>

              <div className="relative z-10 p-6">
                {/* Animation area */}
                <div className="mb-4">
                  <GameVisual game={game} />
                </div>

                {/* Game title */}
                <div className="flex items-center gap-2 mb-1">
                  {game.isLive && <span className="live-badge text-[9px]"><span className="live-dot" />LIVE</span>}
                  <h3
                    className="text-xl font-black"
                    style={{
                      fontFamily: "var(--font-display, Oswald, sans-serif)",
                      color: game.color,
                      letterSpacing: "0.03em",
                      textShadow: `0 0 20px ${game.glow}`,
                    }}
                  >
                    {game.title}
                  </h3>
                </div>

                {/* Tagline */}
                <p
                  className="text-sm font-bold mb-1"
                  style={{ color: "#f8f8f8", fontFamily: "var(--font-display, Oswald, sans-serif)", letterSpacing: "0.02em" }}
                >
                  {game.tagline}
                </p>

                {/* Desc */}
                <p className="text-xs mb-5" style={{ color: "#666" }}>
                  {game.desc}
                </p>

                {/* CTA */}
                <a
                  href="#jogos"
                  className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-black uppercase tracking-wider no-underline transition-all duration-200 group-hover:gap-2.5"
                  style={{
                    background: game.bg,
                    border: `1px solid ${game.border}`,
                    color: game.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = game.glow.replace("0.35", "0.15");
                    e.currentTarget.style.boxShadow = `0 0 16px ${game.glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = game.bg;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Jogar {game.title} <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom marquee strip */}
        <div className="mt-14 overflow-hidden rounded-xl" style={{ border: "1px solid #1c1c1c", background: "#141414" }}>
          <div className="marquee-track py-3">
            {[...Array(2)].map((_, rep) => (
              <div key={rep} className="flex items-center gap-8 px-8 shrink-0">
                {games.map((g) => (
                  <div key={g.id + rep} className="flex items-center gap-2 shrink-0">
                    <span style={{ color: g.color, fontSize: 16 }}>{g.suit}</span>
                    <span
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#444" }}
                    >
                      {g.title}
                    </span>
                    <span style={{ color: "#2a2a2a", fontSize: 20 }}>·</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
