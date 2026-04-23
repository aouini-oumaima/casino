"use client";

import { motion } from "framer-motion";
import { casinos } from "@/lib/casinos";
import { CasinoCard } from "./CasinoCard";

export function CasinoList() {
  return (
    <section
      id="casinos"
      className="relative py-20 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Felt green ambient */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(0,194,84,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-5">


        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {casinos.map((casino, i) => (
            <CasinoCard key={casino.id} casino={casino} index={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-xs mt-8"
          style={{ color: "#444" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          * Bónus e promoções sujeitos a T&Cs. Verifique no site do casino. 18+. Jogue com responsabilidade.
        </motion.p>
      </div>
    </section>
  );
}
