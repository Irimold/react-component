import { NegativeFlow, PositiveFlow } from "./constants"

export const descriptionClasses = {
    margin: 'mb-iri-7'
}

export const buttonContainerClasses = {
    display : 'flex',
    flex    : {
        default         : 'items-center',
        [PositiveFlow]  : 'justify-start flex-row-reverse',
        [NegativeFlow]  : 'justify-end flex-row',
    },
    gap     : 'gap-iri-2'
}
