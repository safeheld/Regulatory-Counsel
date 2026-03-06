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
          DEFAULT: "#1B2B5E",
          light: "#253A7C",
          dark: "#111D42",
          deep: "#0F1F3D",
        },
        accent: "#2563EB",
        offwhite: "#F7F8FA",
      },
      fontSize: {
        "display": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-mobile": ["2.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "h2": ["3rem", { lineHeight: "1.15", fontWeight: "700" }],
        "h2-mobile": ["2rem", { lineHeight: "1.2", fontWeight: "700" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.08), 0 12px 28px rgba(0,0,0,0.1)",
        "nav": "0 1px 3px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
