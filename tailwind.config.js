/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        gold: {
          50: '#fbf7e4',
          100: '#f5ebc7',
          200: '#e9d48a',
          300: '#dcb94d',
          400: '#d0a226',
          500: '#bd8b1a',
          600: '#9c6b15',
          700: '#774d14',
          800: '#5c3b15',
          900: '#4a3015',
        },
      },
    },
  },
  plugins: [],
};