import { ComponentPropsWithoutRef } from "react";

interface InputChangeParams {
    name    : string
    value   : string
}

type inputTypes = 
    | "email" 
    | "number" 
    | "password"
    | "search" 
    | "tel" 
    | "text"
    | "url"

export interface InputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'name' | 'type'> {
    name        : string
    label?      : string
    onChange?   : (params: InputChangeParams) => void
    type?       : inputTypes
}