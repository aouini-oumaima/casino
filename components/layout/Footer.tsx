"use client";

import Link from "next/link";

const navLinks = [
  { label: "Home",                href: "/"        },
  { label: "About Us",            href: "/about"   },
  { label: "Contact",             href: "/contact" },
  { label: "Terms & Conditions",  href: "/terms"   },
  { label: "Privacy Policy",      href: "/privacy" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#080808", borderTop: "1px solid #1c1c1c" }}
    >
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #e63946 30%, #e63946 70%, transparent)" }} />

      <div className="relative max-w-6xl mx-auto px-5 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10"
          style={{ borderBottom: "1px solid #1c1c1c" }}>

          {/* Brand — spans 2 cols */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-md rotate-6" style={{ background: "#e63946" }} />
                <div className="absolute inset-0 rounded-md flex items-center justify-center text-sm font-black"
                  style={{ background: "#141414", border: "1px solid #333", color: "#f0c040" }}>♠</div>
              </div>
              <span
                className="text-2xl font-black"
                style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#f8f8f8", letterSpacing: "0.03em" }}
              >
                BEAM<span style={{ color: "#e63946" }}>4</span>MEDIA
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: "#666" }}>
              The #1 guide to licensed online casinos.
              Independent reviews, verified bonuses, always up to date.
            </p>
            {/* Trust badges */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { label: "18+",  color: "#e63946", bg: "rgba(230,57,70,0.1)"  },
                { label: "SRIJ", color: "#00c254", bg: "rgba(0,194,84,0.1)"   },
                { label: "SSL",  color: "#f0c040", bg: "rgba(240,192,64,0.1)" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider"
                  style={{ background: b.bg, border: `1px solid ${b.color}33`, color: b.color }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4
              className="text-xs font-black uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#e63946" }}
            >
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm no-underline transition-colors duration-200 hover:text-white w-fit"
                  style={{ color: "#666" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Responsible gaming */}
          <div>
            <h4
              className="text-xs font-black uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#e63946" }}
            >
              Responsible Gambling
            </h4>
            <div className="flex flex-col gap-3 text-sm" style={{ color: "#666" }}>
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer"
                className="no-underline hover:text-white transition-colors" style={{ color: "#666" }}>
                → BeGambleAware.org
              </a>
              <a href="https://www.srij.turismodeportugal.pt" target="_blank" rel="noopener noreferrer"
                className="no-underline hover:text-white transition-colors" style={{ color: "#666" }}>
                → SRIJ Regulator
              </a>
              <a href="tel:08088020133" className="no-underline" style={{ color: "#666" }}>
                📞 0808 8020 133
              </a>
              <span className="text-xs" style={{ color: "#444" }}>For 18+ only</span>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div
          className="rounded-xl px-5 py-4 my-7 text-xs leading-relaxed"
          style={{ background: "#111", border: "1px solid #1c1c1c", color: "#444" }}
        >
          <strong style={{ color: "#666" }}>Affiliate disclosure:</strong>{" "}
          Beam4media may receive commissions from casinos listed on this site. This does not affect our editorial independence.
          Reviews based on independent testing. Gamble responsibly — 18+.
        </div>

        {/* Bottom bar — suits decoration */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#444" }}>
            © {new Date().getFullYear()} Beam4media · Lisbon, Portugal
          </p>
          <div className="flex items-center gap-4">
            {["♠", "♥", "♦", "♣"].map((s, i) => (
              <span key={i} className="text-base font-serif select-none"
                style={{ color: s === "♥" || s === "♦" ? "rgba(230,57,70,0.4)" : "rgba(255,255,255,0.1)" }}>
                {s}
              </span>
            ))}
          </div>
          <p className="text-xs" style={{ color: "#444" }}>
            Impartial reviews · Verified promotions
          </p>
        </div>
      </div>
    </footer>
  );
}
