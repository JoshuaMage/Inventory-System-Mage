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
      },
    },
  },
  plugins: [],
};
