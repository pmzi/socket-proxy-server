const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        smoke: 'whitesmoke',
        danger: defaultTheme.colors.red[600],
        success: defaultTheme.colors.green[600],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
