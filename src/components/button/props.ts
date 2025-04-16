import { ComponentPropsWithRef, ElementType } from "react";
import { Displays, Variants } from "./constants";
import { AvailableSizesType } from "@/constants";

type BaseProps<T extends ElementType> = ComponentPropsWithRef<T> & {
    variant?        : keyof typeof Variants
    leftIcon?       : ElementType
    rightIcon?      : ElementType
    linkComponent?  : ElementType
    display?        : keyof typeof Displays
    size?           : AvailableSizesType
}

export interface DefaultButtonProps extends BaseProps<'button'> {
    functionality?  : 'button'
}

export interface LinkButtonProps extends BaseProps<'a'> {
    functionality?  : 'link'
}

export type ButtonProps = DefaultButtonProps | LinkButtonProps

export type DefaultLinkProps = ComponentPropsWithRef<'a'>