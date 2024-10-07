import { CustomThemeConfig } from "tailwindcss/types/config";
import { Animations, KeyFrames } from "./animations";
import { BorderRadiuses } from "./border-radiuses";
import { BoxShadows } from "./box-shadows";
import { Colors } from "./colors";
import { FontSizes } from "./fonts";
import { GapSetup, MarginSetup, PaddingSetup } from "./spacings";

export const ExtendThemeConf : Partial<CustomThemeConfig> = {
    animation: Animations,
    borderRadius: BorderRadiuses,
    boxShadow: BoxShadows,
    colors: Colors,
    fontSize: FontSizes,
    gap: GapSetup,
    keyframes: KeyFrames,
    margin: MarginSetup,
    padding: PaddingSetup
}