import { TabItemType } from "./types"

export interface TabProps {
    className?  : string
    onSelect?   : (selected: any) => void
    items       : TabItemType[]
}