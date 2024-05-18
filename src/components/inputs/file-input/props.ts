import { BaseInputProps } from "../props";
import { Variants } from "./constants";

export interface FileInputProps extends Omit<BaseInputProps, 'multiple'> {
    withoutDisplay? : boolean,
    src?            : string,
    variant?        : keyof typeof Variants
}

export interface FileDisplayProps {
    src?: string,
}