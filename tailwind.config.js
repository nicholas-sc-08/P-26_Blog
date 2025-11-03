/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffbd59",
        primaryLight: "#FFE3B3",
        primaryDark: "#1E2A3E",
        background: "#F9FAFB",
        text: "#2A3C55",
        accent: "#ff9100",
        sucess: "#10B981",
        error: "#EF4444"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};