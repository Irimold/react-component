import { BaseInputProps } from "../props";
import { Variants } from "./constants";

export type FileInputVariants = keyof typeof Variants

export interface FileInputProps extends Omit<BaseInputProps, 'multiple'> {
    withoutDisplay? : boolean,
    src?            : string,
    variant?        : FileInputVariants
}

export interface FileDisplayProps {
    src?    : string,
    variant?: FileInputVariants
}