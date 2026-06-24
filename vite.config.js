import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // Root now serves the v2 "Light" edition (index.html -> src/v2).
        main: resolve(__dirname, 'index.html'),
        // /v2 kept as an explicit alias of the root.
        v2: resolve(__dirname, 'v2.html'),
        // v1 archived/hidden — reachable at /v1 but not linked anywhere.
        v1: resolve(__dirname, 'v1.html'),
      },
    },
  },
})
