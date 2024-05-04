import { body } from "@/typography"

export const containerClasses = {
    font    : body,
    position: "relative",
}

export const inputClasses = {
    background  : "bg-white",
    border      : "border border-primary-600",
    outline     : "!outline-0",
    padding     : "p-control placeholder-shown:p-input-focus",
    peer        : "peer",
    placeholder : "placeholder:text-transparent",
}

export const labelClasses = {
    color       : "text-primary",
    display     : "block",
    padding     : "px-control-x py-0 peer-placeholder-shown:px-control-x peer-placeholder-shown:py-control-y",
    position    : "absolute top-0 left-0",
    transition  : "transition-all",
    weight      : "font-semibold",
}