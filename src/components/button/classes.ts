import { body } from "@/typography";
import { Solid, Outline, Link, Inline, Block } from "./constants";

export const buttonClasses = {
    background : {
        [Solid]     : 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800 disabled:bg-grey-200',
        [Outline]   : 'bg-transparent hover:bg-primary-700 active:bg-primary-800 disabled:bg-transparent',
        [Link]      : 'bg-transparent hover:bg-transparent active:bg-primary-800 disabled:bg-transparent',
    },
    border      : {
        [Solid]     : 'border border-primary-600 hover:border-primary-700 active:border-primary-800 disabled:border-grey-200',
        [Outline]   : 'border border-primary-700 hover:border-primary-700 active:border-primary-800 disabled:border-grey-300',
        [Link]      : 'border border-transparent hover:border-primary-700 active:border-primary-800 disabled:border-transparent',
    },
    borderRadius: 'rounded',
    color       : {
        [Solid]     : 'text-primary-100 disabled:text-grey-400',
        [Outline]   : 'text-primary-700 hover:text-primary-100 active:text-primary-100 disabled:text-grey-300',
        [Link]      : 'text-primary-700 hover:text-primary-700 active:text-primary-100 disabled:text-grey-300',
    },
    display     : {
        [Inline]    : 'inline-flex',
        [Block]     : 'flex',
    },
    flex        : 'justify-center items-center',
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