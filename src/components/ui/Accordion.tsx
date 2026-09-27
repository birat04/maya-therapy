"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`divide-y divide-border-soft border-y border-border-soft ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const itemId = `faq-item-${index}`;
        const contentId = `faq-content-${index}`;

        return (
          <div key={index} className="py-5 sm:py-6 transition-colors duration-200">
            <button
              id={itemId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggle(index)}
              className="flex items-center justify-between w-full text-left gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 rounded-lg"
            >
              <span className="font-serif text-xl sm:text-2xl text-primary font-medium group-hover:text-terracotta transition-colors duration-200">
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full border border-border-soft flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? "bg-primary text-cream rotate-180 border-primary"
                    : "bg-cream text-charcoal-muted group-hover:border-terracotta group-hover:text-terracotta"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            <div
              id={contentId}
              role="region"
              aria-labelledby={itemId}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-charcoal-muted leading-relaxed text-base sm:text-lg pr-4 sm:pr-12">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
