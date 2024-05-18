import { BaseInputProps } from "../props";

export interface TextAreaProps extends BaseInputProps<'textarea'> {
    disableAutoResize?  : boolean
    minHeight?          : number
}