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
            entry : './src/index.ts',
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
    },
    resolve: {
        alias: {
            "@/icons" : path.resolve(__dirname, './src/components/icons/'),
            "@" : path.resolve(__dirname, './src/'),
        }
    }
})