import { Config } from "tailwindcss"
import { IrimoldTailwindPreset } from "./config/tailwindcss"

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    presets: [
        IrimoldTailwindPreset
    ],
    plugins: [],
} satisfies Config

