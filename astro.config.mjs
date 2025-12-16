import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import astroIcon from 'astro-icon';
import remarkGfm from 'remark-gfm';

const SITE_URL = process.env.SITE_URL ?? 'https://automationarchitech.com';

export default defineConfig({
  site: SITE_URL,
  srcDir: './src',
  integrations: [
    react(),
    tailwind({
      config: './tailwind.config.ts'
    }),
    mdx({
      remarkPlugins: [remarkGfm],
    }),
    sitemap(),
    astroIcon()
  ],
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});
