import React from "react";
import Image from "next/image";
import { MapPin, Sun, Shield, Heart, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { THERAPIST_INFO } from "@/data/therapist";

export const OurOfficeSection: React.FC = () => {
  return (
    <section id="office" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <SectionHeading
          eyebrow={THERAPIST_INFO.office.eyebrow}
          title={THERAPIST_INFO.office.title}
          description={THERAPIST_INFO.office.description}
          align="center"
          className="mb-14 sm:mb-20"
        />

        {/* Dual-Image Showcase Collage & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Primary Office Photograph (office1.jpeg) (Col 1-7) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[16/11] bg-oatmeal border border-border-soft">
              <Image
                src={THERAPIST_INFO.office.images[0].src}
                alt={THERAPIST_INFO.office.images[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-cream text-xs bg-primary/80 backdrop-blur-xs py-2 px-3.5 rounded-xl border border-cream/20">
                {THERAPIST_INFO.office.images[0].caption}
              </div>
            </div>
          </div>

          {/* Secondary Office Photograph (office2.jpeg) & Atmosphere (Col 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-[2rem] overflow-hidden shadow-lg aspect-[4/3] bg-oatmeal border border-border-soft group">
              <Image
                src={THERAPIST_INFO.office.images[1].src}
                alt={THERAPIST_INFO.office.images[1].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-3 left-3 right-3 text-cream text-xs bg-primary/80 backdrop-blur-xs py-1.5 px-3 rounded-xl border border-cream/20">
                {THERAPIST_INFO.office.images[1].caption}
              </div>
            </div>

            {/* Atmosphere Callout */}
            <div className="p-6 rounded-2xl bg-oatmeal/60 border border-border-soft space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-terracotta flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Physical Space Philosophy
              </span>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-normal">
                Clients often share that the physical environment itself helps them feel more at ease the moment they arrive. Every element is designed to minimize sensory overload, invite calm, and provide a quiet retreat from the busyness of everyday life.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards (Comfort, Privacy, Safety, Location) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {THERAPIST_INFO.office.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-cream-light border border-border-soft shadow-2xs hover:shadow-md hover:border-terracotta/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-eucalyptus-light flex items-center justify-center text-primary mb-4">
                {idx === 0 && <Sun className="w-5 h-5 text-terracotta" />}
                {idx === 1 && <Shield className="w-5 h-5 text-primary" />}
                {idx === 2 && <MapPin className="w-5 h-5 text-eucalyptus-dark" />}
                {idx === 3 && <Heart className="w-5 h-5 text-terracotta" />}
              </div>
              <h3 className="font-serif text-xl text-primary font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Santa Monica Location & In-Person/Hybrid Badge */}
        <div className="p-6 sm:p-8 rounded-2xl bg-primary text-cream flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta-light">
              Practice Address & Format
            </span>
            <p className="font-serif text-2xl text-cream">
              {THERAPIST_INFO.location.fullAddress}
            </p>
            <p className="text-xs text-cream/70">
              In-person sessions in Santa Monica • Secure HIPAA-compliant telehealth for clients across California
            </p>
          </div>

          <Button
            href="#contact"
            variant="secondary"
            size="md"
            className="shrink-0"
          >
            Visit Our Office
          </Button>
        </div>
      </Container>
    </section>
  );
};
