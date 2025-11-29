/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'trail-green': '#2d5016',
        'forest-green': '#3d6b2a',
        'earth-brown': '#8b7355',
        'sandstone': '#c4a77d',
        'navy': '#1a2332',
        'muted-grey': '#6b7280',
        'topo-line': '#4a5568',
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

