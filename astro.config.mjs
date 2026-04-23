import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fsoshield.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: 'directory',
  },
});
