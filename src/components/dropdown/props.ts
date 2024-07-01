import { PassableIconElement } from "@/types/generics/icons";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export interface DropdownProps {
    togglerElement? : ElementType
    children?       : ReactNode
}

export interface DropdownItemProps extends ComponentPropsWithoutRef<'a'> {
    element?    : ElementType
    icon?       : PassableIconElement
}
