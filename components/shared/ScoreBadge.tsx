"use client";

interface ScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

export function ScoreBadge({ score, size = "md" }: ScoreBadgeProps) {
  const filled = Math.round(score / 2);

  const px = size === "sm" ? "px-2.5 py-0.5 text-xs" : size === "lg" ? "px-4 py-1.5 text-base" : "px-3 py-1 text-sm";
  const starSize = size === "sm" ? 10 : size === "lg" ? 15 : 12;

  return (
    <div className="flex items-center gap-2">
      <div
        className={`font-black rounded-lg ${px} inline-flex items-center gap-1`}
        style={{
          background: "linear-gradient(135deg, #5a470a, #d4af37, #f0d565)",
          color: "#03030a",
          boxShadow: "0 2px 8px rgba(212,175,55,0.3)",
        }}
      >
        {score.toFixed(1)}
        <span style={{ fontSize: starSize - 2, opacity: 0.7 }}>★</span>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: starSize,
              color: i < filled ? "#d4af37" : "#1a1a2e",
              filter: i < filled ? "drop-shadow(0 0 3px rgba(212,175,55,0.6))" : "none",
              transition: "all 0.2s",
            }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
