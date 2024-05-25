import { ComponentPropsWithoutRef, ElementType } from "react";

export type DefaultSidebarComponentProps = ComponentPropsWithoutRef<'a'>

export interface SidebarItemProps extends ComponentPropsWithoutRef<'a'> {
    component?  : ElementType
    icon?       : ElementType
    activeIcon? : ElementType
    isActive?   : boolean
}