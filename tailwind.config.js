/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: '#BFF747',
        blackfade2: '#212121',
        'blackfade2-40': 'rgba(33, 33, 33, 0.4)',
        'blackfade2-70': 'rgba(33, 33, 33, 0.7)',
      },
      animation: {
        'spin-grow': 'spin-grow 2s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        'spin-grow': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'fadeInUp': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'translate-x-0',
    'translate-x-full',
    'translate-y-0',
    'translate-y-full',
    'scale-0',
    'scale-100',
    'opacity-0',
    'opacity-100',
    'hidden',
    'block',
    'flex',
    'lg:hidden',
    'lg:block',
    'lg:flex',
    'grid',
    'bg-red-500',
    'bg-black',
    'text-white',
    'text-black',
    'z-[9999]',
    'z-50',
    'z-10',
  ],
} 