"use client";

const items = [
  { sym: "♠", color: "#f8f8f8" },
  { text: "CASINO",  color: "#f0c040" },
  { sym: "♥", color: "#e63946" },
  { text: "POKER",   color: "#f0c040" },
  { sym: "♦", color: "#e63946" },
  { text: "BLACKJACK", color: "#f0c040" },
  { sym: "♣", color: "#f8f8f8" },
  { text: "ROLETA",  color: "#f0c040" },
  { sym: "♠", color: "#f8f8f8" },
  { text: "SLOTS",   color: "#f0c040" },
  { sym: "♥", color: "#e63946" },
  { text: "JACKPOT", color: "#f0c040" },
  { sym: "♦", color: "#e63946" },
  { text: "LIVE",    color: "#f0c040" },
  { sym: "♣", color: "#f8f8f8" },
  { text: "SRIJ",    color: "#00c254" },
  { sym: "♠", color: "#f8f8f8" },
  { text: "21",      color: "#f0c040" },
  { sym: "♥", color: "#e63946" },
  { text: "BÓNUS",   color: "#f0c040" },
  { sym: "♦", color: "#e63946" },
  { text: "TORNEIO", color: "#f0c040" },
  { sym: "♣", color: "#f8f8f8" },
  { text: "VIP",     color: "#f0c040" },
];

function TickerItem({ item }: { item: typeof items[number] }) {
  if ("sym" in item && item.sym) {
    return (
      <span
        className="font-serif select-none"
        style={{ color: item.color, fontSize: 17, textShadow: `0 0 10px ${item.color}88`, lineHeight: 1 }}
        aria-hidden="true"
      >
        {item.sym}
      </span>
    );
  }
  return (
    <span
      className="font-black uppercase tracking-widest select-none"
      style={{
        fontFamily: "var(--font-display, Oswald, sans-serif)",
        color: item.color,
        fontSize: 11,
        letterSpacing: "0.18em",
        textShadow: `0 0 8px ${item.color}66`,
      }}
      aria-hidden="true"
    >
      {"text" in item ? item.text : ""}
    </span>
  );
}

function Dot() {
  return (
    <span
      className="rounded-full shrink-0 select-none"
      style={{ width: 3, height: 3, background: "#333" }}
      aria-hidden="true"
    />
  );
}

export function SymbolTicker() {
  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        background: "#0d0d0d",
        borderBottom: "1px solid #1a1a1a",
        height: 38,
      }}
      aria-hidden="true"
    >
      {/* Left + right fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10"
        style={{ background: "linear-gradient(90deg, #0d0d0d, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10"
        style={{ background: "linear-gradient(270deg, #0d0d0d, transparent)" }}
      />

      {/* Scrolling track — two copies for seamless loop */}
      <div
        className="flex items-center gap-5 absolute"
        style={{
          animation: "marquee 28s linear infinite",
          whiteSpace: "nowrap",
          top: "50%",
          transform: "translateY(-50%)",
          willChange: "transform",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-5 shrink-0">
            <TickerItem item={item} />
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
