import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/i18n/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        brand: {
          400: "#7dd3fc",
          500: "#38bdf8",
          600: "#0284c7"
        },
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed"
        }
      },
      boxShadow: {
        glass: "0 24px 80px -36px rgb(15 23 42 / 0.55)",
        glow: "0 0 0 1px rgb(255 255 255 / 0.08), 0 30px 100px rgb(56 189 248 / 0.18)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgb(var(--line) / 0.45) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--line) / 0.45) 1px, transparent 1px)",
        "brand-gradient":
          "linear-gradient(135deg, #38bdf8 0%, #8b5cf6 50%, #f472b6 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite"
      }
    }
  },
  plugins: []
};

export default config;
