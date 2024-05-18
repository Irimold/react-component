import { ComponentPropsWithoutRef, ElementType } from "react"

export interface InputChangeParams<T> {
    name: string
    value: T
}

export type InputChangeHandler<T = any> = (params: InputChangeParams<T>) => void

export type BaseInputProps <T extends ElementType = "input"> = Omit<ComponentPropsWithoutRef<T>, 'onChange' | 'name' | 'type'> & {
    onChange?   : InputChangeHandler
    name        : string
    label?      : string
}