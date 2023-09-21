/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      'grey' : '#404040',
      'pink-light': '#f1d4e5',
      'pink-primary' : '#f266ab',
      'salmon' : '#f2d8d8'

    },
    extend: {
      fontFamily: {
        sacramento: ['var(--font-sacramento)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-header': 'url("/bgheader.jpg")',
        'header2': 'url("/bgheader3.jpg")',
      },
      animation: {
        pulseNoTrans: 'pulseNoTrans 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fadeIn : 'fadeIn 2s ease-in infinite',
        fadeOut : 'fadeOut 2s ease-out infinite',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.8' },
        },
        fadeIn: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        pulseNoTrans: { 
          '0%' : {transform: 'scale(1)'},
          '50%' : {transform: 'scale(1.05)'},
          '100%' : {transform: 'scale(1)'},
        }
      },
    },
  },
  plugins: [],
}
