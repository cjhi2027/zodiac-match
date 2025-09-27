/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eb1a4e",
        secondary: "#6b7280",
        background: "#faf7f0",
        foreground: "#1f2937",
      },
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
