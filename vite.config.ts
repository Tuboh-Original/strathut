import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
import svgr from 'vite-plugin-svgr'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  basicSsl(),
  viteCompression({
    algorithm: 'brotliCompress'
  }),
  svgr(),],
})
