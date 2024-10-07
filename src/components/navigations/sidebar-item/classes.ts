import { Active, Hover, Idle } from "@/constants";
import { navigation } from "@/typography";

export const sidebarItemClasses = {
    background  : 'hover:bg-grey-100',
    borderRadius: 'rounded',
    color       : {
        [Active]: '!text-primary-600',
        [Idle]  : 'text-gray-500 hover:text-primary-600',
    },
    cursor      : 'cursor-pointer',
    display     : 'flex',
    flex        : 'justify-start items-center',
    font        : navigation,
    gap         : 'gap-4',
    group       : 'group/sidebar-item',
    padding     : 'p-borderless-2',
}

export const sidebarItemIconClasses = {
    display : {
        [Active]: 'block',
        [Idle]  : 'block group-hover/sidebar-item:hidden',
        [Hover] : 'hidden group-hover/sidebar-item:block',
    }
}