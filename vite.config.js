import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true
        }),
        tsconfigPaths(),
    ],
    build: {
        lib: {
            entry : path.resolve(__dirname, 'src/index.ts'),
            name : 'IriReactComponent',
            formats: ['es', 'umd'],
            fileName: format => `index.${format}.js`,
        },
        rollupOptions: {
            external: [
                '@next/font',
                '@types/react',
                'react', 
                'autoprefixer', 
                'postcss', 
                'tailwindcss'
            ],
        },
    }
})