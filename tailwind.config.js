/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: "1536px",
      md: "768px",
      sm: "320px",
    },
    colors: {
      "light-slate": "#f1f5f9",
      slate: "#e2e8f0",
      "dark-slate": "#475569",
      "vdark-slate": "#1E293B",
      blue: "#0f172a",
      yellow: "#fbbf24",
      "light-blue": "#e0f2fe",
      "light-aqua": "#bae6fd",
      aqua: "#7dd3fc",
      "custom-dark-blue": "#070b15",
      "custom-black": "#04060c",
    },
    fontFamily: {
      inter: ["Inter var", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
