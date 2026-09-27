import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide" | "full";
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
  as: Component = "div",
}) => {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-8xl",
  };

  return (
    <Component
      className={`mx-auto w-full px-5 sm:px-8 lg:px-12 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Component>
  );
};
