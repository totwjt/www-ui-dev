import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import VueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  root: './',
  plugins: [
    libCss(),
    vue(),
    VueJsx(),
    dts({
      insertTypesEntry: true,
      staticImport: true,
      copyDtsFiles: true,
      skipDiagnostics: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'demo-ui-lib',
      fileName: format => `demo-ui-lib.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    outDir: path.resolve(__dirname, '../../lib'),
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
