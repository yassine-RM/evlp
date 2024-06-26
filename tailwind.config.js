/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "ev":{
          sm: '0.4rem',
          base: '1rem'
        }
      },
      colors: {
        cian: {
          deep:'#00ffff',
          light:'#b4f8f7',
        },
        purple: {
          deep: '#9400ff',
          light: '#decbff'
        },
        'ev-white':{
          default:'#f2f2f2'
        },
        'ev-black':{
          default:'#000',
          lighter:'#00000085',

        }
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '4rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
  },
  plugins: [],
};
