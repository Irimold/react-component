import { body } from "@/typography";

export const buttonClasses = {
    background : {
        solid   : 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800',
        outline : 'bg-transparent hover:bg-primary-700 active:bg-primary-800',
        link    : 'bg-transparent hover:bg-transparent active:bg-primary-800',
    },
    border      : {
        solid   : 'border border-primary-600 hover:border-primary-700 active:border-primary-800',
        outline : 'border border-primary-700 hover:border-primary-700 active:border-primary-800',
        link    : 'border border-transparent hover:border-primary-700 active:border-primary-800',
    },
    borderRadius: 'rounded',
    color       : {
        solid   : 'text-primary-100',
        outline : 'text-primary-700 hover:text-primary-100 active:text-primary-100',
        link    : 'text-primary-700 hover:text-primary-700 active:text-primary-100',
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