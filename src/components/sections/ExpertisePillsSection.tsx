import React from "react";
import { Container } from "@/components/ui/Container";
import { EXPERTISE_PILLS } from "@/data/therapist";

export const ExpertisePillsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-oatmeal/40 border-b border-border-soft">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Title Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta">
              Comprehensive Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal leading-tight">
              Our Areas of Clinical Focus
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              We provide integrative psychotherapy tailored to both cognitive patterns and nervous system regulation, addressing challenges from everyday overwhelm to deep-rooted trauma.
            </p>
          </div>

          {/* Right 2-Column Badge Grid (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {EXPERTISE_PILLS.map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cream border border-border-soft shadow-2xs hover:border-terracotta/60 hover:shadow-xs transition-all duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
                  <span className="text-sm sm:text-base text-primary font-medium">
                    {pill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
