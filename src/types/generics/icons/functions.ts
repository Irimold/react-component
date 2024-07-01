import { AvailableStates } from "@/constants";
import { IconVariants } from "./types";

export const isIconVariant = (value : any) : value is IconVariants => {
    if (!value) {
        return false
    }
    
    for (const state in AvailableStates) {
        if (state in value) {
            return true
        }
    }

    return false
}