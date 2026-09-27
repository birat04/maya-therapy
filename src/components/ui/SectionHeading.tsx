import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
  as: Component = "h2",
}) => {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-3.5 ${isCenter ? "text-center mx-auto" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs uppercase tracking-[0.2em] font-semibold ${
            isDark ? "text-eucalyptus-light" : "text-terracotta"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <Component
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.18] text-balance ${
          isDark ? "text-cream" : "text-primary"
        }`}
      >
        {title}
      </Component>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-3xl text-balance ${
            isCenter ? "mx-auto" : ""
          } ${isDark ? "text-cream/80" : "text-charcoal-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
