/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ur-green': {
          primary: '#316123',
          secondary: '#47705C',
          accent: '#6D917C',
          sage: '#AEBFB5',
          light: '#F7F8F7',
        },
        'ur-dark': '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
