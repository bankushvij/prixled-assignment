/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://cdn.pixabay.com/photo/2022/08/30/20/47/institute-7421918_960_720.jpg')",
        
      }
    },
  },
  plugins: [],
}