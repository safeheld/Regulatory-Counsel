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
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#0C1C35",
          light: "#162D4F",
          dark: "#081526",
          deep: "#060F1D",
        },
        gold: {
          DEFAULT: "#B8922A",
          light: "#D4AD3E",
          muted: "#C9A94E",
        },
        cream: "#F7F4EF",
        "warm-white": "#FDFCFA",
        accent: "#B8922A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-figtree)", "Figtree", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 24px rgba(0,0,0,0.10)",
        nav: "0 2px 20px rgba(0,0,0,0.08)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
