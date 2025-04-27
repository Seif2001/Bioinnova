/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  darkMode: 'class', // Use "class" strategy for dark mode

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4ADE80',   // green-400
          DEFAULT: '#22C55E', // green-500
          dark: '#16A34A',    // green-600
        },
        secondary: {
          light: '#CBD5E1',   // slate-300
          DEFAULT: '#94A3B8', // slate-400
          dark: '#64748B',    // slate-500
        },
        // Add more aliases as needed
      },
    },
  },
  plugins: [],
}