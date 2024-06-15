import { body, information } from "@/typography";

export const containerClasses = {
    font    : body,
    position: "relative"
}

export const textAreaClasses = {
    background  : "bg-white disabled:bg-grey-100",
    border      : "border border-primary-600 disabled:border-grey-400",
    borderRadius: "rounded",
    color       : "text-dark disabled:text-grey-600",
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
    color       : "text-primary-600 peer-placeholder-shown:text-dark peer-disabled:text-grey-600",
    display     : "block",
    padding     : "px-with-border-6 py-0 peer-placeholder-shown:py-with-border-6",
    position    : "absolute top-0 left-0",
    transition  : "transition-all",
    weight      : "font-semibold peer-placeholder-shown:font-normal",
}

export const counterClasses = {
    color       : "text-tertiary-400 peer-disabled:text-grey-600",
    display     : "block peer-placeholder-shown:hidden",
    font        : information,
    padding     : "px-with-border-6",
    position    : "absolute bottom-0 right-0",
}