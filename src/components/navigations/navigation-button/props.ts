import { ComponentPropsWithoutRef } from "react";
import { ColorVariants, SizeVariants } from "./constants";

export interface NavigationButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'children'> {
    color?      : keyof typeof ColorVariants,
    isActive?   : boolean,
    size?       : keyof typeof SizeVariants,
}