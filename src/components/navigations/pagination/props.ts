import { ElementType } from "react"

export interface PaginationProps {
    max?            : number
    page?           : number
    href?           : (page : number) => string
    onClick?        : (page : number) => any
    linkComponent?  : ElementType
}