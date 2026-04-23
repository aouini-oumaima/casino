"use client";

import { useMemo } from "react";

const SUITS = ["♠", "♥", "♦", "♣"];

/* colour per suit: spades/clubs white-ish, hearts/diamonds red */
const SUIT_COLOR: Record<string, string> = {
  "♠": "rgba(255,255,255,VAL)",
  "♣": "rgba(255,255,255,VAL)",
  "♥": "rgba(230,57,70,VAL)",
  "♦": "rgba(230,57,70,VAL)",
};

/* deterministic spread — no random, avoids hydration mismatch */
function seed(i: number, mod: number, offset = 0) {
  return ((i * 37 + offset) * 13) % mod;
}

export function PageBackground() {
  const symbols = useMemo(() => {
    return Array.from({ length: 55 }, (_, i) => {
      const suit  = SUITS[i % 4];
      const size  = 22 + seed(i, 8, 5) * 22;           // 22 – 176 px
      const alpha = (0.10 + seed(i, 10, 3) * 0.016).toFixed(3); // 0.10 – 0.26
      const color = SUIT_COLOR[suit].replace("VAL", alpha);
      const rot   = seed(i, 72, 7) - 36;                // –36 … +36 deg
      const dur   = 7 + seed(i, 7, 1) * 2;              // 7 – 21 s
      const del   = (seed(i, 11, 9) * 0.9).toFixed(1);  // 0 – 9.9 s

      return {
        id:    i,
        char:  suit,
        left:  `${(seed(i, 97, 13))}%`,
        top:   `${(seed(i, 95, 11))}%`,
        size,
        color,
        rot,
        dur,
        del,
      };
    });
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none select-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {symbols.map((s) => (
        <span
          key={s.id}
          className="absolute font-serif"
          style={{
            left:          s.left,
            top:           s.top,
            fontSize:      s.size,
            color:         s.color,
            lineHeight:    1,
            "--r":         `${s.rot}deg`,
            transform:     `rotate(${s.rot}deg)`,
            animation:     `floatDriftSlow ${s.dur}s ${s.del}s ease-in-out infinite`,
            willChange:    "transform, opacity",
          } as React.CSSProperties}
        >
          {s.char}
        </span>
      ))}
    </div>
  );
}
