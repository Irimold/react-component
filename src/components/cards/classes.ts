import { body, cardTitle } from "@/typography";

export const baseCardClasses = {
    background  : 'bg-white',
    borderRadius: 'rounded',
    boxShadow   : 'shadow',
    overflow    : 'overflow-hidden',
}

export const cardTitleClasses = {
    font: cardTitle,
}

export const cardBodyClasses = {
    font    : body,
    height  : 'min-h-24',
}

export const cardActionClasses = {
    position    : 'after:absolute after:inset-0',
}