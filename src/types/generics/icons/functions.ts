import { AvailableStates } from "@/constants";
import { IconVariants } from "./types";

export const isIconVariant = (value : any) : value is IconVariants => {
    for (const state in AvailableStates) {
        if (state in value) {
            return true
        }
    }

    return false
}