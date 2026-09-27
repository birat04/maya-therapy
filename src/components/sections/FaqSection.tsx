import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS } from "@/data/therapist";

export const FaqSection: React.FC = () => {
  return (
    <section id="faqs" className="py-20 sm:py-28 bg-oatmeal/40 border-y border-border-soft">
      <Container size="default">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Common Questions About Therapy"
          description="Everything you need to know about working together, clinical modalities, and getting started."
          align="center"
          className="mb-14 sm:mb-20"
        />

        {/* Accessible Accordion Component */}
        <div className="max-w-3xl mx-auto">
          <Accordion items={FAQS} />
        </div>

        {/* Reassurance Callout */}
        <div className="mt-12 text-center text-sm text-charcoal-muted">
          <span>Have an additional question not answered here? </span>
          <a
            href="#contact"
            className="text-primary font-semibold hover:text-terracotta underline underline-offset-4 transition-colors"
          >
            Reach out directly during a consultation.
          </a>
        </div>
      </Container>
    </section>
  );
};
