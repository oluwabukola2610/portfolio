/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        signature:  ['Great Vibes'], 
        primary: 'Orbitron',
        secondary: 'Rajdhani',
      },
      colors: {
        accent: '#B809C3',
      },
      
    },
   
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    backgroundImage: {
      site: "url('./assets/site-bg.jpg')",
    
    },
  },
  plugins: [],
}