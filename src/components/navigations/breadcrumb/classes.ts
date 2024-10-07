import { Active, Idle } from "@/constants";
import { smallNavigation } from "@/typography";

export const breadcrumbClasses = {
    display : 'flex',
    flex    : 'items-center',
    font    : smallNavigation,
}

export const breadcrumbItemClasses = {
    color   : {
        [Active]: 'text-primary-600',
        [Idle]  : 'text-dark',
    },
    display : 'block',
    padding : 'px-borderless-2 py-borderless-1',
}
