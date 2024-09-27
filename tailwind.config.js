/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        saiTrader: 'url("assets/images/Design.png")'
      },
      backgroundSize: {
        full: "100% 100%",
      },
    },
  },
  plugins: [],
}