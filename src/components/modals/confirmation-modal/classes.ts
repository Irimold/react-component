import { NegativeFlow, PositiveFlow } from "./constants"

export const descriptionClasses = {
    margin: 'mb-iri-6'
}

export const buttonContainerClasses = {
    display : 'flex',
    flex    : {
        default         : 'items-center',
        [PositiveFlow]  : 'justify-start flex-row-reverse',
        [NegativeFlow]  : 'justify-end flex-row',
    }
}

export const confirmButtonClasses = {
    margin: {
        [PositiveFlow] : '',
        [NegativeFlow] : 'me-iri-2',
    }
}

export const cancelButtonClasses = {
    margin: {
        [PositiveFlow] : 'me-iri-2',
        [NegativeFlow] : '',
    }
}