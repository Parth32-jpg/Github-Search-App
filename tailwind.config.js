/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#141c2e",
        "dark-gray": "#1b2e48",
        "dark-blue": "#007afd",
      },
    },
  },
  plugins: [],
};
