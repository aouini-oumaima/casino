"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    title: "1. Introdução",
    content: `Bem-vindo à Beam4media. Este site é um guia de afiliados de casinos online destinado a jogadores portugueses. Ao utilizar este site, concorda com os presentes Termos e Condições.

A Beam4media é um site de informação independente que avalia e compara casinos online licenciados pelo SRIJ em Portugal. Recebemos comissões dos casinos que recomendamos, conforme explicado na nossa política de afiliados abaixo.`,
  },
  {
    title: "2. Elegibilidade",
    content: `Para utilizar este site e aceder aos casinos que recomendamos, deve:

• Ter 18 anos ou mais (ou a idade legal mínima na sua jurisdição, se superior)
• Residir numa jurisdição onde o jogo online é legal
• Não estar registado em programas de autoexclusão
• Ter capacidade legal para celebrar contratos vinculativos

A Beam4media não incentiva o jogo por menores. Se tiver conhecimento de alguém menor de 18 anos a utilizar este site, contacte-nos imediatamente.`,
  },
  {
    title: "3. Divulgação de Afiliados",
    content: `A Beam4media mantém relações de afiliados com alguns dos casinos listados neste site. Isto significa que podemos receber uma comissão quando um utilizador clica num link e realiza um depósito num casino recomendado.

Esta relação financeira não afeta a nossa independência editorial. As nossas avaliações são baseadas em critérios objetivos e testes independentes. Não recomendamos casinos apenas porque pagam comissões mais altas.

Todos os links de afiliados são claramente identificados e cada avaliação é transparente sobre a nossa relação com o casino em questão.`,
  },
  {
    title: "4. Exatidão das Informações",
    content: `Fazemos todos os esforços para manter as informações neste site atualizadas e precisas. No entanto:

• Os bónus e promoções mudam frequentemente — verifique sempre no site do casino antes de se registar
• As condições dos bónus (T&Cs) são da responsabilidade dos casinos, não da Beam4media
• As avaliações refletem a nossa opinião no momento da publicação
• Os jogos disponíveis, métodos de pagamento e outros detalhes podem mudar sem aviso prévio

Recomendamos sempre verificar as informações diretamente no site do casino antes de tomar qualquer decisão.`,
  },
  {
    title: "5. Jogo Responsável",
    content: `A Beam4media está comprometida com a promoção do jogo responsável. O jogo deve ser encarado como entretenimento, nunca como fonte de rendimento.

Recursos de apoio:
• BeGambleAware.org — apoio e informação sobre jogo problemático
• SRIJ.turismodeportugal.pt — regulador oficial em Portugal
• Linha de apoio gratuita: 0808 8020 133

Utilize as ferramentas de autoexclusão disponíveis nos casinos licenciados. Se sentir que o jogo está a afetar negativamente a sua vida, procure ajuda profissional.`,
  },
  {
    title: "6. Propriedade Intelectual",
    content: `Todo o conteúdo deste site — incluindo texto, imagens, logótipos, avaliações e design — é propriedade da Beam4media e está protegido pelas leis de direitos de autor aplicáveis.

Não pode reproduzir, distribuir ou modificar o nosso conteúdo sem autorização prévia por escrito. Pode partilhar links para as nossas páginas, desde que não seja de forma enganosa.

As marcas e logótipos dos casinos listados são propriedade dos respetivos proprietários.`,
  },
  {
    title: "7. Limitação de Responsabilidade",
    content: `A Beam4media não é um operador de casino e não é responsável por:

• Decisões dos casinos relativamente a contas, pagamentos ou bónus
• Perdas financeiras resultantes de jogar em qualquer casino
• Mudanças nas ofertas dos casinos após a publicação das nossas avaliações
• Conteúdo de sites de terceiros para os quais fornecemos links
• Problemas técnicos nos sites dos casinos

O uso deste site e dos casinos que recomendamos é por sua própria conta e risco.`,
  },
  {
    title: "8. Privacidade",
    content: `A sua privacidade é importante para nós. Recolhemos e processamos dados pessoais de acordo com o Regulamento Geral de Proteção de Dados (RGPD) e a nossa Política de Privacidade.

Consulte a nossa Política de Privacidade completa em /privacy para entender como recolhemos, utilizamos e protegemos os seus dados pessoais.`,
  },
  {
    title: "9. Alterações aos Termos",
    content: `Reservamo-nos o direito de atualizar estes Termos e Condições a qualquer momento. As alterações entram em vigor imediatamente após publicação no site.

É sua responsabilidade verificar periodicamente estes termos. A utilização continuada do site após alterações constitui aceitação dos novos termos.`,
  },
  {
    title: "10. Contacto",
    content: `Para questões relacionadas com estes Termos e Condições, entre em contacto connosco:

Email: contact@beam4media.com
Localização: Lisboa, Portugal

Respondemos a todas as questões em até 24 horas úteis.`,
  },
];

function AccordionItem({
  title,
  content,
  isOpen,
  onToggle,
  index,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden mb-3"
      style={{
        background: "#141414",
        border: isOpen ? "1px solid rgba(230,57,70,0.4)" : "1px solid #1c1c1c",
        boxShadow: isOpen ? "0 4px 24px rgba(230,57,70,0.08)" : "none",
      }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors group"
        onClick={onToggle}
      >
        <span
          className="font-bold text-sm md:text-base transition-colors"
          style={{
            fontFamily: "var(--font-display, Oswald, sans-serif)",
            color: isOpen ? "#e63946" : "#f8f8f8",
          }}
        >
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ color: "#e63946", flexShrink: 0 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6">
              <div
                className="h-px w-full mb-4"
                style={{ background: "rgba(230,57,70,0.2)" }}
              />
              <p
                className="text-sm leading-relaxed whitespace-pre-line"
                style={{ color: "#666" }}
              >
                {content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TermsContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Disclosure note */}
      <div
        className="rounded-xl p-5 mb-8 text-sm"
        style={{
          background: "rgba(230,57,70,0.06)",
          border: "1px solid rgba(230,57,70,0.25)",
          color: "#666",
        }}
      >
        <strong style={{ color: "#e63946" }}>♦ Nota Importante:</strong> A Beam4media é um site de
        afiliados. Podemos receber comissões de casinos listados neste site. Leia estes termos na
        íntegra para compreender as nossas práticas e responsabilidades.
      </div>

      {sections.map((s, i) => (
        <AccordionItem
          key={i}
          index={i}
          title={s.title}
          content={s.content}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </>
  );
}
