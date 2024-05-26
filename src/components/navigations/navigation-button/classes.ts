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
    outline     : 'outline-0',
    padding     : 'p-0',
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
            active  : 'translate-y-[11px] first:rotate-45 last:-rotate-45',
            inactive: 'first:translate-y-[3px] even:translate-y-[11px] last:translate-y-[19px]',
        },
        [Medium]: {
            active  : 'translate-y-[14px] first:rotate-45 last:-rotate-45',
            inactive: 'first:translate-y-[4px] even:translate-y-[14px] last:translate-y-[24px]',
        },
        [Large] : {
            active  : 'translate-y-[16px] first:rotate-45 last:-rotate-45',
            inactive: 'first:translate-y-[6px] even:translate-y-[16px] last:translate-y-[26px]',
        },
    },
    transition  : 'transition-all',
    width   : {
        [Small] : 'w-[24px]',
        [Medium]: 'w-[30px]',
        [Large] : 'w-[36px]',
    }
}