/* eslint-disable @typescript-eslint/no-explicit-any */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import type { Config } from "tailwindcss";

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-dark-gray": "#1E1E1F",
        "custom-border-gray": "#414141",
        "custom-light-gray": "#353535",
        gold: {
          50: "#fff9eb",
          100: "#fdedc8",
          200: "#fbdba0",
          300: "#f9c36d",
          400: "#f7a638",
          500: "#f58e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
