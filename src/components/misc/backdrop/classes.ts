import { Active, DefaultState, Idle } from "@/constants";

export const backdropClasses = {
    background  : 'bg-dark',
    display     : {
        [Idle]  : 'hidden',
        [Active]: 'block lg:hidden'
    },
    identifier  : 'sidebar-backdrop',
    opacity     : {
        [Idle]  : 'opacity-0',
        [Active]: 'opacity-25',
        [DefaultState]: 'lg:opacity-0',
    },
    position    : 'fixed inset-0',
    transition  : 'transition-all duration-300',
    zIndex      : 'z-40',
}
