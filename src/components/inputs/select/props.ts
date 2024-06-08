import { GenericStringCallback } from "@/types";
import { BaseInputProps } from "../props";
import { SelectOptionType } from "./types";
import { MouseEventHandler, ReactNode } from "react";

export interface SelectProps extends BaseInputProps {
    options?    : SelectOptionType[]
    onCreate?   : GenericStringCallback
    onSearch?   : GenericStringCallback
    isLoading?  : boolean
}

export interface SelectOptionProps extends SelectOptionType {
    selected?   : boolean
    onClick?    : GenericStringCallback
}

export interface SelectOptionButtonProps {
    onClick?    : MouseEventHandler<HTMLButtonElement>
    children    : ReactNode
}