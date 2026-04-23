"use client";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: string;
}

export function SectionHeader({ title, subtitle, centered = true, accent }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {accent && (
        <div
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5 ${centered ? "" : ""}`}
          style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", color: "#d4af37" }}
        >
          {accent}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#f0f0f5" }}>
        <span className="gold-text">{title}</span>
      </h2>
      {subtitle && (
        <p
          className={`text-base ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}
          style={{ color: "#7a7a99" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
