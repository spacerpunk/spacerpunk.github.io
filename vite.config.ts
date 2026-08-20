// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    // Honor the port assigned via the PORT env var (e.g. the preview harness);
    // fall back to Vite's default when unset.
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
});
