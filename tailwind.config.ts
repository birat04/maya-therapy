import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E2E28", // Deep Forest Slate
          dark: "#15221D",
          light: "#2A3F37",
        },
        terracotta: {
          DEFAULT: "#A86E4B", // Warm Terracotta Stone
          dark: "#8F5838",
          light: "#C18663",
        },
        eucalyptus: {
          DEFAULT: "#638475", // Coastal Eucalyptus / Sage
          dark: "#4E6B5E",
          light: "#EAF0ED",
        },
        cream: {
          DEFAULT: "#FAF8F5", // Soft Warm Cream
          light: "#FFFFFF",
          dark: "#EFECE4",
        },
        oatmeal: {
          DEFAULT: "#F3EFEA", // Linen Oatmeal surface
          dark: "#E6DFD6",
        },
        charcoal: {
          DEFAULT: "#191C1A", // Deep Espresso Ink text
          muted: "#5A645F", // Muted Slate Grey
          subtle: "#818D87",
        },
        sand: {
          DEFAULT: "#DED4C7",
          light: "#EFEBE4",
        },
        border: {
          soft: "#E3DDD5",
          dark: "#31443B",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      borderRadius: {
        "arch": "16rem 16rem 0 0",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
