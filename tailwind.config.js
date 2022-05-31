const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'Montserrat', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
