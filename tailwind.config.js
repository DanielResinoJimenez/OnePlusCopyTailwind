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
        phonebg: '#F8F8F8',
      },
      keyframes:{
        slidebg:{
          '0%' : {transform: "translateX(-200px)", backgroundColor: "#D3D3D3", opacity:"0.2"},
          '100%' : {transform: "translateX(-23%)", backgroundColor: "#D3D3D3", opacity:"0.2"}
        },
        imgzoom:{
          '0%' : {transform: "scale(1)"},
          '100%' : {transform: "scale(1.1)"}
        }
      },
      animation:{
        slidebg: 'slidebg 0.2s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}