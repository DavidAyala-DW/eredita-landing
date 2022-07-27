/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#001C71",
        "secondary": "#FFCB05"
      },
      backgroundImage: {
        'brands-left': "linear-gradient(90deg, rgba(19, 19, 19, 0.8) 0%, rgba(0, 0, 0, 0) 86.05%)",
        "brands-right": "linear-gradient(90deg, rgba(19, 19, 19, 0.8) 0%, rgba(0, 0, 0, 0) 86.05%)"
      },
      fontFamily:{
        "starduster": ["Starduster Title Italic"]
      },
    },
    screens: {
      "2xs": {'min': '420px'},
      "xs": {'min': '480px'},
      'sm': {'min': '640px'},
      'md': {'min': '767px'},
      'md2': {'min': '980px'},
      'lg': {'min': '1023px'},
      'xl': {'min': '1279px'},
      "1.5xl": {'min': '1330px'},
      "1.7xl": {'min': '1400px'},
      '2xl': {'min': '1535px'},        
      '3xl': {'min': '1720px'},        
    }
  },
  plugins: [],
}
