import { Active, Bottom, DefaultPosition, Idle, Left, Right, Top } from "@/constants"

export const dropdownClasses = {
    cursor      : 'cursor-pointer',
    identifier  : 'dropdown',
    position    : 'relative',
}

export const dropdownListClasses = {
    background  : 'bg-white',
    borderRadius: 'rounded',
    boxShadow   : 'shadow',
    display     : {
        [Idle]  : 'hidden',
        [Active]: 'block',
    },
    identifier: 'dropdown-list',
    overflow: 'overflow-hidden',
    padding: 'p-no-border-1',
    position: {
        [DefaultPosition]   : 'absolute',
        [Bottom]            : 'bottom-0',
        [Top]               : 'top-0',
        [Left]              : 'left-0',
        [Right]             : 'right-0',
    },
    transition: 'transition-all duration-300',
    translate: {
        [Bottom]: 'translate-y-full',
        [Top]   : '-translate-y-full'
    },
    height: {
        [Idle]: 'max-h-0',
        [Active]: 'max-h-full'
    }
}

export const dropdownItemClasses = {
    background  : 'bg-white hover:bg-grey-100',
    borderRadius: 'rounded',
    display     : 'flex',
    flex        : 'justify-start items-center',
    group       : 'group/dropdown-item',
    padding     : 'p-no-border-2',
}

export const dropdownItemIconClasses = {
    color: 'text-secondary',
    display : {
        [Idle]  : 'block group-hover/dropdown-item:hidden',
        [Active]: 'hidden group-hover/dropdown-item:block'
    },
    margin  : 'me-iri-2',
}