import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        meridian: {
          beige: "#F6F3EB",
          dark: "#181817",
          yellow: "#FABD3F",
          border: "#E5E0D5",
          "text-primary": "#1A1A1A",
          "text-secondary": "#5D5D5D",
        },
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "system-ui", "sans-serif"],
      },
      fontSize: {
        "4xl": ["2.5rem", { lineHeight: "1.1" }],
      },
      maxWidth: {
        "8xl": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
