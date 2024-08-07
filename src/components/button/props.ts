import { ComponentPropsWithoutRef, ElementType } from "react";
import { Displays, Variants } from "./constants";

type BaseProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
    variant?        : keyof typeof Variants
    leftIcon?       : ElementType
    rightIcon?      : ElementType
    linkComponent?  : ElementType
    display?        : keyof typeof Displays
}

export interface DefaultButtonProps extends BaseProps<'button'> {
    functionality?  : 'button'
}

export interface LinkButtonProps extends BaseProps<'a'> {
    functionality?  : 'link'
}

export type ButtonProps = DefaultButtonProps | LinkButtonProps

export type DefaultLinkProps = ComponentPropsWithoutRef<'a'>