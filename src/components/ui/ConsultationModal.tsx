"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSpecialty?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultSpecialty = "anxiety-panic",
}) => {
  const [format, setFormat] = useState<"in-person" | "telehealth">("in-person");
  const [specialty, setSpecialty] = useState(defaultSpecialty);
  const [preferredTime, setPreferredTime] = useState<"morning" | "afternoon" | "evening">("morning");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-primary-dark/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-cream rounded-3xl shadow-2xl z-10 overflow-hidden border border-border-soft animate-slide-up my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-7 border-b border-border-soft bg-oatmeal/60">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta block mb-1">
              Confidential Consultation
            </span>
            <h2 id="consultation-modal-title" className="font-serif text-2xl sm:text-3xl text-primary font-normal">
              Schedule Your Free Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-charcoal-muted hover:text-primary hover:bg-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl text-primary">Inquiry Received</h3>
              <p className="text-sm sm:text-base text-charcoal-muted max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-primary">{name || "there"}</strong>. Dr. Maya Reynolds will review your consultation request and reach out directly within 1–2 business days.
              </p>

              <div className="p-4 rounded-xl bg-oatmeal border border-border-soft text-left text-xs text-charcoal-muted space-y-2 mt-6">
                <p className="font-medium text-primary flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-terracotta" />
                  <span>Session Preference: {format === "in-person" ? "In-Person (Santa Monica Office)" : "Secure Telehealth (California)"}</span>
                </p>
                <p className="pl-5 text-charcoal-muted/80">
                  {format === "in-person" ? "123th Street 45 W, Santa Monica, CA 90401" : "Encrypted, HIPAA-compliant video link provided upon confirmation"}
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-primary text-cream hover:bg-primary-dark transition-colors text-sm font-medium"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Format Selection (In-Person vs Telehealth) */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-primary uppercase tracking-wider block">
                  Session Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormat("in-person")}
                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                      format === "in-person"
                        ? "border-primary bg-primary text-cream shadow-xs"
                        : "border-border-soft bg-cream-light text-charcoal-muted hover:border-terracotta"
                    }`}
                  >
                    <span className="block font-semibold">In-Person</span>
                    <span className={`text-[11px] block mt-0.5 ${format === "in-person" ? "text-cream/80" : "text-charcoal-muted/80"}`}>
                      Santa Monica Office
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormat("telehealth")}
                    className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                      format === "telehealth"
                        ? "border-primary bg-primary text-cream shadow-xs"
                        : "border-border-soft bg-cream-light text-charcoal-muted hover:border-terracotta"
                    }`}
                  >
                    <span className="block font-semibold">Virtual Telehealth</span>
                    <span className={`text-[11px] block mt-0.5 ${format === "telehealth" ? "text-cream/80" : "text-charcoal-muted/80"}`}>
                      Anywhere in California
                    </span>
                  </button>
                </div>
              </div>

              {/* Area of Support */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-primary uppercase tracking-wider block">
                  Primary Area of Concern
                </label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-border-soft bg-cream-light text-sm text-primary focus:outline-none focus:ring-2 focus:ring-terracotta"
                >
                  <option value="anxiety-panic">Anxiety & Panic Therapy</option>
                  <option value="trauma-emdr">Trauma & EMDR Recovery</option>
                  <option value="burnout-stress">Burnout & High-Pressure Stress</option>
                  <option value="general">General Individual Psychotherapy</option>
                </select>
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-primary uppercase tracking-wider block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-border-soft bg-cream-light text-sm text-primary placeholder:text-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-primary uppercase tracking-wider block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-border-soft bg-cream-light text-sm text-primary placeholder:text-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
              </div>

              {/* Phone & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-primary uppercase tracking-wider block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(310) 555-0123"
                    className="w-full px-4 py-2.5 rounded-xl border border-border-soft bg-cream-light text-sm text-primary placeholder:text-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-primary uppercase tracking-wider block">
                    Preferred Time of Day
                  </label>
                  <div className="flex gap-2">
                    {(["morning", "afternoon", "evening"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setPreferredTime(t)}
                        className={`flex-1 py-2 rounded-lg border text-xs capitalize font-medium transition-all ${
                          preferredTime === t
                            ? "bg-terracotta text-white border-terracotta"
                            : "bg-cream-light border-border-soft text-charcoal-muted hover:border-terracotta"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Optional Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-primary uppercase tracking-wider block">
                  Brief Note or What You Hope to Address (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share any context you'd like Dr. Maya to know prior to your call..."
                  className="w-full px-4 py-2.5 rounded-xl border border-border-soft bg-cream-light text-sm text-primary placeholder:text-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-terracotta resize-none"
                />
              </div>

              {/* Security & Reassurance */}
              <div className="flex items-center gap-2 text-xs text-charcoal-muted/80 pt-1">
                <ShieldCheck className="w-4 h-4 text-eucalyptus-dark shrink-0" />
                <span>100% Confidential & HIPAA Compliant. Your information is never shared.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-primary text-cream hover:bg-primary-dark transition-all duration-300 font-medium text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>Request Free Initial Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
