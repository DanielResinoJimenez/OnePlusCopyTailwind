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
        modalbg: 'rgba(115, 90, 103, 0.43)',
        modalbg2: 'rgba(73, 57, 65, 0.7)',
      },
      keyframes:{
        slidebg:{
          '0%' : {transform: "translateX(-200px)", backgroundColor: "#D3D3D3", opacity:"0.2"},
          '100%' : {transform: "translateX(-23%)", backgroundColor: "#D3D3D3", opacity:"0.2"}
        },
        imgzoom:{
          '0%' : {transform: "scale(1)"},
          '100%' : {transform: "scale(1.1)"}
        },
        modalopen:{
          '0%' : {transform: "translateX(500px)"},
          '100%' : {transform: "translateX(0px)"}
        },
        modalclose:{
          '0%' : {transform: "translateX(0px)"},
          '100%' : {transform: "translateX(500px)"}
        }
      },
      animation:{
        slidebg: 'slidebg 0.2s ease-in-out forwards',
        modalopen: 'modalopen 0.5s ease-in-out forwards',
        modalclose: 'modalclose 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}