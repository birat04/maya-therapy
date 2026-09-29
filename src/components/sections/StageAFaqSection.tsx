"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";

const FAQS = [
  {
    question: "Where are you located?",
    answer:
      "Newbury Park, CA. We also offer video sessions for clients out of the area or if a client simply prefers video instead.",
  },
  {
    question: "How does online therapy work?",
    answer:
      "Telehealth therapy allows you to meet with your therapist online through a secure video platform from the comfort of your home or another private location. Sessions are conducted similarly to in-person therapy, providing a convenient and confidential way to receive support.",
  },
  {
    question: "What can I expect during my first appointment?",
    answer:
      "We’ll start with a thorough assessment of the concerns that brought you to therapy, including how they impact your daily life and relationships. Together we’ll begin a treatment plan tailored to your needs so you leave feeling heard, supported, and clear about next steps.",
  },
  {
    question: "Is therapy confidential?",
    answer:
      "Yes. Information shared in therapy is protected by privacy laws and ethical guidelines. There are a few legal exceptions, such as risk of harm to yourself or others, suspected abuse, or a court order. Your therapist will review these in your first session.",
  },
];

export const StageAFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 bg-[#FAF7F2]">
      <Container size="default">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B2B2B]">Questions?</h2>
          <p className="mt-4 text-sm sm:text-base text-[#555] leading-relaxed">
            Here are some of the most common questions we get about working together.
          </p>
        </div>
        <div className="divide-y divide-[#E5E0D8] border-y border-[#E5E0D8]">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="py-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full text-left gap-4"
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#2B2B2B]">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-[#8B6B55] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-sm sm:text-base text-[#555] leading-relaxed pr-8">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
