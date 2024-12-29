import { AvailableStateTypes } from "@/constants";
import { ComponentPropsWithoutRef } from "react";

export interface BackdropProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
    state: Exclude<AvailableStateTypes, 'default' | 'hover'>
}
