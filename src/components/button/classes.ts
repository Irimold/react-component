import { body } from "@/typography";

export const backgroundClasses = {
    solid   : 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800',
    outline : 'bg-transparent hover:bg-primary-700 active:bg-primary-800',
    link    : 'bg-transparent hover:bg-transparent active:bg-primary-800',
}

export const borderClasses = {
    solid   : 'border border-primary-600 hover:border-primary-700 active:border-primary-800',
    outline : 'border border-primary-700 hover:border-primary-700 active:border-primary-800',
    link    : 'border border-transparent hover:border-primary-700 active:border-primary-800',
}

export const borderRadiusClass = 'rounded'

export const colorClasses = {
    solid   : 'text-primary-100',
    outline : 'text-primary-700 hover:text-primary-100 active:text-primary-100',
    link    : 'text-primary-700 hover:text-primary-700 active:text-primary-100',
}

export const fontSizeClass = body

export const textAlignClass= 'center'

export const leftIconClasses = {
    display : 'inline-block',
    margin  : 'me-2',
}

export const rightIconClasses = {
    display : 'inline-block',
    margin  : 'mr-2',
}