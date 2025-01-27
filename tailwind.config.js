/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1.5px",
      1: "1.5px",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    extend: {},
  },
  plugins: [],
};
