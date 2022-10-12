/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      'gray-100': '#C4C4CC',
      'gray-200': '#E1E1E6',
      'gray-400': '#7C7C8A',
      'gray-800': '#202024',
      'gray-900': '#121214',

      'cyan-300': '#98E1F8',
      'cyan-500': '#81D8F7'
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
