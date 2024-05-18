import { Hovering, Separate } from "./constants"

export const containerClasses = {
    borderRadius: {
        [Hovering] : 'rounded',
        [Separate] : ''
    },
    display     : 'flex',
    flex        : 'flex-col items-center',
    position    : 'relative',
    width       : 'w-full',
}

export const displayClasses = {
    height  : {
        [Hovering] : 'h-[30rem]',
        [Separate] : 'h-60',
    },
    maxWidth: {
        [Hovering] : 'max-w-[30rem]',
        [Separate] : 'max-w-[15rem]',
    },
    position: 'relative',
    width   : 'w-full',
}

export const imageClass = {
    height      : 'h-full',
    objectFit   : 'object-cover',
    width       : 'w-full',
}

export const labelClasses = {
    background  : {
        [Hovering]  : 'bg-white/75',
        [Separate]  : 'bg-transparent',
    },
    borderRadius: 'rounded',
    display     : 'block',
    text        : 'sr-only',
    position: {
        [Hovering] : 'absolute bottom-0 left-0',
        [Separate] : 'relative',
    },
    width   : 'w-full',
}

export const inputClasses = {
    background  : 'file:bg-primary-600 file:hover:bg-primary-700 file:active:bg-primary-800',
    border      : 'file:border file:border-primary-600 file:hover:border-primary-700 file:active:border-primary-800',
    borderRadius: 'rounded file:rounded',
    color       : 'text-dark file:text-primary-100',
    display     : 'block',
    margin      : 'file:mr-iri-2',
    padding     : 'file:px-with-border-6 file:py-with-border-4',
    width       : 'w-full',
}