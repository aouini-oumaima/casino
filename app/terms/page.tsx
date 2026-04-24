import type { Metadata } from "next";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Beam4media Terms & Conditions — affiliate disclosure, eligibility, responsible gambling and limitation of liability.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 text-center overflow-hidden"
        style={{ background: "#080808" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-64"
            style={{ background: "radial-gradient(ellipse at top, rgba(230,57,70,0.1) 0%, transparent 70%)" }}
          />
        </div>
        <span className="absolute top-8 left-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#f8f8f8" }}>♠</span>
        <span className="absolute top-8 right-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#f8f8f8" }}>♣</span>

        <div className="relative max-w-2xl mx-auto px-5">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "rgba(230,57,70,0.08)", border: "1px solid rgba(230,57,70,0.3)", color: "#e63946" }}
          >
            ♣ Legal Documentation
          </div>
          <h1
            className="leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(2.5rem, 7vw, 4rem)",
              fontWeight: 700,
              color: "#f8f8f8",
            }}
          >
            Terms &{" "}
            <span style={{ color: "#e63946" }}>Conditions</span>
          </h1>
          <p className="text-sm" style={{ color: "#666" }}>
            Last updated: April 2025
          </p>
        </div>
      </section>

      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #e63946 30%, #e63946 70%, transparent)" }} />

      <section className="py-16" style={{ background: "#0a0a0a" }}>
        <div className="max-w-3xl mx-auto px-5">
          <TermsContent />
        </div>
      </section>
    </>
  );
}
