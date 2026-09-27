import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { THREE_SERVICES } from "@/data/therapist";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-cream">
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CORE SPECIALTIES"
          title="Specialized Clinical Services"
          description="Evidence-based, depth-oriented psychotherapy combining cognitive insight with somatic regulation to address your primary concerns."
          align="center"
          className="mb-14 sm:mb-20"
        />

        {/* EXACT THREE SERVICES as required by assignment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
          {THREE_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col bg-cream-light rounded-2xl overflow-hidden border border-border-soft shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Service Imagery */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-sand/30">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 left-3.5 bg-primary/90 backdrop-blur-xs text-cream text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Specialty 0{index + 1}
                </div>
              </div>

              {/* Service Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-primary font-medium group-hover:text-terracotta transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-normal flex-grow">
                  {service.description}
                </p>

                {/* Modalities Tags */}
                <div className="pt-3 border-t border-border-soft/60 space-y-2">
                  <span className="text-[11px] font-semibold text-terracotta uppercase tracking-wider block">
                    Therapeutic Modalities
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.modalities.map((mod, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-oatmeal text-charcoal-muted font-medium border border-border-soft"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-terracotta transition-colors pt-2"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
