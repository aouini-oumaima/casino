import type { Metadata } from "next";
import { Hero }              from "@/components/home/Hero";
import { InfoSection }       from "@/components/home/InfoSection";
import { WhyLicensed }       from "@/components/home/WhyLicensed";
import { ResponsibleBanner } from "@/components/home/ResponsibleBanner";

export const metadata: Metadata = {
  title: "Melhores Casinos Online em Portugal | Beam4media",
  description:
    "Descubra os melhores casinos online licenciados pelo SRIJ. Compare bónus, avaliações e escolha o casino certo para si. Guia independente e imparcial.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoSection />
      <WhyLicensed />
      <ResponsibleBanner />
    </>
  );
}
