import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type BaseProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
    variant?    : 'solid' | 'outline' | 'link'
    leftIcon?   : ReactNode
    rightIcon?  : ReactNode
}

export interface DefaultButtonProps extends BaseProps<'button'> {
    functionality?  : 'button',
}

export interface LinkButtonProps extends BaseProps<'a'> {
    functionality?  : 'link',
}

export type ButtonProps = DefaultButtonProps | LinkButtonProps