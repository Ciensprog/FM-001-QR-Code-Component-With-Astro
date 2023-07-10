import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

/*
|-------------------------------------------------------------------------------
| Configuration
|-------------------------------------------------------------------------------
*/

// https://astro.build/config
export default defineConfig({
  base: '/FM-001-QR-Code-Component-With-Astro/',
  compressHTML: true,
  integrations: [tailwind()],
  site: 'https://ciensprog.github.io',
})
