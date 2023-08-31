/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    extend: {
      colors:{
        darkgrey:"hsl(234, 29%, 20%)",
        whitee:"hsl(0, 0%, 100%)",
        myGrey: "hsl(231, 7%, 60%)",
        Tomato: "hsl(4, 100%, 67%);",
        box: "hsl(4, 80%, 76%);",
        hover: "rgba(0, 0, 0, 0.04);",
      },
      height: {
        '80':'45%',
        '100':'50%' 
      },
      fontFamily: {
        'roboto': 'Roboto'
      },
      boxShadow: {
        'md': '0px 20px 25px -1px hsl(4, 80%, 76%), 0 10px 10px -5px rgba(0, 0, 0, 0.04);'
      }
    },
  },
  plugins: [],
}

