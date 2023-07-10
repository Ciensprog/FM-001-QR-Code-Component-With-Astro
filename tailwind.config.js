const colors = {
  default: '#D5E1EF',
  'dark-navy': {
    normal: '#1F314F',
  },
  grape: {
    normal: '#3E52A3',
  },
  grey: {
    normal: '#7D889E',
  },
}

/*
|-------------------------------------------------------------------------------
| Configuration
|-------------------------------------------------------------------------------
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      colors,
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
}
