// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true, // clear docs/ on each build
  },
});
