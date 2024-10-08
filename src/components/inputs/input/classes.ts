import { body } from "@/typography"

export const containerClasses = {
    font    : body,
    position: "relative",
}

export const inputClasses = {
    background  : "bg-white disabled:bg-grey-100 read-only:bg-transparent",
    border      : "border border-primary-600 disabled:border-grey-400 read-only:border-transparent",
    borderRadius: "rounded",
    color       : "text-dark disabled:text-grey-600 read-only:text-dark",
    display     : "block",
    outline     : "!outline-0",
    padding     : "px-bordered-6 pt-bordered-6 pb-bordered-2 placeholder-shown:py-bordered-4",
    peer        : "peer",
    placeholder : "placeholder:text-transparent",
    width       : "w-full",
}

export const labelClasses = {
    color       : "text-primary-600 peer-placeholder-shown:text-dark peer-disabled:text-grey-600 peer-read-only:text-dark",
    display     : "block",
    padding     : "px-bordered-6 py-0 peer-placeholder-shown:py-bordered-4",
    position    : "absolute top-0 left-0",
    transition  : "transition-all",
    weight      : "font-semibold peer-placeholder-shown:font-normal",
}