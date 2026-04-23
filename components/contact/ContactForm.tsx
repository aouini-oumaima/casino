"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const subjects = [
  "Questão Geral",
  "Pedido de Avaliação de Casino",
  "Parceria",
  "Jogo Responsável",
  "Outro",
];

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Nome obrigatório";
    if (!form.email.trim()) e.email = "Email obrigatório";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email inválido";
    if (!form.subject) e.subject = "Selecione um assunto";
    if (!form.message.trim()) e.message = "Mensagem obrigatória";
    else if (form.message.trim().length < 20) e.message = "Mínimo 20 caracteres";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: "" }));
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  const fieldStyle = (error?: string) => ({
    background: "#0d0d0d",
    border: `1px solid ${error ? "#e63946" : "#2a2a2a"}`,
    color: "#f8f8f8",
    borderRadius: "10px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "inherit",
  });

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          className="rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
          style={{ background: "#141414", border: "1px solid rgba(0,194,84,0.3)" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle2 size={64} className="mx-auto mb-5" style={{ color: "#00c254" }} />
          </motion.div>
          <h3
            className="mb-3"
            style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", fontSize: "1.6rem", fontWeight: 700, color: "#f8f8f8" }}
          >
            Mensagem Enviada!
          </h3>
          <p className="text-sm" style={{ color: "#666" }}>
            Obrigado pelo contacto. Responderemos em até 24h para{" "}
            <strong style={{ color: "#00c254" }}>{form.email}</strong>.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="rounded-2xl p-8"
          style={{ background: "#141414", border: "1px solid #1c1c1c" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h3
            className="mb-6"
            style={{ fontFamily: "var(--font-display, Oswald, sans-serif)", fontSize: "1.3rem", fontWeight: 700, color: "#f8f8f8" }}
          >
            Envie uma Mensagem
          </h3>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#666" }}>
                Nome *
              </label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="O seu nome completo"
                style={fieldStyle(errors.name)}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#00c254"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,194,84,0.1)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = errors.name ? "#e63946" : "#2a2a2a"; e.currentTarget.style.boxShadow = "none"; }}
              />
              {errors.name && <p className="text-xs mt-1.5" style={{ color: "#e63946" }}>{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#666" }}>
                Email *
              </label>
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="email@exemplo.com"
                style={fieldStyle(errors.email)}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#00c254"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,194,84,0.1)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = errors.email ? "#e63946" : "#2a2a2a"; e.currentTarget.style.boxShadow = "none"; }}
              />
              {errors.email && <p className="text-xs mt-1.5" style={{ color: "#e63946" }}>{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#666" }}>
                Assunto *
              </label>
              <select
                name="subject" value={form.subject} onChange={handleChange}
                style={fieldStyle(errors.subject)}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#00c254"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = errors.subject ? "#e63946" : "#2a2a2a"; }}
              >
                <option value="" style={{ background: "#141414" }}>Selecione um assunto</option>
                {subjects.map((s) => <option key={s} value={s} style={{ background: "#141414" }}>{s}</option>)}
              </select>
              {errors.subject && <p className="text-xs mt-1.5" style={{ color: "#e63946" }}>{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#666" }}>
                Mensagem *
              </label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Escreva a sua mensagem aqui..."
                rows={5}
                style={{ ...fieldStyle(errors.message), resize: "vertical" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#00c254"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,194,84,0.1)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = errors.message ? "#e63946" : "#2a2a2a"; e.currentTarget.style.boxShadow = "none"; }}
              />
              {errors.message && <p className="text-xs mt-1.5" style={{ color: "#e63946" }}>{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="btn-primary flex items-center justify-center gap-2 w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ color: "#040a06" }}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{ display: "inline-block" }}
                  >
                    ♠
                  </motion.span>
                  A enviar...
                </span>
              ) : (
                <><Send size={15} strokeWidth={2.5} /> Enviar Mensagem</>
              )}
            </motion.button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
