import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        primary: "#ff9143", // Brand Color
        secondary: {
          dark1: "#CC9966",
          dark2: "#262A2C",
          grey1: "#130F49",
          white: "#FFFFFF",
        },
        greyscale: {
          50: "#F9FAFB",
          100: "#F4F4F6",
          200: "#E5E6EB",
          300: "#D3D5DA",
          400: "#9EA3AE",
          500: "#6C727F",
          600: "#4D5461",
          700: "#394150",
          800: "#212936",
          900: "#161D21",
        },
      },
      fontFamily: {
        syne: ["Syne"],
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        h1: "72px",
        h2: "64px",
        h3: "56px",
        h4: "24px",
        bodyLarge: "18px",
        bodyMedium: "16px",
      },
    },
  },
  plugins: [],
} satisfies Config;
