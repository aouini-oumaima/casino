import type { Metadata } from "next";
import { Hero }              from "@/components/home/Hero";
import { InfoSection }       from "@/components/home/InfoSection";
import { WhyLicensed }       from "@/components/home/WhyLicensed";
import { ResponsibleBanner } from "@/components/home/ResponsibleBanner";

export const metadata: Metadata = {
  title: "Best Online Casinos | Beam4media",
  description:
    "Discover the best SRIJ-licensed online casinos. Compare bonuses, reviews and choose the right casino for you. Independent and impartial guide.",
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
