/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    fontFamily:{
      'sans': [, 'sans-serif', 'Poppins']
    },
    extend: {
      backgroundImage:{
"home": "url('../assets/bg.png')"      }
    },
  },
  plugins: [],
}

