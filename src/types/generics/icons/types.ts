import { AvailableStateTypes } from "@/constants";
import { ElementType } from "react";

export type IconVariants = Record<AvailableStateTypes, ElementType>

export type PassableIconElement = ElementType | IconVariants