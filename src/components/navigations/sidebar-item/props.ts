import { PassableIconElement } from "@/types";
import { ComponentPropsWithRef, ElementType } from "react";

export type DefaultSidebarComponentProps = ComponentPropsWithRef<'a'>

export interface SidebarItemProps extends ComponentPropsWithRef<'a'> {
    component?  : ElementType
    icon?       : PassableIconElement
    isActive?   : boolean
}