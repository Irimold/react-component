import * as React from "react";
import type { IconProps } from "../types";
export const FilledBack = ({
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
            strokeLinejoin="round"
            strokeWidth={4}
            d="M53.333 32H10.667m0 0 16-16m-16 16 16 16"
        />
    </svg>
);
 
