import { ComponentPropsWithoutRef, MouseEventHandler } from "react";
import { ImageSrcSetParserType, SrcSetType } from "./types";

export interface BrokenImageProps {
    className?  : string
    onClick?    : MouseEventHandler
}

export interface ImageProps extends Omit<ComponentPropsWithoutRef<"img">, 'srcSet'> {
    srcSetParser?       : ImageSrcSetParserType
    srcSetType?         : SrcSetType
    availableSrcSets?   : number[]
    disableSrcSet?      : boolean
    disablePlaceholder? : boolean
}