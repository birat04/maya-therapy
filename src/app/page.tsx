import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClientWrapper } from "@/components/layout/ClientWrapper";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { WhoWeHelpSection } from "@/components/sections/WhoWeHelpSection";
import { QuoteBannerSection } from "@/components/sections/QuoteBannerSection";
import { ExpertisePillsSection } from "@/components/sections/ExpertisePillsSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { DividerQuoteSection } from "@/components/sections/DividerQuoteSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TherapistAboutSection } from "@/components/sections/TherapistAboutSection";
import { OurOfficeSection } from "@/components/sections/OurOfficeSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <ClientWrapper>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-cream text-charcoal">
        <HeroSection />
        <IntroSection />
        <WhoWeHelpSection />
        <QuoteBannerSection />
        <ExpertisePillsSection />
        <PhilosophySection />
        <DividerQuoteSection />
        <ServicesSection />
        <TherapistAboutSection />
        <OurOfficeSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </ClientWrapper>
  );
}
