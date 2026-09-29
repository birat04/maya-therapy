import React from "react";
import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { THERAPIST_INFO } from "@/data/therapist";

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <Container size="wide">
        <div className="relative rounded-[2.5rem] bg-oatmeal/90 border border-border-soft p-8 sm:p-14 lg:p-20 overflow-hidden shadow-sm isolate">
          {/* Subtle decorative circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sand/30 -z-10 blur-2xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-eucalyptus-light/40 -z-10 blur-2xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Accent Photo (Desktop col 1-3) */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-border-soft">
                <Image
                  src="/images/cta_accent1.jpg"
                  alt="Tranquil Pacific coastal waters near Santa Monica"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Content Column (Cols 4-9 on desktop, full on mobile) */}
            <div className="lg:col-span-6 space-y-6 text-center">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta inline-block">
                {THERAPIST_INFO.ctaSection.eyebrow}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.18] text-primary text-balance">
                {THERAPIST_INFO.ctaSection.title}
              </h2>

              <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-normal max-w-xl mx-auto">
                {THERAPIST_INFO.ctaSection.description}
              </p>

              {/* Consultation Details Card */}
              <div className="bg-cream-light rounded-2xl p-6 border border-border-soft text-left space-y-4 max-w-lg mx-auto shadow-2xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-primary">In-Person & Telehealth Options</p>
                    <p className="text-charcoal-muted">
                      {THERAPIST_INFO.location.fullAddress}
                    </p>
                    <p className="text-xs text-charcoal-muted/80 mt-0.5">
                      Telehealth sessions available statewide across California
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-border-soft/60">
                  <ShieldCheck className="w-5 h-5 text-eucalyptus-dark shrink-0" />
                  <div className="text-xs text-charcoal-muted">
                    <span className="font-medium text-primary">Confidential & HIPAA-Compliant</span>
                    <p>All inquiries are handled directly with complete privacy.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button
                  href="mailto:contact@drmayareynolds.com?subject=Consultation%20Inquiry%20-%20Dr.%20Maya%20Reynolds"
                  variant="primary"
                  size="lg"
                  showArrow
                  external
                >
                  Schedule a Consultation
                </Button>
                <Button href="#faqs" variant="outline" size="lg">
                  Frequently Asked Questions
                </Button>
              </div>

              <p className="text-xs text-charcoal-muted/80 pt-2">
                {THERAPIST_INFO.ctaSection.officeReassurance}
              </p>
            </div>

            {/* Right Accent Photo (Desktop col 10-12) */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-border-soft">
                <Image
                  src="/images/cta_accent2.jpg"
                  alt="Warm natural light illuminating soothing botanical elements"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
