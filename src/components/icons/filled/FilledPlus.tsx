import * as React from "react";
import type { IconProps } from "../types";
export const FilledPlus = ({
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
            d="M32 58.667c-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907"
            opacity={0.5}
        />
        <path
            fill="currentColor"
            d="M32 22a2 2 0 0 1 2 2v6h6a2 2 0 0 1 0 4h-6v6a2 2 0 0 1-4 0v-6h-6a2 2 0 0 1 0-4h6v-6a2 2 0 0 1 2-2"
        />
    </svg>
);
 
