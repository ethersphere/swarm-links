/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/data/**/*.{json,yml,yaml}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        line: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(45,56,67,1) 5%, rgba(45,56,67,1) 95%, rgba(255,255,255,0) 100%)",
      },
      boxShadow: {
        card: "0px 8px 50px 0px rgb(0 0 0 / 0.07)",
      },
      spacing: {
        7.5: "1.875rem",
        19: "4.75rem",
      },
      colors: {
        gray: {
          90: "#F6F7F9",
          100: "#F4F4F4",
          400: "#686868",
          500: "#626262",
          900: "#111111",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
