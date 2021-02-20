

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#62C6B3',
        secondary: '#FF7F90'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
