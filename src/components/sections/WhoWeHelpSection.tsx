import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHO_WE_HELP } from "@/data/therapist";

export const WhoWeHelpSection: React.FC = () => {
  return (
    <section id="who-we-help" className="py-20 sm:py-28 bg-cream">
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="CLIENT POPULATIONS"
          title="Who We Help"
          description="Therapy tailored specifically for thoughtful individuals seeking depth, self-understanding, and lasting relief from internal overwhelm."
          align="center"
          className="mb-14 sm:mb-20"
        />

        {/* 3-Column Grid matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {WHO_WE_HELP.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-oatmeal/40 rounded-2xl p-6 sm:p-7 border border-border-soft hover:bg-oatmeal/80 hover:shadow-md transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-sand/30 border border-border-soft">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Text content */}
              <span className="text-xs uppercase tracking-wider text-terracotta font-semibold mb-2">
                {item.subtitle}
              </span>
              <h3 className="font-serif text-2xl text-primary font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
