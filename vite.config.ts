import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

const isAppBuild = process.env.VITE_BUILD_APP === 'true'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ...(!isAppBuild ? [dts({ 
      insertTypesEntry: true,
      include: ['src/components/ui', 'src/contexts', 'src/lib', 'src/index.ts'],
      tsconfigPath: './tsconfig.app.json'
    })] : [])
  ],
  build: isAppBuild
    ? {
        outDir: 'dist-app',
        rollupOptions: {
          input: resolve(__dirname, 'index.html'),
        }
      }
    : {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'MMSDesignSystem',
          fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        }
      }
})
