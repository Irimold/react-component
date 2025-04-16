import { ComponentPropsWithRef } from "react";
import { ColorVariants } from "./constants";
import { AvailableSizesType } from "@/constants";

export interface NavigationButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
    color?      : keyof typeof ColorVariants,
    isActive?   : boolean,
    showOnLarge?: boolean,
    size?       : AvailableSizesType,
}