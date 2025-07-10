/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          dark: '#60A5FA',
        },
        secondary: {
          DEFAULT: '#10B981',
          dark: '#34D399',
        },
        background: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        text: {
          primary: '#1F2937',
          secondary: '#6B7280',
          dark: {
            primary: '#F9FAFB',
            secondary: '#D1D5DB',
          },
        },
      },
    },
  },
  plugins: [],
}
