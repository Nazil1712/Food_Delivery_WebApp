/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lato':['lato','sans-serif']
      },
      colors:{
        'text-color':'#3e4152',
        'hr-line':'#f1f1f6'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
