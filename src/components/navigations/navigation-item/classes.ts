import { navigation } from "@/typography";

export const navItemClasses = {
    color   : 'text-dark hover:text-dark active:text-dark visited:text-dark',
    cursor  : 'cursor-pointer',
    display : 'block',
    font    : navigation,
    group   : 'group',
    margin  : 'mx-auto lg:mx-iri-7 lg:my-iri-5',
    padding : 'px-no-border-7 py-no-border-5 lg:p-0',
    position: 'relative',
}

export const navItemLineClasses = {
    background  : 'bg-primary',
    display     : 'block',
    height      : 'h-[3px]',
    position    : 'absolute bottom-0 left-full',
    transform   : '-translate-x-full',
    transition  : 'transition-all',
    width       : {
        active  : 'w-full',
        inactive: 'w-0 group-hover:w-full',
    }
}