import * as React from "react";
import type { IconProps } from "../types";
export const OutlineSearch = ({
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
        <mask
            id="OutlineSearch_svg__a"
            width={58}
            height={58}
            x={3}
            y={3}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <path
                stroke="gray"
                strokeWidth={4}
                d="M30.667 56C44.657 56 56 44.658 56 30.667 56 16.675 44.658 5.333 30.667 5.333c-13.992 0-25.334 11.342-25.334 25.334C5.333 44.657 16.675 56 30.667 56Z"
            />
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth={4}
                d="m53.333 53.333 5.334 5.334"
            />
        </mask>
        <g mask="url(#OutlineSearch_svg__a)">
            <path fill="currentColor" d="M0 0h64v64H0z" />
        </g>
    </svg>
);
 
