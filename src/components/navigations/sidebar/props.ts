import { ElementType } from "react";
import { SidebarItemType } from "./types";

export interface SidebarProps {
    items           : SidebarItemType[]
    logo?           : ElementType
    currentlyActive?: string
    linkElement?    : ElementType
    className?      : string
}
