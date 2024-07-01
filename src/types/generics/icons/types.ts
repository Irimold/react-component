import { AvailableStateTypes } from "@/constants";
import { ElementType } from "react";

export type IconVariants = {
    [key in AvailableStateTypes]? : ElementType
}

export type PassableIconElement = ElementType | IconVariants