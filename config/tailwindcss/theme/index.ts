import { CustomThemeConfig } from "tailwindcss/types/config";
import { ExtendThemeConf } from "./extend";

type ThemeConfType = Partial<CustomThemeConfig & {extend : Partial<CustomThemeConfig>}>

export const ThemeConf : ThemeConfType = {
    extend: ExtendThemeConf
}