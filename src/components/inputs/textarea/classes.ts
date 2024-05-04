import { body, information } from "@/typography";

export const containerClasses = {
    font    : body,
    position: "relative"
}

export const textAreaClasses = {
    background  : "bg-white",
    border      : "border border-primary-600",
    borderRadius: "rounded",
    display     : "block",
    outline     : "!outline-0",
    overflow    : "overflow-hidden",
    padding     : "p-with-border-6",
    peer        : "peer",
    placeholder : "placeholder:text-transparent",
    resize      : "resize-none",
    width       : "w-full",
}

export const labelClasses = {
    color       : "text-primary-600",
    display     : "block",
    padding     : "px-with-border-6 py-0 peer-placeholder-shown:py-with-border-6",
    position    : "absolute top-0 left-0",
    transition  : "transition-all",
    weight      : "font-semibold",
}

export const counterClasses = {
    color       : "text-tertiary-400",
    display     : "block peer-placeholder-shown:hidden",
    font        : information,
    padding     : "px-with-border-6",
    position    : "absolute bottom-0 right-0",
}