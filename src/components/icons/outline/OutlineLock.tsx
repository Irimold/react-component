import * as React from "react";
import type { IconProps } from "../types";
export const OutlineLock = ({
    size = 64,
    ...props
} : IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        {...props}
    >
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M5.333 42.667c0-7.542 0-11.315 2.344-13.656 2.342-2.344 6.115-2.344 13.656-2.344h21.334c7.54 0 11.314 0 13.656 2.344 2.344 2.341 2.344 6.114 2.344 13.656 0 7.541 0 11.314-2.344 13.656-2.342 2.344-6.115 2.344-13.656 2.344H21.333c-7.541 0-11.314 0-13.656-2.344-2.344-2.342-2.344-6.115-2.344-13.656Z"
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M32 48a5.333 5.333 0 1 0 0-10.667A5.333 5.333 0 0 0 32 48Z"
            opacity={0.5}
        />
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeWidth={4}
            d="M16 26.667v-5.334a16 16 0 1 1 32 0v5.334"
            opacity={0.5}
        />
    </svg>
);
 
