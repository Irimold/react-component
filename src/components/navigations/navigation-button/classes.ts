import { Dark, Large, Light, Medium, Primary, Small } from "./constants";

export const navBtnClasses = {
    background  : 'bg-transparent',
    border      : 'border-0',
    cursor      : 'cursor-pointer',
    display     : 'lg:hidden',
    height      : {
        [Small] : 'h-[24px]',
        [Medium]: 'h-[30px]',
        [Large] : 'h-[36px]',
    },
    position    : 'relative',
    width       : {
        [Small] : 'w-[24px]',
        [Medium]: 'w-[30px]',
        [Large] : 'w-[36px]',
    }
}

export const navBtnBarClasses = {
    background: {
        [Dark]      : 'bg-dark',
        [Light]     : 'bg-gray-50',
        [Primary]   : 'bg-primary',
    },
    display : 'block',
    height  : {
        [Small] : 'h-[2px]',
        [Medium]: 'h-[3px]',
        [Large] : 'h-[4px]',
    },
    opacity     : 'even:opacity-0',
    position    : 'absolute top-0 start-0',
    transform   : {
        [Small] : {
            active  : 'translate-y-11 first:rotate-45 last:-rotate-45',
            inactive: 'first:translate-y-3 even:translate-y-11 last:translate-y-19',
        },
        [Medium]: {
            active  : 'translate-y-14 first:rotate-45 last:-rotate-45',
            inactive: 'first:translate-y-4 even:translate-y-14 last:translate-y-24',
        },
        [Large] : {
            active  : 'translate-y-16 first:rotate-45 last:-rotate-45',
            inactive: 'first:translate-y-6 even:translate-y-16 last:translate-y-26',
        },
    },
    transition  : 'transition-all',
    width   : {
        [Small] : 'w-[24px]',
        [Medium]: 'w-[30px]',
        [Large] : 'w-[36px]',
    }
}