"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Início",    href: "/" },
  { label: "Sobre Nós", href: "/about" },
  { label: "Contacto",  href: "/contact" },
];

export function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname               = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? "glass" : ""}`}
        style={{ background: scrolled ? undefined : "#0a0a0a", borderBottom: scrolled ? undefined : "1px solid #1c1c1c" }}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline group">
            {/* Icon: two playing cards stacked */}
            <div className="relative w-8 h-8">
              <div
                className="absolute inset-0 rounded-md rotate-6 transition-transform duration-300 group-hover:rotate-12"
                style={{ background: "#e63946" }}
              />
              <div
                className="absolute inset-0 rounded-md flex items-center justify-center text-xs font-black"
                style={{ background: "#141414", border: "1px solid #333", color: "#f0c040" }}
              >
                ♠
              </div>
            </div>
            <span
              className="text-xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#f8f8f8", letterSpacing: "0.02em" }}
            >
              BEAM<span style={{ color: "#e63946" }}>4</span>MEDIA
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative px-4 py-2 text-sm font-semibold rounded-lg no-underline transition-colors duration-200"
                  style={{
                    color: active ? "#e63946" : "#aaaaaa",
                    fontFamily: "var(--font-display, Oswald, sans-serif)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  <span className="relative z-10 hover:text-white transition-colors">
                    {l.label}
                  </span>
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(230,57,70,0.1)", border: "1px solid rgba(230,57,70,0.3)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="btn-primary ml-4 px-5 py-2 rounded-lg text-sm"
              style={{ color: "#040a06" }}
            >
              Jogar Agora ♠
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#e63946", border: "1px solid #2a2a2a" }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 top-23 z-30 md:hidden px-4"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <div
              className="rounded-2xl p-4 shadow-2xl"
              style={{ background: "rgba(14,14,14,0.98)", border: "1px solid rgba(230,57,70,0.25)", backdropFilter: "blur(20px)" }}
            >
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    className="flex items-center px-4 py-3 rounded-xl text-sm font-bold no-underline mb-1 uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-display, Oswald, sans-serif)",
                      color: pathname === l.href ? "#e63946" : "#f8f8f8",
                      background: pathname === l.href ? "rgba(230,57,70,0.1)" : "transparent",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {pathname === l.href && <span className="mr-2 text-red-500">▶</span>}
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="btn-primary flex w-full mt-2 py-3 rounded-xl text-sm justify-center"
                style={{ color: "#040a06" }}
              >
                Jogar Agora ♠
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
