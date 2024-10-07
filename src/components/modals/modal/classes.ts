import { subTitle } from "@/typography"

export const modalClasses = {
    backdrop    : 'backdrop:bg-dark/25',
    background  : 'bg-white',
    border      : 'border-0',
    borderRadius: 'rounded',
    boxShadow   : 'shadow',
    identifier  : 'modal',
    transition  : 'transition-all duration-300',
}

export const modalHeaderClasses = {
    border  : 'border-b border-grey-200',
    display : 'flex',
    flex    : 'justify-between items-center',
    font    : subTitle,
    padding : 'px-borderless-7 pt-borderless-7 pb-bordered-7',
}

export const modalBodyClasses = {
    padding : 'p-borderless-7',
}