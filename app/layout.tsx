import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { PageBackground } from "@/components/layout/PageBackground";
import { TopBar }         from "@/components/layout/TopBar";
import { SymbolTicker }   from "@/components/layout/SymbolTicker";
import { Navbar }         from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Melhores Casinos Online em Portugal | Beam4media",
    template: "%s | Beam4media",
  },
  description:
    "Descubra os melhores casinos online licenciados pelo SRIJ em Portugal. Avaliações independentes, bónus exclusivos e guias de jogo responsável.",
  keywords: ["casino online", "portugal", "SRIJ", "apostas online", "bonus casino"],
  authors: [{ name: "Beam4media" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Beam4media",
    title: "Melhores Casinos Online em Portugal | Beam4media",
    description:
      "Descubra os melhores casinos online licenciados pelo SRIJ em Portugal.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${oswald.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col" style={{ background: "#0a0a0a", isolation: "isolate" }}>
        <PageBackground />
        <TopBar />
        <SymbolTicker />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
