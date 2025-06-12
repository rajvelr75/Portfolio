/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#00ADFF',  
      },
      animation: {
        "slide-up": "slide-up 0.3s ease-out",
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        "slide-up": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      }
    },
  },
  plugins: [],
}