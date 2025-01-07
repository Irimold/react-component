import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'
import preserveDirectives from 'rollup-plugin-preserve-directives'

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true
        }),
        preserveDirectives(),
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
                'tailwindcss',
                'react-dom',
                'react/jsx-runtime',
                '@irimold/react-hooks',
                '@irimold/react-icons',
            ],
            output: {
                globals: {
                    'react'             : 'react',
                    'react-dom'         : 'ReactDOM',
                    'react/jsx-runtime' : 'react/jsx-runtime',
                },
                preserveModules: true
            }
        },
    },
    resolve: {
        alias: {
            "@" : path.resolve(__dirname, './src/'),
        }
    }
})