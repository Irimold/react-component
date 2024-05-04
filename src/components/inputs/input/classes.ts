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
    padding     : "px-with-border-6 pt-with-border-6 pb-with-border-2 placeholder-shown:py-with-border-4",
    peer        : "peer",
    placeholder : "placeholder:text-transparent",
    width       : "w-full",
}

export const labelClasses = {
    color       : "text-primary-600",
    display     : "block",
    padding     : "px-with-border-6 py-0 peer-placeholder-shown:py-with-border-4",
    position    : "absolute top-0 left-0",
    transition  : "transition-all",
    weight      : "font-semibold",
}