import { ComponentPropsWithoutRef } from "react";
import { ImageSrcSetParserType, SrcSetType } from "./types";

export interface BrokenImageProps {
    className? : string
}

export interface ImageProps extends Omit<ComponentPropsWithoutRef<"img">, 'srcSet'> {
    srcSetParser?       : ImageSrcSetParserType
    srcSetType?         : SrcSetType
    availableSrcSets?   : number[]
    disableSrcSet?      : boolean
    disablePlaceholder? : boolean
}