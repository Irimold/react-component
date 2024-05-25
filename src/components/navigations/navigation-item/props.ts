import { ComponentPropsWithoutRef, ElementType } from "react";

export type DefaultAnchorProps = ComponentPropsWithoutRef<'a'>

export interface NavigationItemProps extends ComponentPropsWithoutRef<'a'> {
    isActive?   : boolean
    component?  : ElementType
}

export interface NavigationItemLineProps {
    isActive: boolean
}