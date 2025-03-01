import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        lucide: ['*'],
        mdi: ['facebook', 'twitter', 'instagram']
      }
    })
  ],
  image: {
    domains: ['placeholder.com'],
    remotePatterns: [{ protocol: "https" }]
  },
  output: 'static',
  site: 'https://basshamut.github.io/',
  base: '/gruas-tremart-landing/'
});

