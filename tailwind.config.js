/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    extend: {
      colors:{
        darkgrey:"hsl(234, 29%, 20%)",
        whitee:"hsl(0, 0%, 100%)",
        myGrey: "hsl(231, 7%, 60%)"
      },
      height: {
        '80':'45%',
        '100':'50%' 
      },
    },
  },
  plugins: [],
}

