import { BaseInputProps } from "../types";

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