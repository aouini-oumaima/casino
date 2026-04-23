"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Verificação de Licença",   desc: "Confirmamos licença SRIJ activa. Sem licença válida, não avaliamos.",                        color: "#e63946" },
  { num: "02", title: "Auditoria de Segurança",   desc: "Verificamos SSL 256-bit, firewall e conformidade com RGPD.",                                  color: "#00c254" },
  { num: "03", title: "Análise de Bónus",          desc: "Lemos todos os T&Cs — requisitos de apostas, limites e exclusões.",                           color: "#f0c040" },
  { num: "04", title: "Teste de Jogos",            desc: "Testamos slots, mesa e live casino — verificando fairness e software.",                       color: "#e63946" },
  { num: "05", title: "Teste de Pagamentos",       desc: "Realizamos depósitos e levantamentos reais — velocidade, limites, taxas.",                    color: "#00c254" },
  { num: "06", title: "Avaliação de Suporte",      desc: "Avaliamos tempo de resposta, competência e disponibilidade do apoio ao cliente.",             color: "#f0c040" },
];

export function ReviewProcess() {
  return (
    <section
      className="py-20"
      style={{ background: "#0d0d0d", borderTop: "1px solid #1c1c1c", borderBottom: "1px solid #1c1c1c" }}
    >
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
            Como <span className="green-text">Avaliamos</span> os Casinos
          </h2>
          <p className="text-sm" style={{ color: "#666" }}>
            Processo rigoroso de 6 etapas — só aprovamos o que passou em tudo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="rounded-xl p-6 group"
              style={{
                background: "#141414",
                border: "1px solid #1c1c1c",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ borderColor: `${s.color}55`, y: -3 }}
            >
              <div
                className="text-4xl font-black mb-3 transition-all duration-300 group-hover:scale-105"
                style={{
                  fontFamily: "var(--font-display, Oswald, sans-serif)",
                  color: s.color,
                }}
              >
                {s.num}
              </div>
              <h3
                className="text-sm font-black mb-2 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#f8f8f8" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {s.desc}
              </p>
              <div
                className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
