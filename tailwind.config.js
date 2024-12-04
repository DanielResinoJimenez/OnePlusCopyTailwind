/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        imgcontainer: '550px',
        footerimg: '300px',
        footerlogo : '20px',
      },
      backgroundColor:{
        photo: '#262626',
      }
      
    },
  },
  plugins: [],
}