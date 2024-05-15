import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nw2/',
  // base: 'http://cp23nw2.sit.kmutt.ac.th/nw2/',
  server: {
    proxy: {

    }
  },
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['style.css'],
    },
  },
  preview: {
    host: true,
    port: 5173
  },
  publicDir: 'Public'
})