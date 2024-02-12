import * as React from "react";
import type { IconProps } from "../types";
export const OutlineLogout = ({
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
            strokeLinecap="round"
            strokeWidth={4}
            d="M21.339 18.667c.032-5.8.288-8.942 2.338-10.99 2.342-2.344 6.115-2.344 13.656-2.344H40c7.541 0 11.315 0 13.656 2.344C56 10.02 56 13.792 56 21.333v21.334c0 7.541 0 11.314-2.344 13.656-2.341 2.344-6.115 2.344-13.656 2.344h-2.667c-7.541 0-11.314 0-13.656-2.344-2.05-2.048-2.306-5.19-2.338-10.99"
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M21.333 52c-6.285 0-9.429 0-11.381-1.952C8 48.093 8 44.952 8 38.667V25.333c0-6.285 0-9.429 1.952-11.381S15.048 12 21.333 12"
            opacity={0.5}
        />
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M40 32H16m0 0 5.333 5.333M16 32l5.333-5.333"
        />
    </svg>
);
 
