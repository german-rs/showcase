import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/showcase/site-02/',
  build: { outDir: 'dist', emptyOutDir: true },
})
