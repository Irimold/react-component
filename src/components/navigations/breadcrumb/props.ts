import { ComponentPropsWithoutRef, ElementType } from "react";
import { BreadcrumbObject } from "./types";

export type DefaultBreadcrumbItemProps = ComponentPropsWithoutRef<'a'>

export interface BreadcrumbProps {
    itemComponent?  : ElementType
    items           : BreadcrumbObject[]
}