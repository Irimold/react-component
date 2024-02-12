import * as React from "react";
import type { IconProps } from "../types";
export const FilledWarning = ({
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
            d="M32 5.333c-12.57 0-18.856 0-22.763 3.904C5.333 13.147 5.333 19.43 5.333 32c0 12.57 0 18.856 3.904 22.76 3.91 3.907 10.192 3.907 22.763 3.907 12.57 0 18.856 0 22.76-3.907 3.907-3.901 3.907-10.19 3.907-22.76 0-12.57 0-18.856-3.907-22.763C50.859 5.333 44.57 5.333 32 5.333"
            opacity={0.5}
        />
        <path
            fill="currentColor"
            d="M32 16.667a2 2 0 0 1 2 2v16a2 2 0 0 1-4 0v-16a2 2 0 0 1 2-2m0 28.666A2.666 2.666 0 1 0 32 40a2.666 2.666 0 0 0 0 5.333"
        />
    </svg>
);
 
