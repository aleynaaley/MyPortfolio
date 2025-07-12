/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeSlide: {
          "0%, 100%": { opacity: 0, transform: "translateY(20px)" },
          "50%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeSlide: "fadeSlide 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}