"use client";

import { motion } from "framer-motion";

export function ResponsibleBanner() {
  return (
    <section className="py-14 px-5" style={{ background: "#0a0a0a" }}>
      <div className="max-w-4xl mx-auto space-y-5">

        {/* ── Responsible gambling card ── */}
        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-10 text-center"
          style={{ background: "#141414", border: "1px solid #2a2a2a" }}
        >
          {/* Red top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(90deg, #b02030, #e63946, #ff4757, #e63946, #b02030)", animation: "shimmer 4s linear infinite", backgroundSize: "200%" }}
          />

          {/* Corner suits */}
          <span className="absolute top-5 left-5 text-3xl font-serif opacity-10 select-none pointer-events-none" style={{ color: "#e63946" }} aria-hidden="true">♥</span>
          <span className="absolute bottom-5 right-5 text-3xl font-serif opacity-10 select-none pointer-events-none" style={{ color: "#e63946" }} aria-hidden="true">♦</span>

          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-4xl mb-4"
            aria-hidden="true"
          >
            ⚠️
          </motion.div>

          <h2
            className="mb-3"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 700,
              color: "#f8f8f8",
            }}
          >
            JOGO{" "}
            <span
              style={{
                color: "#e63946",
                textShadow: "0 0 16px rgba(230,57,70,0.5)",
                animation: "neonFlicker 8s infinite",
              }}
            >
              RESPONSÁVEL
            </span>
          </h2>

          <p className="text-sm leading-relaxed max-w-2xl mx-auto mb-7" style={{ color: "#888" }}>
            O jogo pode criar dependência. Apenas{" "}
            <strong style={{ color: "#f8f8f8" }}>maiores de 18 anos</strong>.
            Se o jogo estiver a afetar a sua vida, procure ajuda — é gratuito e confidencial.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-6 py-3 rounded-xl text-sm no-underline"
            >
              BeGambleAware.org
            </a>
            <a
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-6 py-3 rounded-xl text-sm no-underline"
            >
              SRIJ Regulador
            </a>
            <a href="tel:08088020133" className="text-sm font-bold no-underline" style={{ color: "#666" }}>
              📞 0808 8020 133
            </a>
          </div>
        </div>

        {/* ── Mobile accessibility card ── */}
        <motion.div
          className="relative rounded-2xl overflow-hidden px-6 py-5"
          style={{ background: "#101c12", border: "1px solid rgba(0,194,84,0.2)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Green top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: "linear-gradient(90deg, transparent, #00c254, transparent)" }}
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ background: "rgba(0,194,84,0.1)", border: "1px solid rgba(0,194,84,0.25)" }}
              aria-hidden="true"
            >
              📱
            </div>
            <div>
              <p
                className="text-sm font-black mb-1 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#00c254", letterSpacing: "0.06em" }}
              >
                Acessível a todos — incluindo quem tem dificuldade no telemóvel
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#666" }}>
                Este site foi desenhado com letras grandes, botões fáceis de tocar e navegação simples.
                Se encontrar alguma dificuldade, ligue-nos:{" "}
                <a href="tel:+351000000000" className="no-underline font-bold" style={{ color: "#00c254" }}>
                  +351 000 000 000
                </a>{" "}
                ou use o{" "}
                <a href="/contact" className="no-underline font-bold" style={{ color: "#00c254" }}>
                  formulário de contacto
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
