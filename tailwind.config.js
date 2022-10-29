const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#222226",
      grey: "#555",
      white: "#FFF",
      red: "#CB2E2D",
      "light-grey": "#DEDEDE",
      primary: "#0A3040",
      slate: colors.slate,
      background: "#dee8f3"
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}
