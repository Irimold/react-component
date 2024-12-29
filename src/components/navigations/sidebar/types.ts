import { PassableIconElement } from "@/types"
import { Dispatch, SetStateAction } from "react"

export interface SidebarItemType {
    label   : string
    icons   : PassableIconElement
    href    : string
}

export type SidebarContextType = [boolean, Dispatch<SetStateAction<boolean>>]
