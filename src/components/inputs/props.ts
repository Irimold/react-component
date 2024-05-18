import { ComponentPropsWithoutRef, ElementType } from "react"
import { InputChangeHandler } from "./types"

export type BaseInputProps <T extends ElementType = "input"> = Omit<ComponentPropsWithoutRef<T>, 'onChange' | 'name' | 'type'> & {
    onChange?   : InputChangeHandler
    name        : string
    label?      : string
}