import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        heading: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
