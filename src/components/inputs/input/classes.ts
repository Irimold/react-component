import { body } from "@/typography"

export const containerClasses = {
    font    : body,
    position: "relative",
}

export const inputClasses = {
    background  : "bg-white",
    border      : "border border-primary-600",
    borderRadius: "rounded",
    display     : "block",
    outline     : "!outline-0",
    padding     : "p-input-focus placeholder-shown:p-control",
    peer        : "peer",
    placeholder : "placeholder:text-transparent",
    width       : "w-full",
}

export const labelClasses = {
    color       : "text-primary",
    display     : "block",
    padding     : "px-control-x py-0 peer-placeholder-shown:px-control-x peer-placeholder-shown:py-control-y",
    position    : "absolute top-0 left-0",
    transition  : "transition-all",
    weight      : "font-semibold",
}