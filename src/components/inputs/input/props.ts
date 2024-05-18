import { BaseInputProps } from "../props";

type inputTypes = 
    | "email" 
    | "number" 
    | "password"
    | "search" 
    | "tel" 
    | "text"
    | "url"

export interface InputProps extends BaseInputProps {
    type?       : inputTypes
}