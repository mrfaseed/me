import { defineConfig } from 'vite';

export default defineConfig({
  // Vite serves index.html from project root by default
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    minify: 'terser',
  },
});
