import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Beam4media — conformidade RGPD, dados recolhidos, direitos do utilizador. Lisboa, Portugal.",
};

const sections = [
  {
    id: "quem-somos",
    title: "1. Quem Somos",
    content: `A Beam4media é um site de avaliação e comparação de casinos online com sede em Lisboa, Portugal. Somos responsáveis pelo tratamento dos seus dados pessoais no âmbito da utilização deste site.

Contacto para questões de privacidade: contact@beam4media.com`,
  },
  {
    id: "dados-recolhidos",
    title: "2. Que Dados Recolhemos",
    content: `Recolhemos os seguintes tipos de dados:

Formulário de Contacto:
• Nome completo
• Endereço de email
• Assunto e conteúdo da mensagem

Analytics (anónimos):
• Páginas visitadas (sem identificação pessoal)
• Tipo de dispositivo e navegador
• País de acesso (não IP específico)
• Tempo de permanência no site

Não recolhemos dados financeiros, documentos de identificação ou qualquer informação sensível.`,
  },
  {
    id: "como-usamos",
    title: "3. Como Utilizamos os Seus Dados",
    content: `Utilizamos os seus dados para:

• Responder às suas questões enviadas através do formulário de contacto
• Melhorar o conteúdo e experiência do site com base em analytics anónimos
• Cumprir obrigações legais aplicáveis

Nunca vendemos, cedemos ou partilhamos os seus dados pessoais com terceiros para fins de marketing.

Base legal para o tratamento: consentimento (formulário) e interesse legítimo (analytics anónimos).`,
  },
  {
    id: "cookies",
    title: "4. Cookies",
    content: `Utilizamos os seguintes tipos de cookies:

Cookies Técnicos (necessários):
• Funcionamento básico do site
• Sessão de navegação

Cookies de Analytics (opcionais):
• Google Analytics (dados anónimos e agregados)
• Monitorização de tráfego sem identificação pessoal

Como gerir cookies:
Pode desativar cookies nas definições do seu navegador. Para o Google Analytics, pode usar a extensão de opt-out disponível em tools.google.com/dlpage/gaoptout.`,
  },
  {
    id: "links-terceiros",
    title: "5. Links para Terceiros",
    content: `Este site contém links para casinos online e outros sites externos. Quando clica nesses links, sai do nosso site e fica sujeito às políticas de privacidade desses terceiros.

Não somos responsáveis pelas práticas de privacidade dos casinos listados ou de qualquer outro site externo. Recomendamos a leitura das políticas de privacidade de cada plataforma antes de se registar.`,
  },
  {
    id: "retencao",
    title: "6. Retenção de Dados",
    content: `Mantemos os seus dados pessoais pelos seguintes períodos:

• Dados do formulário de contacto: 12 meses após o último contacto
• Analytics anónimos: processados em tempo real, sem armazenamento pessoal
• Logs técnicos: 30 dias

Após estes períodos, os dados são eliminados de forma segura. Pode solicitar a eliminação antecipada a qualquer momento.`,
  },
  {
    id: "direitos",
    title: "7. Os Seus Direitos (RGPD)",
    content: `Ao abrigo do Regulamento Geral de Proteção de Dados (RGPD), tem os seguintes direitos:

• Direito de Acesso — solicitar cópia dos dados que temos sobre si
• Direito de Retificação — corrigir dados incorretos ou incompletos
• Direito de Eliminação ("direito ao esquecimento")
• Direito de Limitação — restringir o tratamento dos seus dados
• Direito de Portabilidade — receber os seus dados em formato estruturado
• Direito de Oposição — opor-se ao tratamento com base em interesse legítimo

Para exercer qualquer destes direitos, contacte-nos em contact@beam4media.com. Responderemos em até 30 dias.

Tem também o direito de apresentar reclamação à CNPD em www.cnpd.pt.`,
  },
  {
    id: "contacto-dados",
    title: "8. Contacto para Questões de Dados",
    content: `Para qualquer questão relacionada com a proteção dos seus dados pessoais:

Email: contact@beam4media.com
Assunto: "Proteção de Dados — [o seu pedido]"
Localização: Lisboa, Portugal

Respondemos em até 30 dias úteis, conforme exigido pelo RGPD.`,
  },
  {
    id: "atualizacoes",
    title: "9. Atualizações a Esta Política",
    content: `Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nas nossas práticas ou na legislação aplicável.

A data da última atualização é indicada no topo desta página. Em caso de alterações significativas, informaremos os utilizadores de forma adequada.

A utilização continuada do site após alterações constitui aceitação da nova política.`,
  },
];

export default function PrivacyPage() {
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
            style={{ background: "radial-gradient(ellipse at top, rgba(0,194,84,0.1) 0%, transparent 70%)" }}
          />
        </div>
        <span className="absolute top-8 left-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#e63946" }}>♦</span>
        <span className="absolute top-8 right-8 text-5xl pointer-events-none select-none opacity-[0.06] font-serif" style={{ color: "#e63946" }}>♥</span>

        <div className="relative max-w-2xl mx-auto px-5">
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: "rgba(0,194,84,0.08)", border: "1px solid rgba(0,194,84,0.3)", color: "#00c254" }}
          >
            ♦ RGPD Conforme
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
            Política de{" "}
            <span style={{ color: "#00c254" }}>Privacidade</span>
          </h1>
          <p className="text-sm" style={{ color: "#666" }}>
            Última atualização: Abril 2025 · Conformidade com RGPD (UE) 2016/679
          </p>
        </div>
      </section>

      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #00c254 30%, #00c254 70%, transparent)" }} />

      <section className="py-16" style={{ background: "#0a0a0a" }}>
        <div className="max-w-3xl mx-auto px-5">

          {/* GDPR badge */}
          <div
            className="rounded-xl p-5 mb-8 text-sm"
            style={{
              background: "rgba(0,194,84,0.06)",
              border: "1px solid rgba(0,194,84,0.25)",
              color: "#666",
            }}
          >
            <strong style={{ color: "#00c254" }}>✓ Conformidade RGPD:</strong> A Beam4media cumpre
            com o Regulamento Geral de Proteção de Dados (UE) 2016/679. Os seus dados estão seguros connosco.
          </div>

          {/* Table of contents */}
          <div
            className="rounded-xl p-6 mb-8"
            style={{ background: "#141414", border: "1px solid #1c1c1c" }}
          >
            <h2
              className="text-xs font-black uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#00c254" }}
            >
              ♠ Índice
            </h2>
            <ol className="space-y-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="privacy-toc-link text-sm no-underline hover:underline transition-colors"
                    style={{ color: "#666" }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            {sections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="rounded-xl p-7"
                style={{
                  background: "#141414",
                  border: "1px solid #1c1c1c",
                }}
              >
                <h2
                  className="text-base font-black mb-4"
                  style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", color: "#00c254" }}
                >
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#666" }}>
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
