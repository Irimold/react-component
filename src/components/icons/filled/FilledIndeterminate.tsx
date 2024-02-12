import * as React from "react";
import type { IconProps } from "../types";
export const FilledIndeterminate = ({
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
            d="M9.237 54.763c3.91 3.904 10.192 3.904 22.763 3.904 12.57 0 18.856 0 22.76-3.907 3.907-3.901 3.907-10.19 3.907-22.76 0-12.57 0-18.856-3.907-22.763C50.859 5.333 44.57 5.333 32 5.333c-12.57 0-18.856 0-22.763 3.904C5.333 13.147 5.333 19.43 5.333 32c0 12.57 0 18.859 3.904 22.763"
            opacity={0.5}
        />
        <path
            fill="currentColor"
            d="M21.333 34.667a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333m10.667 0a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334m10.667 0a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334"
        />
    </svg>
);
 
