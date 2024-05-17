import { compilerOptions, transformAssetUrls } from 'vue3-pixi'
import { defineConfig } from 'vitest/config'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions, // <- support custom elements without warning
        transformAssetUrls, // <- support for asset url conversion
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
