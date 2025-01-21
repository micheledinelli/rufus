/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1.5px',
      '1': '1.5px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
    },
    extend: {
      colors: {
        primary: '#1a4a3c',
        accent: '#81a49d',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}