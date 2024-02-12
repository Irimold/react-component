import * as React from "react";
import type { IconProps } from "../types";
export const FilledLogout = ({
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
            fill="currentColor"
            d="M40 5.333h-2.667c-7.541 0-11.314 0-13.656 2.344-2.344 2.342-2.344 6.115-2.344 13.656v21.334c0 7.541 0 11.314 2.344 13.656 2.342 2.344 6.115 2.344 13.656 2.344H40c7.541 0 11.315 0 13.656-2.344C56 53.98 56 50.208 56 42.667V21.333c0-7.541 0-11.314-2.344-13.656C51.315 5.333 47.54 5.333 40 5.333"
            opacity={0.6}
        />
        <path
            fill="currentColor"
            d="M21.333 21.333c0-4.101 0-7.085.376-9.333h-.376c-6.285 0-9.429 0-11.381 1.952S8 19.048 8 25.333v13.334c0 6.285 0 9.426 1.952 11.381C11.904 52 15.048 52 21.333 52h.376c-.376-2.248-.376-5.232-.376-9.333z"
            opacity={0.4}
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M11.92 30.587a2 2 0 0 0 0 2.826l5.333 5.334a2 2 0 0 0 2.827-2.827L18.16 34h19.173a2 2 0 1 0 0-4H18.16l1.92-1.92a2 2 0 1 0-2.827-2.827z"
            clipRule="evenodd"
        />
    </svg>
);
 
