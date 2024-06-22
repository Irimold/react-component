import { MouseEventHandler } from "react";
import { BaseInputProps } from "../props";
import { Variants } from "./constants";

export type FileInputVariants = keyof typeof Variants

export interface FileInputProps extends Omit<BaseInputProps, 'multiple'> {
    withoutDisplay? : boolean
    src?            : string
    variant?        : FileInputVariants
}

export interface FileDisplayProps {
    src?        : string
    filename?   : string
    variant?    : FileInputVariants
    onClick?    : MouseEventHandler
}

export interface FileDisplayPlaceholderProps {
    filename?   : string
    onClick?    : MouseEventHandler
}