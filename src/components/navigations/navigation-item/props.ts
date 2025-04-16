import { ComponentPropsWithRef, ElementType } from "react";

export type DefaultAnchorProps = ComponentPropsWithRef<'a'>

export interface NavigationItemProps extends ComponentPropsWithRef<'a'> {
    isActive?   : boolean
    component?  : ElementType
}

export interface NavigationItemLineProps {
    isActive: boolean
}