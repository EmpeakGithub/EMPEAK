// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
  darkMode: "class",
  theme: { 
    fontFamily: { 
      'poppins': ['Poppins', 'system-ui' ],      
      'inter': ['Inter', 'sans-serif '],      
    },
    extend: {
      colors: {
        accentColor1: "#1DB3F9",
        accentColor2: "#FFFCEF",
        empeakYel: "#FFC806",
        inputbg: "#D9D9D94F",
        // entityGradient: "gradient-to-r from-verylightblue to-darkTerra", 
      }
    },
  },
  plugins: [],
} 

