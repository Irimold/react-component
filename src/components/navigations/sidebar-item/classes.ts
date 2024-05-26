import { navigation } from "@/typography";

export const sidebarItemClasses = {
    color   : {
        active  : '!text-primary-600',
        inactive: 'text-gray-500 hover:text-primary-600',
    },
    cursor  : 'cursor-pointer',
    display : 'flex',
    flex    : 'justify-start items-center',
    font    : navigation,
    padding : 'p-no-border-2',
}

export const sidebarItemIconClasses = {
    display : {
        active      : 'block',
        idle        : 'block hover:hidden',
        interacted  : 'hidden hover:block',
    },
    margin  : 'me-2',
}