import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://raoxu.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
