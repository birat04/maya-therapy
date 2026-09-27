import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  showArrow?: boolean;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  showArrow = false,
  external = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none tracking-wide";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm sm:text-base px-6 py-3 gap-2",
    lg: "text-base sm:text-lg px-8 py-3.5 gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-primary text-cream hover:bg-primary-dark hover:shadow-md active:scale-[0.99]",
    secondary:
      "bg-terracotta text-white hover:bg-terracotta-dark hover:shadow-md active:scale-[0.99]",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-cream active:scale-[0.99]",
    ghost:
      "text-primary hover:bg-oatmeal active:scale-[0.99]",
    link:
      "p-0 rounded-none text-primary hover:text-terracotta underline-offset-8 hover:underline gap-1.5 font-medium",
  };

  const combinedClasses = `${baseClasses} ${variant !== "link" ? sizeClasses[size] : ""} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${combinedClasses}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${combinedClasses}`}>
      {content}
    </button>
  );
};
