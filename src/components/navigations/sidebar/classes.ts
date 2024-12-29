import { Active, DefaultState, Idle } from "@/constants";

export const sidebarClasses = {
    background  : 'bg-white',
    flex        : 'lg:shrink-0',
    height      : 'h-screen max-h-screen',
    overflow    : 'overflow-auto',
    padding     : {
        [Idle]  : 'p-0',
        [Active]: 'px-borderless-6 py-borderless-3',
    },
    position    : 'fixed lg:sticky left-0 inset-y-0',
    transition  : 'transition-all duration-300',
    width       : {
        [DefaultState]  : 'w-[240px]',
        [Idle]          : 'max-w-0',
        [Active]        : 'max-w-[240px]',
    },
    zIndex      : 'z-50 lg:z-0'
}

export const sidebarItemClasses = {
    margin  : 'mx-auto mb-iri-6 last:mb-0',
}
