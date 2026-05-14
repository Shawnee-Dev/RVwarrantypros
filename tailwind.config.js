/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      colors:{
        primary: '#29366D',
        formBg: '#D9D9D9',
        motorhomes: '#8D4D02',
        fifthWheel: '#71787B',
        towables: '#5F6872',
        travelTrailers: '#06315C',
        cardColor: '#F4F3F3',
        green : '#0CB065',
        lightGray: '#A9A9A9',
        inputlightShadowGray: '#E7E7E7',
        inputlightWhite: '#FCFCFC',
        btnColor: "#24376E", 
        btnHover: "#f79320"
      }
    },
  },
  plugins: [],
}
