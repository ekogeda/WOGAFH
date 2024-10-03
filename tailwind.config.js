module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
      colors: {
				primary: '#1F2937', // Dark grey for text
				secondary: '#E5E7EB', // Light grey for backgrounds
				accent: '#F59E0B', // Goldish yellow for highlights
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans-serif font
			},
		},
	},
	plugins: [],
};

