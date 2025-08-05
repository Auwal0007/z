/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        burgundy: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d5d5',
          300: '#f4b6b6',
          400: '#ec8888',
          500: '#e06161',
          600: '#cd4545',
          700: '#ab3535',
          800: '#8f2f2f',
          900: '#792c2c',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        cream: {
          50: '#fffef7',
          100: '#fffbeb',
          200: '#fef7cd',
          300: '#fdeaa7',
          400: '#fbda74',
          500: '#f9c74f',
          600: '#f8b91e',
          700: '#e09f13',
          800: '#be7c17',
          900: '#9a6419',
        },
        forest: {
          50: '#f0f9f3',
          100: '#dcf2e1',
          200: '#bbe5c8',
          300: '#8dd1a7',
          400: '#58b67f',
          500: '#339b61',
          600: '#247d4c',
          700: '#1d633e',
          800: '#184f33',
          900: '#14402b',
        }
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
};