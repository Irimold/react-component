import { IrimoldTailwindPreset } from "./config/tailwindcss-config"

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    presets: [
        IrimoldTailwindPreset
    ],
    plugins: [],
}

