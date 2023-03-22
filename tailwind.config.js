/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
				'full': '0 0px 7px -3px rgba(0, 0, 0, 1)',
			    },
		  }
    },
  plugins: [],

}
