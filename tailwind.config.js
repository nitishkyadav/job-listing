/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "370px",
      ...defaultTheme.screens,
      // => @media (min-width: 380px) { ... }
    },
    extend: {
      colors: {
        darkCyan: "hsl(180, 29%, 50%)",
        bodyBg: "hsl(180, 52%, 96%)",
      },
      fontFamily: {
        leagueSparten: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
