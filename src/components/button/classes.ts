import { body } from "@/typography";
import { Solid, Outline, Link } from "./constants";

export const buttonClasses = {
    background : {
        [Solid]     : 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800',
        [Outline]   : 'bg-transparent hover:bg-primary-700 active:bg-primary-800',
        [Link]      : 'bg-transparent hover:bg-transparent active:bg-primary-800',
    },
    border      : {
        [Solid]     : 'border border-primary-600 hover:border-primary-700 active:border-primary-800',
        [Outline]   : 'border border-primary-700 hover:border-primary-700 active:border-primary-800',
        [Link]      : 'border border-transparent hover:border-primary-700 active:border-primary-800',
    },
    borderRadius: 'rounded',
    color       : {
        [Solid]     : 'text-primary-100',
        [Outline]   : 'text-primary-700 hover:text-primary-100 active:text-primary-100',
        [Link]      : 'text-primary-700 hover:text-primary-700 active:text-primary-100',
    },
    display     : 'inline-flex justify-center items-center',
    font        : body,
    outline     : '!outline-0',
    padding     : 'px-with-border-6 py-with-border-4',
    textAlign   : 'center',
}

export const leftIconClasses = {
    display : 'block',
    margin  : 'me-2',
}

export const childrenClasses = {
    display: 'block',
    height : 'min-h-5',
}

export const rightIconClasses = {
    display : 'block',
    margin  : 'ms-2',
}