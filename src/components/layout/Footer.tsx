import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { THERAPIST_INFO, NAV_LINKS, THREE_SERVICES } from "@/data/therapist";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-cream pt-16 sm:pt-20 pb-12 border-t border-primary-light">
      <Container size="wide">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-primary-light/60">
          {/* Practice Branding & Introduction (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-xs border border-terracotta/40 shrink-0">
                <Image
                  src="/icon.svg"
                  alt="Dr. Maya Reynolds practice emblem"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-3xl font-normal tracking-tight text-cream block leading-tight">
                  {THERAPIST_INFO.name}
                </span>
                <p className="text-xs uppercase tracking-wider text-eucalyptus-light font-sans mt-0.5">
                  {THERAPIST_INFO.role}
                </p>
              </div>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed max-w-sm pt-2">
              {THERAPIST_INFO.footer.tagline}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary-light text-eucalyptus-light border border-primary-light">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Accepting New In-Person & Telehealth Clients
              </span>
            </div>
          </div>

          {/* Quick Navigation (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta-light">
              Navigate
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/80 hover:text-cream transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical Specialties (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta-light">
              Specialties
            </h3>
            <ul className="space-y-2.5 text-sm">
              {THREE_SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-cream/80 hover:text-cream transition-colors block"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-cream/80 hover:text-cream transition-colors block">
                  CBT & Somatic Grounding
                </a>
              </li>
              <li>
                <a href="#services" className="text-cream/80 hover:text-cream transition-colors block">
                  Mindfulness & Nervous System Pacing
                </a>
              </li>
            </ul>
          </div>

          {/* Office Location & Contact (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta-light">
              Office & Location
            </h3>
            <div className="space-y-3 text-sm text-cream/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta-light shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-cream">{THERAPIST_INFO.location.street}</p>
                  <p>{THERAPIST_INFO.location.city}, {THERAPIST_INFO.location.state} {THERAPIST_INFO.location.zip}</p>
                </div>
              </div>

              <div className="pt-2 text-xs text-cream/60 leading-relaxed border-t border-primary-light/40">
                {THERAPIST_INFO.location.serviceArea}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="pt-8 space-y-4 text-xs text-cream/50">
          <p className="leading-relaxed">
            {THERAPIST_INFO.footer.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-primary-light/40 text-[11px]">
            <p>{THERAPIST_INFO.footer.copyright}</p>
            <div className="flex items-center gap-6">
              <a href="#hero" className="hover:text-cream transition-colors">Privacy Policy</a>
              <a href="#hero" className="hover:text-cream transition-colors">Terms of Use</a>
              <a href="#hero" className="hover:text-cream transition-colors">Good Faith Estimate</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
