/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#36A546",
          100: "#36A54680",
          200: "#00FF2580",
          300: "#36A546CC",
        },
        black: {
          DEFAULT: "#000E09",
          100: "#1E1E2D",
          200: "#232533",
          300: "#000000",
        },
        gray: {
          100: "#CDCDE0",
          200:'rgba(94, 94, 94, 0.51)'
        },
        white: '#FFFFFF'
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],

      },
    },
  },
  plugins: [],
};