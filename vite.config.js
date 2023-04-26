import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://late-exairu.github.io/',
  plugins: [react()],
  build: {
    outDir: './build'
  }
})
