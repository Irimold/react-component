import { PassableIconElement } from "@/types";
import { ComponentPropsWithoutRef, ElementType } from "react";

export type DefaultSidebarComponentProps = ComponentPropsWithoutRef<'a'>

export interface SidebarItemProps extends ComponentPropsWithoutRef<'a'> {
    component?  : ElementType
    icon?       : PassableIconElement
    isActive?   : boolean
}