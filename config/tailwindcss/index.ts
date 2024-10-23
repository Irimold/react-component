import { Config } from "tailwindcss";
import { ThemeConf } from "./theme";

export const IrimoldTailwindPreset : Partial<Config> = {
    theme: ThemeConf
}

export const IrimoldTailwindContent = './node_modules/@irimold/react-component/dist/src/**/*.js'

export default IrimoldTailwindPreset

export {
    PrimaryColor,
    SecondaryColor,
    TertiaryColor,
    GreyColor,
    DarkColor,
    Colors
} from "./theme"