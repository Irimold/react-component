import { ComponentPropsWithoutRef } from "react";
import { ImageSrcSetParserType } from "./types";

export interface ImageProps extends Omit<ComponentPropsWithoutRef<"img">, 'srcSet'> {
    srcSetParser?       : ImageSrcSetParserType
    availableSrcSets?   : number[]
    disableSrcSet?      : boolean
}