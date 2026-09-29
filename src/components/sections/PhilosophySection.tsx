import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { THERAPIST_INFO } from "@/data/therapist";

export const PhilosophySection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Text Narrative (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta">
              {THERAPIST_INFO.philosophy.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] text-primary text-balance">
              {THERAPIST_INFO.philosophy.heading}
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal pt-2">
              <p>{THERAPIST_INFO.philosophy.paragraphs[0]}</p>
              <p>{THERAPIST_INFO.philosophy.paragraphs[1]}</p>
              <p>{THERAPIST_INFO.philosophy.paragraphs[2]}</p>
            </div>

            <div className="pt-4">
              <Button href="#services" variant="primary" size="md" showArrow>
                {THERAPIST_INFO.philosophy.ctaText}
              </Button>
            </div>
          </div>

          {/* Right Image Composition (Col 8-12) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none pb-16 sm:pb-20 mt-8 lg:mt-0">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5] bg-oatmeal border border-border-soft">
                <Image
                  src="/images/philosophy.jpg"
                  alt="Mindful therapeutic environment designed for grounded healing"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-cream p-5 rounded-2xl shadow-lg border border-border-soft max-w-xs">
                <p className="font-serif text-lg text-primary italic leading-snug">
                  “Healing isn’t just symptom relief—it’s deepening your relationship with yourself.”
                </p>
                <span className="text-[11px] text-terracotta uppercase tracking-wider font-semibold block mt-2">
                  Dr. Maya Reynolds, PsyD
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
