/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'milker': ['Milker', 'sans-serif'],
        'tango': ['TangoSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}