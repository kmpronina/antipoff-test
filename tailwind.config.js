/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: "#512689",
          50: "#f9f6fe",
          100: "#f1eafd",
          200: "#e4d8fc",
          300: "#d0b9f9",
          400: "#b38cf4",
          500: "#9660ec",
          600: "#7e40dd",
          700: "#6a2ec2",
          800: "#5b2a9f",
          900: "#512689",
          950: "#300d5e",
        },
      },
    },
  },
  plugins: [],
};
