/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('../icam-distribution/src/images/backgroundHero.jpg')"
      },
      fontFamily: {
        'optiTimes': ['OPTITimes-Roman'],
        'suiseeIntl': ['SuisseIntl-Regular'],
        'editorialNew': ['Editorial New Ultralight'],
        'bigilla': ['Bigilla'],
        'inter': ['Inter']
      },
      screens: {
        'xs': '320px',
        '1xs': '520px',
        '3xl': '1700px'
      },
    },
  },
  plugins: [],
}
