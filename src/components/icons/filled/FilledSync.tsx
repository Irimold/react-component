import * as React from "react";
import type { IconProps } from "../types";
export const FilledSync = ({
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
            d="M54.763 54.763c3.904-3.91 3.904-10.192 3.904-22.763 0-12.57 0-18.856-3.907-22.763C50.859 5.333 44.57 5.333 32 5.333c-12.57 0-18.856 0-22.763 3.904C5.333 13.147 5.333 19.43 5.333 32c0 12.57 0 18.856 3.904 22.76 3.91 3.907 10.192 3.907 22.763 3.907 12.57 0 18.856 0 22.76-3.907z"
            opacity={0.5}
        />
        <path
            fill="currentColor"
            d="M18.667 28.667a2.001 2.001 0 0 1-1.315-3.507l9.165-8a2 2 0 0 1 2.632 3.013L24 24.667h21.333a2 2 0 1 1 0 4zm16.186 15.16a2 2 0 0 0 2.63 3.013l9.165-8a2 2 0 0 0-1.315-3.507H18.667a2 2 0 0 0 0 4H40z"
        />
    </svg>
);
 
