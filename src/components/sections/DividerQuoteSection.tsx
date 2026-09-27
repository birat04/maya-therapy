import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { THERAPIST_INFO } from "@/data/therapist";

export const DividerQuoteSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-oatmeal/50 border-y border-border-soft overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[16/10] bg-sand/30 border border-border-soft">
              <Image
                src="/images/who_trauma.jpg"
                alt="Sunrise illuminating an open path toward recovery"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Transition Statement */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta">
              Safe & Paced Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-primary text-balance">
              {THERAPIST_INFO.dividerQuote.quote}
            </h2>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal pt-1">
              {THERAPIST_INFO.dividerQuote.subtext}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
