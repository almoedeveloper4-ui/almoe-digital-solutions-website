import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
      allowedHosts: [".trycloudflare.com"],
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:1337',
        changeOrigin: true,
      },
      '/admin': {
        target: 'http://localhost:1337',
        changeOrigin: true,
      },
    },
  },
})