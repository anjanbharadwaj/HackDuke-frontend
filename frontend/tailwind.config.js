module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-reg': "#648AF2",
        'gray-dim': "#7A86A1",
        'blue-light': '#CAE7FE'
      }
    }
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce','hover', 'focus']
    },

  },
  plugins: [],
}