/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
	  screens: {
		'sm': '640px',
		'md': '768px',
		'lg': '1024px',
		'xl': '1280px',
		'2xl': '1536px',
	  },
	  extend: {
		fontFamily: {
		  patrick: ['"Lekton"', 'monospace']
		},
		fontOpticalSizing: {
		  auto: 'auto'
		},
		fontWeight: {
		  normal: 400
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
		  width: '93.8',
		  TLC: '507'
		},
		backgroundImage: {
		  'login-image': "url('/src/image/loginBackground.jpg')",
		  'forgot-password': "url('/src/image/forgotPassword.jpg')",
		  'create-account': "url('/src/image/createAccount.jpg')"
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
	  require('tailwind-scrollbar'), // Add the scrollbar plugin
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
  