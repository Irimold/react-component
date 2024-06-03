import { body, cardTitle } from "@/typography";

export const baseCardClasses = {
    background  : 'bg-white',
    borderRadius: 'rounded',
    boxShadow   : 'shadow',
    overflow    : 'overflow-hidden',
}

export const cardTitleClasses = {
    font    : cardTitle,
    margin  : 'mb-iri-2',
}

export const cardBodyClasses = {
    font    : body,
    height  : 'min-h-24',
    margin  : 'mb-iri-2',
}

export const cardImageClasses = {
    height      : 'h-full',
    objectFit   : 'object-cover',
    width       : 'w-full'
}

export const cardActionClasses = {
    position    : 'after:absolute after:inset-0',
}