"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { AssignmentBanner } from "@/components/ui/AssignmentBanner";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

export const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("anxiety-panic");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent<{ specialty?: string }>;
      if (customEvent.detail?.specialty) {
        setSelectedSpecialty(customEvent.detail.specialty);
      }
      setModalOpen(true);
    };

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("open-consultation-modal", handleOpenModal);
    window.addEventListener("scroll", handleScroll);

    // Also attach global click listener for any link with href="#contact" or data-consultation-trigger
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href");
      const hasTrigger = target.hasAttribute("data-consultation-trigger");

      if (hasTrigger || (href && href === "#contact" && !target.classList.contains("no-modal"))) {
        // If it's a schedule consultation button, open the modal for a superior UX
        if (target.textContent?.toLowerCase().includes("consultation") || target.textContent?.toLowerCase().includes("book")) {
          e.preventDefault();
          setModalOpen(true);
        }
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("open-consultation-modal", handleOpenModal);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AssignmentBanner currentStage="B" />
      {children}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultSpecialty={selectedSpecialty}
      />

      {/* Back to Top floating button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-cream shadow-lg border border-border-soft hover:bg-primary-dark transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};
