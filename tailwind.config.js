/** @type {import('tailwindcss').Config} */
const req = require('tailwindcss-animation-delay');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    req,
  ],
};
