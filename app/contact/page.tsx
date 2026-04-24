import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Beam4media team. Questions, feedback or partnerships — we reply within 24 hours.",
};

export default function ContactPage() {
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
        </div>
        <span className="absolute top-8 left-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#f8f8f8" }}>♠</span>
        <span className="absolute top-8 right-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#e63946" }}>♥</span>
        <span className="absolute bottom-8 left-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#e63946" }}>♦</span>
        <span className="absolute bottom-8 right-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#f8f8f8" }}>♣</span>

        <div className="relative max-w-2xl mx-auto px-5">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "rgba(0,194,84,0.08)", border: "1px solid rgba(0,194,84,0.3)", color: "#00c254" }}
          >
            ♦ Get In Touch
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
            Contact{" "}
            <span style={{ color: "#e63946" }}>BEAM</span><span style={{ color: "#f8f8f8" }}>4</span><span style={{ color: "#e63946" }}>MEDIA</span>
          </h1>
          <p className="text-sm" style={{ color: "#666" }}>
            Questions, feedback or partnerships — we're here to help
          </p>
        </div>
      </section>

      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #e63946 30%, #e63946 70%, transparent)" }} />

      {/* Two-column */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
