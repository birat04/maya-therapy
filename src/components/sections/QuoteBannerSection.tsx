import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { THERAPIST_INFO } from "@/data/therapist";

export const QuoteBannerSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden text-center bg-primary text-cream isolate">
      {/* Background Image with Dark Forest Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/quote_bg.jpg"
          alt="Tranquil sunbeams filtering through coastal trees"
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      <Container size="narrow" className="relative z-10">
        <div className="space-y-6 max-w-3xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-eucalyptus-light bg-primary-dark/60 px-3.5 py-1.5 rounded-full border border-eucalyptus/25">
            Therapeutic Philosophy
          </span>
          <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.25] text-cream text-balance drop-shadow-xs">
            &ldquo;{THERAPIST_INFO.quoteBanner.quote}&rdquo;
          </blockquote>
          <p className="text-sm uppercase tracking-widest text-cream/80 font-sans pt-2 font-medium">
            — {THERAPIST_INFO.quoteBanner.attribution}
          </p>
        </div>
      </Container>
    </section>
  );
};
