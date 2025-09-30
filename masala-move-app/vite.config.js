import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Proxy configuration to handle CORS issues during local
  server: {
    proxy: {
      '/api/swiggy': {
        target: 'https://www.swiggy.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/swiggy/, ''),
        headers: {
          'User-Agent': 'Mozilla/5.0'
        }
      }
    }
  }
})
