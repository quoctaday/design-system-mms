import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ 
      insertTypesEntry: true,
      include: ['src/components/ui', 'src/contexts', 'src/lib', 'src/index.ts'],
      tsconfigPath: './tsconfig.app.json'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MMSDesignSystem',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
