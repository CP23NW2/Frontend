import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://capstone23.sit.kmutt.ac.th/nw2/',
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
  server: {
    hmr: {
        host: 'http://capstone23.sit.kmutt.ac.th/nw2/',
    },
},
})
