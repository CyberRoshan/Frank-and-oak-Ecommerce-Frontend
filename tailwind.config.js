/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		fontFamily: {
  			Montserrat: ['"Montserrat"', '"sans-serif"'],
  			Poppins: ['"Poppins"','"sans-serif"']
  		},
  		colors: {
  			customGray: '#666666',
  			customBorder: '#DDDDDD',
  			paraColor: '#707070',
  		},
  		boxShadow: {
  			'Btn-shadow': '5px 5px 0px 0px #DDD',
  			'Btn-shadow-white': '5px 5px 0px 0px #FFF'
  		},
  	}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
      require("tailwindcss-animate")
],
};
