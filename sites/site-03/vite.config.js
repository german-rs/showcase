import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/showcase/site-03/',
  build: { outDir: 'dist', emptyOutDir: true },
})
