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
        'custom-9': '.5fr .5fr .3fr 1.2fr .6fr .5fr .5fr .5fr .5fr',
        'custom-12': ' .8fr .8fr .8fr .3fr .8fr .6fr .8fr .9fr 1fr .8fr .8fr 1fr .8fr',
        'custom-15': ' 1fr 1fr .3fr 1.5fr .5fr .5fr .5fr .8fr .8fr .4fr .7fr .7fr 1fr .8fr 1fr',
      },
     
    },
  },
  plugins: [],
};