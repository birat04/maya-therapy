"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronRight } from "lucide-react";

interface AssignmentBannerProps {
  currentStage?: "A" | "B";
}

export const AssignmentBanner: React.FC<AssignmentBannerProps> = ({ currentStage = "B" }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary-dark text-cream border-b border-primary-light/60 py-2.5 px-4 text-xs font-sans relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-terracotta text-white font-semibold text-[10px] tracking-wider uppercase">
            Site versions
          </span>
          <span className="text-cream/60">
            {currentStage === "B"
              ? "Practice redesign (homepage)"
              : "Layout clone of the reference site"}
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {currentStage === "B" ? (
            <Link
              href="/stage-a"
              className="inline-flex items-center gap-1 text-eucalyptus-light hover:text-white underline underline-offset-4 transition-colors font-medium"
            >
              <span>View layout clone</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-eucalyptus-light hover:text-white underline underline-offset-4 transition-colors font-medium"
            >
              <span>View practice redesign</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          )}

          {currentStage === "B" && (
            <a
              href="#office"
              className="text-cream/70 hover:text-white transition-colors hidden md:inline"
            >
              Our Office
            </a>
          )}

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="p-1 rounded text-cream/50 hover:text-cream transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
