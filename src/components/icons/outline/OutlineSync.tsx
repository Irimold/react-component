import * as React from "react";
import type { IconProps } from "../types";
export const OutlineSync = ({
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
            d="M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z"
            opacity={0.5}
        />
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M45.333 26.667H18.667l9.167-8m-9.167 18.666h26.666l-9.165 8"
        />
    </svg>
);
 
