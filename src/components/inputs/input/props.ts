import { ComponentPropsWithoutRef } from "react";
import { InputChangeHandler } from "../types";

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
    onChange?   : InputChangeHandler<string>
    type?       : inputTypes
}