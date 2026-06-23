/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Aquí le decimos a Tailwind que use 'Montserrat'
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}