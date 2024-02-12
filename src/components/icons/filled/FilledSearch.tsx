import * as React from "react";
import type { IconProps } from "../types";
export const FilledSearch = ({
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
            d="M54.168 29.752a24.417 24.417 0 0 1-33.82 22.79 24.419 24.419 0 1 1 33.82-22.79"
            opacity={0.5}
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M50.237 50.237a1.928 1.928 0 0 1 2.726 0l5.141 5.139a1.93 1.93 0 0 1-2.728 2.728L50.24 52.96a1.928 1.928 0 0 1 0-2.725z"
            clipRule="evenodd"
        />
    </svg>
);
 
