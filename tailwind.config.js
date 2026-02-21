/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dimYellow': '#E1B168',
        'darkSlate': '#292E36',
        'grayShade': '#555555',
        'lightSlate': '#343942',
        'dimWhite': '#FFF8F5',
        'primary': '#292E36',
      },

      fontFamily: {
        'joseRegular': ['JosefinSans Regular'],
        'joseMedium': ['JosefinSans Medium'],
        'joseSemiBold': ['JosefinSans SemiBold'],
        'joseBold': ['JosefinSans Bold'],
        'cormorantRegular': ['CormorantGaramond Regular'],
        'cormorantMedium': ['CormorantGaramond Medium'],
        'cormorantSemiBold': ['CormorantGaramond SemiBold'],
        'cormorantBold': ['CormorantGaramond Bold'],

        'infantRegular': ['CormorantInfant Regular'],
        'infantMedium': ['CormorantInfant Medium'],
        'infantSemiBold': ['CormorantInfant SemiBold'],
        'infantBold': ['CormorantInfant Bold'],
        'infantItalic': ['CormorantInfant Italic'],

      }
    },
  },
  plugins: [],
}