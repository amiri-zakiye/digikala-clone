const {heroui} = require("@heroui/react");
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "16px",
        lg: "16px",
      },
      screens: {
        sm: "100%",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1440px",
        "4xl": "1676px",
      },
    },
    extend: {
      boxShadow: {
        sm: "0 1px 0 rgba(0,0,0,.14),0 2px 0 rgba(0,0,0,.05)",
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
      },
      colors: {
        neutral: {
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          900: "var(--neutral-900)",
        },
        primary: {
          500: "var(--primary-500)",
          700: "var(--primary-700)",
        },
        secondary: {
          500: "var(--secondary-500)",
          700: "var(--secondary-700)",
        },
        caution: {
          light: "var(--caution-light)",
          text: "var(--caution-text)",
        },
        icon: {
          "low-emphasis": "#a1a3a8",
          "high-emphasis": "#424750",
          "delivery-jet-expansion": "#1028ff",
          "rating-0-2": "#f9bc00",
          "neutral-hint": "#81858b",
          warning: "#f9a825",
          disable: "#e0e0e2",
        },
        "hint-object-error": "var(--hint-object-error)",
        "hint-success": "#2e7b32",
        "hint-success-light": "rgba(76, 175, 80, 0.1)"
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
