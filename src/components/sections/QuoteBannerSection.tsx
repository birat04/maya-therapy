import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { THERAPIST_INFO } from "@/data/therapist";

export const QuoteBannerSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden text-center text-cream">
      {/* Background Image with Dark Forest Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/quote_bg.jpg"
          alt="Tranquil sunbeams filtering through coastal trees"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85 backdrop-blur-[2px]" />
      </div>

      <Container size="narrow">
        <div className="space-y-6 max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-eucalyptus-light">
            Therapeutic Philosophy
          </span>
          <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.25] text-cream text-balance">
            “{THERAPIST_INFO.quoteBanner.quote}”
          </blockquote>
          <p className="text-sm uppercase tracking-widest text-cream/70 font-sans pt-2">
            — {THERAPIST_INFO.quoteBanner.attribution}
          </p>
        </div>
      </Container>
    </section>
  );
};
