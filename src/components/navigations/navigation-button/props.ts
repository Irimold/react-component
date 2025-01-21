import { ComponentPropsWithoutRef } from "react";
import { ColorVariants } from "./constants";
import { AvailableSizesType } from "@/constants";

export interface NavigationButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'children'> {
    color?      : keyof typeof ColorVariants,
    isActive?   : boolean,
    showOnLarge?: boolean,
    size?       : AvailableSizesType,
}