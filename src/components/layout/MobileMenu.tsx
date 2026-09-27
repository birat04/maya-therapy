"use client";

import React, { useEffect } from "react";
import { X, MapPin, ArrowRight } from "lucide-react";
import { NAV_LINKS, THERAPIST_INFO } from "@/data/therapist";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-primary-dark/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-sm bg-cream h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto p-6 sm:p-8 animate-fade-in">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-border-soft">
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-primary">
                {THERAPIST_INFO.name}
              </span>
              <p className="text-xs text-charcoal-muted font-sans">
                {THERAPIST_INFO.role}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 rounded-full text-charcoal-muted hover:text-primary hover:bg-oatmeal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-3 rounded-lg font-serif text-2xl text-primary hover:text-terracotta hover:bg-oatmeal/60 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
          </nav>
        </div>

        {/* Footer info & CTA */}
        <div className="pt-6 border-t border-border-soft space-y-5">
          <div className="text-xs text-charcoal-muted space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
              <span>{THERAPIST_INFO.location.fullAddress}</span>
            </div>
            <div className="text-charcoal-muted/80 pl-6">
              In-person sessions in Santa Monica & Telehealth across CA
            </div>
          </div>

          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="w-full justify-center"
            onClick={onClose}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};
