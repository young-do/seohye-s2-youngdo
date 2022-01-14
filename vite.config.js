import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { preprocess } from './svelte.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ preprocess })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: './',
  build: {
    assetsInlineLimit: 100000000,
  },
});
