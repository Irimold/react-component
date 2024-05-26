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
    group   : 'group/sidebar-item',
    padding : 'p-no-border-2',
}

export const sidebarItemIconClasses = {
    display : {
        active      : 'block',
        idle        : 'block group-hover/sidebar-item:hidden',
        interacted  : 'hidden group-hover/sidebar-item:block',
    },
    margin  : 'me-2',
}