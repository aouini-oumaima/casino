"use client";

import { motion } from "framer-motion";

const features = [
  {
    emoji: "🔐",
    title: "Máxima Segurança",
    desc: "Na Beam4media, destacamos apenas plataformas licenciadas pelo SRIJ que utilizam protocolos de segurança avançados para proteger os seus dados pessoais e financeiros.",
    color: "#00c254",
    glow: "rgba(0,194,84,0.35)",
    border: "rgba(0,194,84,0.2)",
    bg: "rgba(0,194,84,0.04)",
  },
  {
    emoji: "🎁",
    title: "Ofertas Exclusivas",
    desc: "Na Beam4media, encontrará os melhores bónus de boas-vindas e promoções exclusivas para jogadores em Portugal.",
    color: "#e63946",
    glow: "rgba(230,57,70,0.35)",
    border: "rgba(230,57,70,0.2)",
    bg: "rgba(230,57,70,0.04)",
  },
  {
    emoji: "👥",
    title: "Comunidade Ativa",
    desc: "Milhares de jogadores em Portugal confiam na Beam4media todos os dias para escolher os melhores sites de jogo.",
    color: "#f0c040",
    glow: "rgba(240,192,64,0.35)",
    border: "rgba(240,192,64,0.2)",
    bg: "rgba(240,192,64,0.04)",
  },
  {
    emoji: "⏰",
    title: "Disponível 24/7",
    desc: "Jogue quando quiser! Os casinos recomendados pela Beam4media oferecem suporte 24/7 e assistência ao vivo sempre que precisar.",
    color: "#00c254",
    glow: "rgba(0,194,84,0.35)",
    border: "rgba(0,194,84,0.2)",
    bg: "rgba(0,194,84,0.04)",
  },
  {
    emoji: "💳",
    title: "Transações Seguras",
    desc: "Os sites listados na Beam4media oferecem métodos de pagamento seguros, protegidos por tecnologia de encriptação avançada.",
    color: "#e63946",
    glow: "rgba(230,57,70,0.35)",
    border: "rgba(230,57,70,0.2)",
    bg: "rgba(230,57,70,0.04)",
  },
  {
    emoji: "📞",
    title: "Suporte Especializado",
    desc: "Conte com suporte profissional em português — a equipa de apoio das plataformas parceiras da Beam4media está pronta para ajudar sempre que precisar.",
    color: "#f0c040",
    glow: "rgba(240,192,64,0.35)",
    border: "rgba(240,192,64,0.2)",
    bg: "rgba(240,192,64,0.04)",
  },
];

const EASE = { ease: [0.22, 1, 0.36, 1] as const };

export function WhyLicensed() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#0a0a0a" }}>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,194,84,0.04) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-5">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ...EASE }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "rgba(0,194,84,0.08)", border: "1px solid rgba(0,194,84,0.35)", color: "#00c254" }}
          >
            ♦ Porquê Casinos Licenciados?
          </div>

          <h2
            className="mb-5 leading-tight"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "#f8f8f8",
              textShadow: "0 0 40px rgba(0,194,84,0.1)",
            }}
          >
            PORQUÊ ESCOLHER{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #009940, #00c254, #00e061, #00c254, #009940)",
                backgroundSize: "300% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
                filter: "drop-shadow(0 0 12px rgba(0,194,84,0.5))",
              }}
            >
              CASINOS LICENCIADOS?
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "#777" }}
          >
            Na <strong style={{ color: "#f8f8f8" }}>Beam4media</strong>, valorizamos uma experiência de jogo segura, divertida e transparente.
            Ao apostar em plataformas licenciadas, garante a proteção dos seus dados, pagamentos justos e total conformidade com as regulamentações SRIJ —
            para jogar sempre com tranquilidade e confiança.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden"
              style={{ background: f.bg, border: `1px solid ${f.border}` }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ...EASE }}
              whileHover={{
                borderColor: f.color,
                boxShadow: `0 0 32px ${f.glow}, 0 8px 32px rgba(0,0,0,0.6)`,
                y: -4,
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${f.glow} 0%, transparent 70%)`, transform: "translate(30%,-30%)" }}
                aria-hidden="true"
              />

              {/* Emoji + title */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: `rgba(${f.color === "#f0c040" ? "240,192,64" : f.color === "#00c254" ? "0,194,84" : "230,57,70"},0.1)`, border: `1px solid ${f.border}` }}
                  aria-hidden="true"
                >
                  {f.emoji}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display, Oswald, sans-serif)",
                    fontWeight: 900,
                    fontSize: 18,
                    color: f.color,
                    letterSpacing: "0.04em",
                    textShadow: `0 0 14px ${f.glow}`,
                    lineHeight: 1.1,
                  }}
                >
                  {f.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#888" }}>
                {f.desc}
              </p>

              {/* Bottom accent bar on hover */}
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500 mt-auto"
                style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
