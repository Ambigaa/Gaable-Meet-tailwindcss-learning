import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Gaable-Meet-tailwindcss-learning/',
  plugins: [
    tailwindcss(),
  ],
})