import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { THERAPIST_INFO } from "@/data/therapist";

export const IntroSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-oatmeal/60 border-y border-border-soft">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative Area (Col 1-8) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta">
                A Safe Space to Pause
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.18] text-primary text-balance">
                {THERAPIST_INFO.intro.heading}
              </h2>
            </div>

            {/* Two-column editorial text block matching reference website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal pt-2">
              <div className="space-y-5">
                <p>{THERAPIST_INFO.intro.paragraphs[0]}</p>
                <p className="italic text-primary font-serif text-xl border-l-2 border-terracotta pl-4 py-1">
                  “Clients frequently come to therapy feeling functional on the outside while quietly carrying constant worry and physical tension.”
                </p>
              </div>
              <div className="space-y-5">
                <p>{THERAPIST_INFO.intro.paragraphs[1]}</p>
                <p>{THERAPIST_INFO.intro.paragraphs[2]}</p>
              </div>
            </div>
          </div>

          {/* Right Tall Atmospheric Photograph (Col 9-12) */}
          <div className="lg:col-span-4 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg aspect-[3/4] bg-cream border border-border-soft">
                <Image
                  src="/images/philosophy.jpg"
                  alt="A tranquil, sunlit therapeutic environment in Santa Monica"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-charcoal-muted italic">
                  A calm, quiet room designed to restore emotional safety and physical ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
