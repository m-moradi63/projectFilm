/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors:{
      'griffty' : '#FFC907',
      'nav' : '#6650A5',
      'searche' : '#A2B3CD',
      
    },
    extend: {
      backgroundColor: ['active'],
      fontFamily:{
        'primary':'Montserrat',
        'secondary': 'Griffy',
      }
     
    },
  },
  plugins: [],
}

