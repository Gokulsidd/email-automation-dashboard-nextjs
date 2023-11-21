/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary':'#0052CC',
        'secondary':'#0065ff',
        'fadedBg':'#DEEBFF',
        'textSoft':'#42526e',
        'textDark':'#253858',
        'borderColor':'#E0E0E0',
        'iconColor':'#A3A2B9'
      }
    },
  },
  plugins: [],
}
