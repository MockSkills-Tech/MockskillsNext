

import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react";
const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
          custom: {
            DEFAULT: "#1E293B", // Custom background color
            text: "#E2E8F0", // Custom text color
          },
      },
      backgroundImage: {
        "grid-black": "repeating-linear-gradient(90deg, black 0, black 1px, transparent 1px, transparent 100%), repeating-linear-gradient(0deg, black 0, black 1px, transparent 1px, transparent 100%)",
        "grid-white": "repeating-linear-gradient(90deg, white 0, white 1px, transparent 1px, transparent 100%), repeating-linear-gradient(0deg, white 0, white 1px, transparent 1px, transparent 100%)",
      },
      animation: {
        ping: "ping 2s infinite",
        bounce: "bounce 2s infinite",
        spin: "spin 3s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwa rds",
        float: "float 4s ease-in-out infinite",
        "slide-dotted": "slide-dotted 10s linear infinite",
        "move-bubble": "move-bubble 10s ease-in-out infinite",
      },
      
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "slide-dotted": {
          "0%": { left: "-50%", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { left: "150%", opacity: "0" },
        },
        "move-bubble": {
          "0%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-50px) scale(1.2)" },
          "100%": { transform: "translateY(0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateX(0px) scale(1)" },
          "50%": { transform: "translateX(-20px) scale(1.2)" },
        },
      } ,
    }
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
  
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}