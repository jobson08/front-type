/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'primary': '#006Aff',
        'secondary': '#ff2727',
        'black': '#1A1919',
        'green1': '#52c93f',
        'gray1': '#F8F7F1',
        'gray2': '#A3A3A3',
        'gray3': '#656575',
        'gray4': '#525256',
        'light-gray': '#F7F7F7',
        'secondary-dark-bg': 'rgba(12, 42, 77)',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
  },
},
  plugins: [],
}
