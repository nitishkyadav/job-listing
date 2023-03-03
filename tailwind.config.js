/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
