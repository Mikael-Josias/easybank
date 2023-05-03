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
        'lime-green': 'hsl(136, 65%, 51%)',
        'dark-blue': 'hsl(233, 26%, 24%)',
        'bright-cyan': 'hsl(192, 70%, 51%)',
        'dark-gray': 'hsl(233, 8%, 62%)',
        'light-gray': 'hsl(0, 0%, 98%)',
      },
      spacing: {
        'anchor-2': 'calc(100% - 4px)',
      },
    }
  },
  plugins: [],
}
