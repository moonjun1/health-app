import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  },
  define: {
    'import.meta.env.VITE_KAKAO_MAP_API_KEY': JSON.stringify(process.env.VITE_KAKAO_MAP_API_KEY)
  }
})
