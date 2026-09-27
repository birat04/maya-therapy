import React from "react";
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
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Intro / Hope Statement Section */}
      <IntroSection />

      {/* 3. Who We Help (3 Populations) */}
      <WhoWeHelpSection />

      {/* 4. Full-Width Quote Banner */}
      <QuoteBannerSection />

      {/* 5. Areas of Expertise / Clinical Focus Pills */}
      <ExpertisePillsSection />

      {/* 6. Philosophy / How We Work */}
      <PhilosophySection />

      {/* 7. Divider Quote & Visual Transition */}
      <DividerQuoteSection />

      {/* 8. EXACT THREE Core Services */}
      <ServicesSection />

      {/* 9. Meet Dr. Maya Reynolds (About & Credentials) */}
      <TherapistAboutSection />

      {/* 10. NEW REQUIRED SECTION: Our Office (A Calm Space for Healing) */}
      <OurOfficeSection />

      {/* 11. Frequently Asked Questions (Accordion) */}
      <FaqSection />

      {/* 12. Final Consultation CTA */}
      <FinalCtaSection />
    </main>
  );
}
