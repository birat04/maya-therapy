"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

const STAGE_A_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Who We Help", href: "#who-we-help" },
  { label: "Specialties", href: "#specialties" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const StageAHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5E0D8] py-4">
        <Container size="wide">
          <div className="flex items-center justify-between gap-4">
            <Link href="/stage-a" className="font-serif text-xl sm:text-2xl tracking-tight text-[#2B2B2B]">
              Conejo Valley Family Counseling
            </Link>
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#555]">
              {STAGE_A_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-black transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-[#2B2B2B] text-white text-xs sm:text-sm font-medium hover:bg-black transition-colors"
              >
                Book an Appointment
              </a>
              <button
                type="button"
                className="lg:hidden p-2 rounded-full text-[#2B2B2B] hover:bg-[#E8E2D8] transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div className="relative w-full max-w-sm bg-[#FAF7F2] h-full shadow-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between pb-6 border-b border-[#E5E0D8]">
              <span className="font-serif text-lg text-[#2B2B2B]">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-full hover:bg-[#E8E2D8]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="py-6 space-y-1">
              {STAGE_A_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-3 font-serif text-xl text-[#2B2B2B]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-auto inline-flex justify-center px-5 py-3 rounded-full bg-[#2B2B2B] text-white text-sm font-medium"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      )}
    </>
  );
};
