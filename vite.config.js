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
            entry : {
                'tailwindcss-config': './config/tailwindcss/index.ts', 
                'classes'           : './src/classes.ts',
                'constants'         : './src/constants/index.ts',
                'index'             : './src/index.ts'
            },
            formats: ['es'],
            fileName: (format, name) => `${name}.js`,
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