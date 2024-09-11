/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        patrick: ['"Lekton"', 'monospace'], // Add this line
      },
      fontOpticalSizing: {
        auto: 'auto',
      },
      fontWeight: {
        normal: 400, // Replace with the desired weight
      },
      fontStyle: {
        normal: 'normal',
      },
      fontVariationSettings: {
        wdth: '93.8',
        YTLC: '507',
      },
      backgroundImage: {
        'login-image': "url('./src/image/loginBackgrounding.jpg')",
        'forgotpass-image': "url('./src/image/forgotpass.jpg')",
        'createacc-image': "url('./src/image/workers.jpg')",
      },
      colors: {
        pureRed: '#EB1D36',
        orange: '#C2452D',
        bgGrey: '#C7C8CC',
        bgdarkgrey: '#434343',
        bgBlack: '#191717',
        borderlineGrey: "#F5F7F8"
      },
      gridTemplateColumns: {
        // Define a custom grid template with 9 columns of different widths
        'custom-9': '.5fr .5fr .3fr 1.2fr .5fr .5fr .5fr .5fr .5fr',
      },
     
    },
  },
  plugins: [],
};