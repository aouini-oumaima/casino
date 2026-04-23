"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Symbol {
  id: number;
  char: string;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const SUITS = ["♠", "♥", "♦", "♣", "♠", "♥"];
const COLORS = [
  "rgba(240,192,64,0.22)",
  "rgba(230,57,70,0.18)",
  "rgba(240,192,64,0.16)",
  "rgba(255,255,255,0.14)",
];

export function FloatingSymbols({ count = 18 }: { count?: number }) {
  const symbols = useMemo<Symbol[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      char: SUITS[i % SUITS.length],
      x: `${(i * 37 + 7) % 95}%`,
      y: `${(i * 53 + 11) % 90}%`,
      size: 20 + (i % 4) * 14,
      duration: 6 + (i % 5) * 2.2,
      delay: (i * 0.7) % 8,
      color: COLORS[i % COLORS.length],
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {symbols.map((s) => (
        <motion.span
          key={s.id}
          className="suit-particle select-none"
          style={{
            left: s.x,
            top: s.y,
            fontSize: s.size,
            color: s.color,
            lineHeight: 1,
          }}
          animate={{
            y: ["0px", "-35px", "-12px", "-45px", "0px"],
            rotate: [0, 6, -3, 8, 0],
            opacity: [0.4, 1, 0.6, 1, 0.4],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.char}
        </motion.span>
      ))}
    </div>
  );
}
