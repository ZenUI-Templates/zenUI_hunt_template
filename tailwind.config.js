/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      maxwidth: '1400px',
      width: '100%',
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {

      fontFamily: {
        "Nova": ["Nova Flat", 'sans-serif'],
        "Aclonica": ["Aclonica", "sans-serif"]
      },
      colors: {
        'primary': '#00B6B6',
      }
    }
  },

  plugins: [],
}