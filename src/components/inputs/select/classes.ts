import { Active, Idle } from "@/constants"
import { body } from "@/typography"

export const containerClasses = {
    position: 'relative',
}

export const optionContainerClasses = {
    background  : 'bg-white',
    borderRadius: 'rounded',
    boxShadow   : 'shadow',
    display     : {
        [Idle]  : 'hidden',
        [Active]: 'block',
    },
    font        : body,
    padding     : 'p-borderless-2',
    position    : 'absolute bottom-0',
    transform   : 'translate-y-full',
    width       : 'w-full',
    zIndex      : 'z-30',
}

export const optionClasses = {
    background  : 'bg-white hover:bg-grey-100',
    border      : 'border-0',
    borderRadius: 'rounded',
    display     : 'flex',
    flex        : 'items-center',
    margin      : 'mb-iri-1 last:mb-0',
    padding     : 'p-borderless-2',
    width       : 'w-full',
}

export const optionIconClasses = {
    color   : 'text-secondary',
    margin  : 'me-iri-1',
    opacity : {
        [Idle]  : 'opacity-0',
        [Active]: 'opacity-1',
    }
}
