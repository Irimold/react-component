import { ComponentPropsWithoutRef } from "react";
import { InputChangeHandler } from "../types";

export interface TextAreaProps extends Omit<ComponentPropsWithoutRef<'textarea'>, 'onChange' | 'name'> {
    name                : string
    label?              : string
    onChange?           : InputChangeHandler<string>
    disableAutoResize?  : boolean
    minHeight?          : number
}