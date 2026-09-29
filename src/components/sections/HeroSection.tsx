import React from "react";
import Image from "next/image";
import { MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { THERAPIST_INFO } from "@/data/therapist";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-cream">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left / Primary Portrait Image (cols 1-5 on desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none pb-10 sm:pb-14">
              {/* Outer decorative subtle framing */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-sand/40 -rotate-1 -z-10" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5] bg-oatmeal border border-border-soft">
                <Image
                  src="/images/dr_maya_reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating verified credentials badge */}
              <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:right-6 bg-cream-light/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-lg border border-border-soft/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eucalyptus/15 flex items-center justify-center text-eucalyptus-dark">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary">Dr. Maya Reynolds, PsyD</p>
                  <p className="text-[11px] text-charcoal-muted">Licensed Clinical Psychologist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center & Right Content / Typography (cols 6-12 on desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8 lg:pl-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-oatmeal border border-border-soft text-terracotta text-xs uppercase tracking-widest font-semibold">
              <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
              <span>Santa Monica, CA • In-Person & Telehealth</span>
            </div>

            {/* Main H1 */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.12] text-primary font-normal text-balance tracking-tight">
              {THERAPIST_INFO.hero.h1}
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg lg:text-xl text-charcoal-muted leading-relaxed max-w-2xl font-normal">
              {THERAPIST_INFO.hero.subheading}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="#contact" variant="primary" size="lg" showArrow>
                {THERAPIST_INFO.hero.ctaPrimary}
              </Button>
              <Button href="#services" variant="outline" size="lg">
                {THERAPIST_INFO.hero.ctaSecondary}
              </Button>
            </div>

            {/* Reference-layout-inspired accent photo strip & reassurance */}
            <div className="pt-6 border-t border-border-soft/80 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-xs shrink-0 border border-border-soft">
                  <Image
                    src="/images/hero_accent.jpg"
                    alt="Santa Monica coastal serenity"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="text-xs text-charcoal-muted">
                  <span className="font-semibold text-primary block">Private Coastal Sanctuary</span>
                  <span>Quiet consultation office in Santa Monica</span>
                </div>
              </div>

              <div className="text-xs text-charcoal-muted flex items-center gap-2 sm:justify-end">
                <Sparkles className="w-4 h-4 text-terracotta shrink-0" />
                <span>Evidence-based CBT, EMDR & Somatic Care</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
