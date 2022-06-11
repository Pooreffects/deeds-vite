/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          blueish: '#6C63FF',
        },
        darkBlue: {
          100: '#3F3D56',
        },
      },
    },
  },
  plugins: [],
};
