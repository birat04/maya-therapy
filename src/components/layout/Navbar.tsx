"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { NAV_LINKS, THERAPIST_INFO } from "@/data/therapist";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-border-soft/80 py-3.5"
            : "bg-cream/80 backdrop-blur-xs py-5"
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <Link
              href="#hero"
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-md"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-2xs group-hover:scale-105 transition-transform duration-300 shrink-0">
                <Image
                  src="/icon.svg"
                  alt="Dr. Maya Reynolds practice emblem"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-2xl md:text-3xl font-normal text-primary tracking-tight group-hover:text-terracotta transition-colors leading-tight">
                  {THERAPIST_INFO.name}
                </span>
                <span className="text-[11px] sm:text-xs text-charcoal-muted tracking-wider uppercase font-sans">
                  {THERAPIST_INFO.role} • Santa Monica, CA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-charcoal-muted hover:text-primary transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-terracotta hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Schedule Consultation
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-full text-primary hover:bg-oatmeal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
