import { defineConfig } from 'vite';

export default defineConfig({
  // Your Vite configuration options go here
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    open: true
  }
});
