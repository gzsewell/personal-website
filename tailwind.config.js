/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F87171",
        accent: "#FBBF24",
        background: "#FFF7ED",
        text: "#1C1917",
      },
    },
    fontFamily: {
      heading: ["Poppins", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
