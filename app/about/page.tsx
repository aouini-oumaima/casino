import type { Metadata } from "next";
import Link from "next/link";
import { MissionSection } from "@/components/about/MissionSection";
import { ReviewProcess } from "@/components/about/ReviewProcess";
import { TeamSection } from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Beam4media — the independent guide to licensed online casinos. Who we are, how we work, why we're different.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-28 text-center overflow-hidden"
        style={{ background: "#080808" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-72"
            style={{ background: "radial-gradient(ellipse at top, rgba(230,57,70,0.12) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-40"
            style={{ background: "radial-gradient(ellipse at bottom, rgba(0,194,84,0.07) 0%, transparent 70%)" }}
          />
        </div>

        <span className="absolute top-8 left-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#f8f8f8" }}>♠</span>
        <span className="absolute top-8 right-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#e63946" }}>♥</span>
        <span className="absolute bottom-8 left-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#e63946" }}>♦</span>
        <span className="absolute bottom-8 right-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#f8f8f8" }}>♣</span>

        <div className="relative max-w-3xl mx-auto px-5">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "rgba(230,57,70,0.08)", border: "1px solid rgba(230,57,70,0.3)", color: "#e63946" }}
          >
            ♛ About Beam4media
          </div>
          <h1
            className="leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(2.5rem, 7vw, 4rem)",
              fontWeight: 700,
              color: "#f8f8f8",
            }}
          >
            Your{" "}
            <span className="red-text">Independent</span>{" "}Guide
          </h1>
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#666" }}>
            The trusted guide to licensed online casinos.
            Honest reviews, transparent information, responsible gambling.
          </p>
        </div>
      </section>

      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #e63946 30%, #e63946 70%, transparent)" }} />

      <MissionSection />
      <ReviewProcess />
      <TeamSection />

      {/* Responsible Gaming */}
      <section
        className="py-16"
        style={{ background: "#0a0a0a", borderTop: "1px solid #1c1c1c" }}
      >
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="text-3xl mb-4">🛡️</div>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f8f8f8",
            }}
          >
            Commitment to Responsible Gambling
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: "#666" }}>
            Every review includes information on self-exclusion and deposit limits.
            We believe healthy entertainment starts with honest information.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer"
              className="btn-secondary px-6 py-3 rounded-xl text-sm font-bold no-underline inline-block">
              BeGambleAware.org
            </a>
            <a href="https://www.srij.turismodeportugal.pt" target="_blank" rel="noopener noreferrer"
              className="btn-ghost px-6 py-3 rounded-xl text-sm font-semibold no-underline inline-block">
              SRIJ.pt
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "#080808", borderTop: "1px solid #1c1c1c" }}>
        <div className="max-w-xl mx-auto px-5 text-center">
          <h2
            className="mb-3"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f8f8f8",
            }}
          >
            Have a question?
          </h2>
          <p className="text-sm mb-7" style={{ color: "#666" }}>
            Our team is available to help
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl font-bold text-sm no-underline inline-block" style={{ color: "#040a06" }}>
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}
