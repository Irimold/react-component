import { BaseInputProps } from "../types";

export interface TextAreaProps extends BaseInputProps<'textarea'> {
    disableAutoResize?  : boolean
    minHeight?          : number
}