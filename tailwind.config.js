/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Style Script', 'cursive'],
      },
      colors: {
        cyan: '#00ffff', // Custom cyan color to match gradient
      },
      keyframes: {
        'animated-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 1))' }, // Fully opaque white, larger blur
          '50%': { filter: 'drop-shadow(0 0 30px rgba(0, 0, 0, 1))' }, // Fully opaque black, larger blur
        }
      },
      animation: {
        'animated-glow': 'animated-glow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
