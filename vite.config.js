import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        products: resolve(__dirname, 'products/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        'contact-us': resolve(__dirname, 'contact-us/index.html'),
      }
    }
  }
})
