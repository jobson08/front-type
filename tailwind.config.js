/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports =withMT( {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
    },
    extend: {
      fontSize: {
        14: '14px',
      },

      colors:{
        'primary': '#0095e8',
        'secondary': '#52c93f',
      },
      primary2: {
        100: "#3A00B0",
        300: "#29007D",
        900: "#120037",
      },

      backgroundColor: {
        'main-bg': '#006Aff',
        'secondary-dark-bg': 'rgba(12, 42, 77)',
        'sidebar-bg': '#1E1E2D',
        'secondary2-bg': '#ffffff',
        'body-bg': '#eaf1f7',
        'blue-bg': '#0095e8',
        'gree1-bg': '#8ae454',
        'gray1-bg': '#F8F7F1',
        'gray2-bg': '#A3A3A3',
        'gray3-bg': '#656575',
        'gray4-bg': '#525256',
        'light-gray-br': '#F7F7F7',
        
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
  },
},
  plugins: [],
});
