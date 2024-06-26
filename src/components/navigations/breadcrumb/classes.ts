import { Active, Idle } from "@/constants";
import { cardTitle } from "@/typography";

export const breadcrumbClasses = {
    display : 'flex',
    flex    : 'items-center',
    font    : cardTitle,
}

export const breadcrumbItemClasses = {
    color   : {
        [Active]: 'text-primary-600',
        [Idle]  : 'text-dark',
    },
    display : 'block',
    padding : 'px-no-border-2 py-no-border-1',
}
