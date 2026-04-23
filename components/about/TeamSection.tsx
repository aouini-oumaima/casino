"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "João Silva",
    role: "Lead Casino Reviewer",
    years: "8 anos",
    bio: "Especialista em regulamentação SRIJ e auditoria de plataformas. Avaliou mais de 200 casinos na Europa.",
    topColor: "#e63946",
    initials: "JS",
    tag: "♠ Fundador",
    tagColor: "#e63946",
    tagBg: "rgba(230,57,70,0.1)",
    tagBorder: "rgba(230,57,70,0.25)",
  },
  {
    name: "Ana Costa",
    role: "Especialista em Jogo Responsável",
    years: "6 anos",
    bio: "Psicóloga clínica especializada em dependências. Garante recursos de suporte em cada avaliação.",
    topColor: "#00c254",
    initials: "AC",
    tag: "♥ Saúde & Bem-estar",
    tagColor: "#00c254",
    tagBg: "rgba(0,194,84,0.1)",
    tagBorder: "rgba(0,194,84,0.25)",
  },
  {
    name: "Miguel Ferreira",
    role: "Analista de Segurança Técnica",
    years: "10 anos",
    bio: "Especialista em cibersegurança. Audita SSL, firewalls e conformidade RGPD de cada plataforma.",
    topColor: "#f0c040",
    initials: "MF",
    tag: "♦ Segurança & Tech",
    tagColor: "#f0c040",
    tagBg: "rgba(240,192,64,0.1)",
    tagBorder: "rgba(240,192,64,0.25)",
  },
];

export function TeamSection() {
  return (
    <section className="py-20" style={{ background: "#0a0a0a" }}>
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display, Oswald, sans-serif)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#f8f8f8",
            }}
          >
            A Nossa <span className="gold-text">Equipa</span>
          </h2>
          <p className="text-sm" style={{ color: "#666" }}>
            Profissionais dedicados a garantir as avaliações mais rigorosas do mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              className="rounded-2xl overflow-hidden group"
              style={{
                background: "#141414",
                border: "1px solid #1c1c1c",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, borderColor: `${m.topColor}44` }}
            >
              <div className="h-1 w-full" style={{ background: m.topColor }} />

              <div className="p-7 text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-white mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                  style={{ background: m.topColor, boxShadow: `0 8px 24px ${m.topColor}44` }}
                >
                  {m.initials}
                </div>

                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                  style={{ background: m.tagBg, color: m.tagColor, border: `1px solid ${m.tagBorder}` }}
                >
                  {m.tag}
                </span>

                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-display, Oswald, sans-serif)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#f8f8f8",
                  }}
                >
                  {m.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: m.topColor }}>
                  {m.role}
                </p>
                <p className="text-xs mb-4" style={{ color: "#444" }}>
                  {m.years} de experiência
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                  {m.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
