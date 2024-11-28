/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'light-blue': 'var(--light-blue)',
        'blue-1': 'var(--blue-1)',
      }
    },
  },
  plugins: [],
}

