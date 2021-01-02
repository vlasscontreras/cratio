module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
    fontFamily: {
      sans: 'var(--font-family-base)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
