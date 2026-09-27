import React from "react";
import Image from "next/image";
import { Check, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const TherapistAboutSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-oatmeal/40 border-y border-border-soft">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Composition with Verified Credentials (Col 1-5) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-sand/20 border border-border-soft">
                <Image
                  src="/images/dr_maya_reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, California"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Verified Credentials Floating Box */}
              <div className="absolute -bottom-6 left-6 right-6 sm:-bottom-8 sm:left-8 sm:right-8 bg-cream/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg border border-border-soft text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-terracotta/15 flex items-center justify-center text-terracotta shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-primary leading-tight">
                    Dr. Maya Reynolds, PsyD
                  </p>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Licensed Clinical Psychologist • CA License
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Narrative & Clinical Philosophy (Col 6-12) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta">
                Meet Your Psychologist
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] text-primary text-balance">
                Warm, grounded therapy for high-achieving, thoughtful adults.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal">
              <p>
                I am a licensed clinical psychologist based in Santa Monica, California, offering individual therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of earlier life experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—yet internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
              <p>
                My work often focuses on anxiety, panic, trauma, and professional burnout. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, sleep difficulties, or a sense that they are always bracing for something to go wrong.
              </p>
              <p>
                I take a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. We integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physiological dimensions of your experience.
              </p>
            </div>

            {/* Core Practice Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-center gap-2.5 text-sm text-primary font-medium">
                <Check className="w-4 h-4 text-eucalyptus-dark shrink-0" />
                <span>Cognitive-Behavioral Therapy (CBT)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary font-medium">
                <Check className="w-4 h-4 text-eucalyptus-dark shrink-0" />
                <span>EMDR Trauma Reprocessing</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary font-medium">
                <Check className="w-4 h-4 text-eucalyptus-dark shrink-0" />
                <span>Mindfulness & Somatic Grounding</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary font-medium">
                <Check className="w-4 h-4 text-eucalyptus-dark shrink-0" />
                <span>Santa Monica In-Person & CA Telehealth</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button href="#contact" variant="primary" size="md">
                Connect With Dr. Maya
              </Button>
              <Button href="#office" variant="outline" size="md">
                View Our Santa Monica Office
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
