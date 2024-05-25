import { cardTitle } from "@/typography";

export const breadcrumbClasses = {
    display : 'flex',
    flex    : 'align-items-center',
    font    : cardTitle,
}

export const breadcrumbItemClasses = {
    color   : {
        active  : 'text-primary-600',
        inactive: 'text-dark',
    },
    display : 'block',
    padding : 'px-no-border-2 py-no-border-1',
}
