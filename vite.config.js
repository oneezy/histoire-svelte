

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { HstSvelte } from '@histoire/plugin-svelte'
import { defaultColors } from 'histoire'

export default defineConfig({
  plugins: [
    svelte(),
  ],
  histoire: {
    plugins: [
      HstSvelte(),
    ],
    setupFile: '/histoire.setup.js',
    tree: {
      groups: [
        {
          id: 'top',
          title: '',
        },
      ],
    },
    theme: {
      title: 'Onezy',
      logo: {
        square: '/assets/logo.svg',
        light: '/assets/logo.svg',
        dark: '/assets/logo.svg'
      },
      logoHref: '/',
      favicon: '/assets/favicon.png',

      colors: {
        gray: defaultColors.slate,
        primary: defaultColors.blue
      }
    }
  },
})
