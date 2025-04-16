import { ComponentPropsWithRef, MouseEventHandler } from "react";
import { ImageSrcSetParserType, SrcSetType } from "./types";

export interface BrokenImageProps {
    className?  : string
    onClick?    : MouseEventHandler
    width?      : number | string
    height?     : number | string
}

export interface ImageProps extends Omit<ComponentPropsWithRef<"img">, 'srcSet'> {
    srcSetParser?       : ImageSrcSetParserType
    srcSetType?         : SrcSetType
    availableSrcSets?   : number[]
    disableSrcSet?      : boolean
    disablePlaceholder? : boolean
}