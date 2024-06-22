import { Hovering, Separate } from "./constants"

export const containerClasses = {
    borderRadius: {
        [Hovering] : 'rounded',
        [Separate] : ''
    },
    display     : 'flex',
    flex        : 'flex-col items-center',
    minHeight   : {
        [Hovering] : 'min-h-12',
        [Separate] : '',
    },
    overflow    : 'overflow-hidden',
    position    : 'relative',
    width       : 'w-full',
}

export const displayClasses = {
    height  : {
        [Hovering] : 'h-[30rem]',
        [Separate] : 'h-60',
    },
    maxWidth: {
        [Hovering] : '',
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

export const placeholderClass = {
    background  : 'bg-white',
    borderRadius: 'rounded',
    display     : 'flex',
    flex        : 'flex-col justify-center items-center',
    height      : 'h-full',
    padding     : 'p-no-border-4',
    width       : 'w-full',
}

export const placeholderIconClass = {
    color   : 'text-secondary',
    display : 'block',
    margin  : 'mb-iri-6',
}

export const placeholderLabelClass = {
    color   : 'text-dark',
    margin  : 'mb-0',
    padding : 'pb-0',
    text    : 'truncate',
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
    background  : 'file:bg-primary-600 file:hover:bg-primary-700 file:active:bg-primary-800 file:disabled:bg-grey-200',
    border      : 'file:border file:border-solid file:border-primary-600 file:hover:border-primary-700 file:active:border-primary-800 file:disabled:border-grey-200',
    borderRadius: 'rounded file:rounded',
    color       : 'text-dark file:text-primary-100 file:disabled:text-grey-400',
    display     : 'block',
    margin      : 'file:me-iri-2',
    padding     : 'file:px-with-border-6 file:py-with-border-4',
    width       : 'w-full',
}
