import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true
        })
    ],
    build: {
        lib: {
            entry : ['./config/tailwindcss-config.ts', './src/index.ts'],
            name : 'IriReactComponent',
            formats: ['es'],
            fileName: (format, name) => `${name}.${format}.js`,
        },
        rollupOptions: {
            external: [
                '@types/react',
                'react', 
                'autoprefixer', 
                'postcss', 
                'tailwindcss'
            ],
        },
    },
    resolve: {
        alias: {
            "@" : path.resolve(__dirname, './src/'),
        }
    }
})