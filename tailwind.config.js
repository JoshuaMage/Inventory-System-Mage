/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
      },
      fontOpticalSizing: {
        auto: 'auto',
      },
      fontWeight: {
        normal: 100, // Replace with the desired weight
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
        'createacc-image' : "url('./src/image/workers.jpg')",
      },
      colors: {
        pureRed: '#EB1D36',
        orange: '#E85C0D'
      },
    },
  },
  plugins: [],
};