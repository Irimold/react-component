import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { ImageSrcSetParserType, SrcSetType } from "../multimedias/image/types";

export interface CardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'content'> {
    title?              : string
    imgSrc?             : string
    disableSrcSet?      : boolean
    srcSetParser?       : ImageSrcSetParserType
    srcSetType?         : SrcSetType
    availableSrcSets?   : number[]
    href?               : string
    actionText?         : string
    content?            : ReactNode
    linkComponent?      : ElementType
}

export interface CardTitleProps {
    title       : string
    className?  : string
}

export interface CardBodyProps {
    children    : ReactNode
    className?  : string
}

export interface CardActionProps {
    children?       : ReactNode
    className?      : string
    href?           : string
    linkComponent?  : ElementType
}