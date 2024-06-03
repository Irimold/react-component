import { Free, Limited } from "./constants"

export const cardClasses = {
    group       : 'group/card',
    position    : 'relative',
    width       : 'w-80 max-w-80',
}

export const cardImageContainerClasses = {
    height      : 'h-80 max-h-80',
    width       : 'w-80 max-w-80'
}

export const cardImageClasses = {
    filter      : 'group-hover/card:brightness-75',
    transition  : 'transition-all',
    transform   : 'group-hover/card:scale-125',
}

export const cardDetailClasses = {
    padding : 'px-no-border-4 py-no-border-2'
}

export const cardBodyClasses = {
    height      : {
        [Free]      : 'h-fit',
        [Limited]   : 'h-[4.5em]'
    },
    lineClamp   : {
        [Free]      : '',
        [Limited]   : 'line-clamp-3',
    },
}
