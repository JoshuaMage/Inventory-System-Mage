/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  },
		extend: {
			fontFamily: {
				patrick: ['"Lekton"', 'monospace'] // Add this line
			},
			fontOpticalSizing: {
				auto: 'auto'
			},
			fontWeight: {
				normal: 400 // Replace with the desired weight
			},
			width: {
				tableWidth: '90vw',
				errorwidth: '1680px',
			},
			height: {
				tableHeight: '90vh'
			},
			fontStyle: {
				normal: 'normal'
			},
			fontVariationSettings: {
				wdth: '93.8',
				YTLC: '507'
			},
			backgroundImage: {
				'login-image': "url('./src/image/loginBackgrounding.jpg')",
				'forgotpass-image': "url('./src/image/forgotpass.jpg')",
				'createacc-image': "url('./src/image/workers.jpg')"
			},
			colors: {
				pureRed: '#EB1D36',
				orange: '#C2452D',
				bgGrey: '#000000',
				bgDarkGrey: '#FAFAFF',
				bgBlack: '#191717',
				borderlineGrey: '#F5F7F8',
				paginationButton: '#090C9B',
				nextPrevButton: '#090C9B'
			},
		}
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.scrollbar-hide': {
					overflow: 'auto',
					'-ms-overflow-style': 'none', /* IE and Edge */
					'scrollbar-width': 'none', /* Firefox */
				},
				'.scrollbar-hide::-webkit-scrollbar': {
					display: 'none', /* Safari and Chrome */
				},
			}, ['responsive', 'hover']);
		}
	]
};
