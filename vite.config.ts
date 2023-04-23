import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.indexOf('embedded-webview') !== -1
      }
    }
  })],
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'embedded-webview',
      fileName: 'embedded-webview'
    }
  },
  define: {
    'process.env': {}
  }
})
