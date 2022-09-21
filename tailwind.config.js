/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
