"use client";

import { useState } from "react";

/* ─────────────────────────────────────────
   European roulette wheel — full SVG
   Numbers in correct wheel order (0–36)
───────────────────────────────────────── */

const WHEEL_ORDER = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13,
  36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14,
  31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];
const RED_SET = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);

const CX = 200, CY = 200, N = 37;
const R_OUTER_RIM  = 197;
const R_SEG_OUT    = 190;
const R_SEG_IN     = 126;
const R_GOLD_BAND  = 119;
const R_FELT       = 108;
const R_DIAMONDS   = 88;
const R_HUB_OUTER  = 46;
const R_HUB_INNER  = 20;

function segColor(n: number) {
  if (n === 0) return "#0f5c22";
  return RED_SET.has(n) ? "#9b1c1c" : "#141414";
}

function seg(i: number, ro: number, ri: number): string {
  const step = (2 * Math.PI) / N;
  const a1 = step * i - Math.PI / 2 + 0.012;
  const a2 = step * (i + 1) - Math.PI / 2 - 0.012;
  const x1 = (CX + ro * Math.cos(a1)).toFixed(2);
  const y1 = (CY + ro * Math.sin(a1)).toFixed(2);
  const x2 = (CX + ro * Math.cos(a2)).toFixed(2);
  const y2 = (CY + ro * Math.sin(a2)).toFixed(2);
  const x3 = (CX + ri * Math.cos(a2)).toFixed(2);
  const y3 = (CY + ri * Math.sin(a2)).toFixed(2);
  const x4 = (CX + ri * Math.cos(a1)).toFixed(2);
  const y4 = (CY + ri * Math.sin(a1)).toFixed(2);
  return `M ${x1} ${y1} A ${ro} ${ro} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${ri} ${ri} 0 0 0 ${x4} ${y4} Z`;
}

function midAngle(i: number) {
  return (2 * Math.PI / N) * (i + 0.5) - Math.PI / 2;
}

function midXY(i: number, r: number) {
  const a = midAngle(i);
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}

export function RouletteWheel() {
  const [hovered, setHovered] = useState(false);
  const spinDur = hovered ? "1.2s" : "5s";

  return (
    <div
      className="relative select-none"
      style={{ width: "100%", maxWidth: 420, margin: "0 auto" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      {/* Outer ambient glow */}
      <div
        className="roulette-glow"
        style={{ transition: "opacity 0.4s ease", opacity: hovered ? 1 : 0.7 }}
      />

      <svg
        viewBox="0 0 400 400"
        style={{
          width: "100%",
          height: "auto",
          filter: hovered
            ? "drop-shadow(0 0 48px rgba(240,192,64,0.6)) drop-shadow(0 0 24px rgba(0,194,84,0.4))"
            : "drop-shadow(0 0 28px rgba(240,192,64,0.35)) drop-shadow(0 0 14px rgba(0,0,0,0.9))",
          transition: "filter 0.4s ease",
        }}
        aria-label="Roleta de casino europeia a girar"
        role="img"
      >
        <defs>
          <radialGradient id="rw-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffe566" />
            <stop offset="35%"  stopColor="#f0c040" />
            <stop offset="70%"  stopColor="#b08820" />
            <stop offset="100%" stopColor="#7a5a10" />
          </radialGradient>
          <radialGradient id="rw-felt" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#115e28" />
            <stop offset="60%"  stopColor="#0a4a18" />
            <stop offset="100%" stopColor="#062e10" />
          </radialGradient>
          <radialGradient id="rw-rim" cx="50%" cy="50%" r="50%">
            <stop offset="88%"  stopColor="#8b6510" />
            <stop offset="100%" stopColor="#ffe566" />
          </radialGradient>
          <linearGradient id="rw-gold-band" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#b08820" />
            <stop offset="50%"  stopColor="#f0c040" />
            <stop offset="100%" stopColor="#b08820" />
          </linearGradient>
        </defs>

        {/* ── Spinning group ── */}
        <g style={{ transformOrigin: `${CX}px ${CY}px`, animation: `rouletteSpin ${spinDur} linear infinite`, transition: "animation-duration 0.5s ease" }}>

          {/* Outer metallic rim */}
          <circle cx={CX} cy={CY} r={R_OUTER_RIM + 2} fill="url(#rw-rim)" />
          <circle cx={CX} cy={CY} r={R_OUTER_RIM}     fill="#6a4e10" />
          <circle cx={CX} cy={CY} r={R_OUTER_RIM - 1} fill="#1a1a1a" />

          {/* Number pockets */}
          {WHEEL_ORDER.map((num, i) => {
            const pos = midXY(i, (R_SEG_OUT + R_SEG_IN) / 2);
            const deg = midAngle(i) * 180 / Math.PI + 90;
            const isGreen = num === 0;
            const isRed   = RED_SET.has(num);
            return (
              <g key={i}>
                <path
                  d={seg(i, R_SEG_OUT, R_SEG_IN)}
                  fill={segColor(num)}
                  stroke="#c8970a"
                  strokeWidth="0.6"
                />
                {/* Number highlight border */}
                <path
                  d={seg(i, R_SEG_OUT - 1, R_SEG_IN + 2)}
                  fill="none"
                  stroke={isGreen ? "rgba(0,200,80,0.3)" : isRed ? "rgba(220,50,50,0.25)" : "rgba(255,255,255,0.07)"}
                  strokeWidth="0.8"
                />
                {/* Number text */}
                <text
                  x={pos.x.toFixed(2)}
                  y={pos.y.toFixed(2)}
                  textAnchor="middle"
                  dominantBaseline="central"
                  transform={`rotate(${deg.toFixed(1)}, ${pos.x.toFixed(2)}, ${pos.y.toFixed(2)})`}
                  fontSize="9.5"
                  fontWeight="800"
                  fill="white"
                  fontFamily="Arial, Helvetica, sans-serif"
                  style={{ paintOrder: "stroke", stroke: "rgba(0,0,0,0.6)", strokeWidth: 1 }}
                >
                  {num}
                </text>
              </g>
            );
          })}

          {/* Gold separator band */}
          <circle cx={CX} cy={CY} r={R_SEG_IN}    fill="url(#rw-gold-band)" />
          <circle cx={CX} cy={CY} r={R_GOLD_BAND}  fill="#1c1c1c" />

          {/* Green felt */}
          <circle cx={CX} cy={CY} r={R_FELT} fill="url(#rw-felt)" />

          {/* Felt cross lines */}
          {[0, 45, 90, 135].map((angle) => (
            <line
              key={angle}
              x1={CX + R_FELT * Math.cos((angle * Math.PI) / 180)}
              y1={CY + R_FELT * Math.sin((angle * Math.PI) / 180)}
              x2={CX - R_FELT * Math.cos((angle * Math.PI) / 180)}
              y2={CY - R_FELT * Math.sin((angle * Math.PI) / 180)}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.5"
            />
          ))}

          {/* Diamond markers on felt */}
          {Array.from({ length: 8 }, (_, i) => {
            const a = (i / 8) * 2 * Math.PI;
            return (
              <circle
                key={i}
                cx={CX + R_DIAMONDS * Math.cos(a)}
                cy={CY + R_DIAMONDS * Math.sin(a)}
                r={3.5}
                fill="#f0c040"
                opacity={0.8}
                stroke="#b08820"
                strokeWidth="0.5"
              />
            );
          })}

          {/* Hub outer ring */}
          <circle cx={CX} cy={CY} r={R_HUB_OUTER + 2} fill="#f0c040" opacity={0.3} />
          <circle cx={CX} cy={CY} r={R_HUB_OUTER}     fill="#141414" stroke="#b08820" strokeWidth="1.5" />
          <circle cx={CX} cy={CY} r={R_HUB_OUTER - 5} fill="url(#rw-hub)" />
          <circle cx={CX} cy={CY} r={R_HUB_OUTER - 14} fill="#141414" stroke="#f0c040" strokeWidth="0.8" />
          <circle cx={CX} cy={CY} r={R_HUB_INNER}     fill="url(#rw-hub)" />
          <circle cx={CX} cy={CY} r={6}               fill="#ffe566" opacity={0.9} />
        </g>

        {/* ── Static ball (white ivory) ── */}
        <circle
          cx={CX + R_SEG_OUT - 9}
          cy={CY}
          r={5.5}
          fill="white"
          style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.9)) drop-shadow(0 0 2px rgba(0,0,0,0.8))" }}
        />

        {/* ── Static outer decorative studs ── */}
        {[0, 90, 180, 270].map((deg) => {
          const a = (deg * Math.PI) / 180;
          return (
            <circle
              key={deg}
              cx={CX + (R_OUTER_RIM + 1.5) * Math.cos(a)}
              cy={CY + (R_OUTER_RIM + 1.5) * Math.sin(a)}
              r={3}
              fill="#f0c040"
            />
          );
        })}
      </svg>

      {/* Hover hint */}
      <p
        className="text-center text-xs mt-2 uppercase tracking-widest transition-opacity duration-300"
        style={{ color: hovered ? "#f0c040" : "#333", fontSize: 10 }}
      >
        {hovered ? "⚡ A girar mais rápido!" : "Passe o cursor para acelerar"}
      </p>
    </div>
  );
}
