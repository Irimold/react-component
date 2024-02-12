import * as React from "react";
import type { IconProps } from "../types";
export const OutlineRepo = ({
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
            d="M44 20h-8"
            opacity={0.5}
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M13.333 13.912c0-1.528 0-2.293.13-2.93.569-2.806 2.934-4.998 5.953-5.529.685-.12 1.51-.12 3.157-.12.72 0 1.083 0 1.43.03a7.804 7.804 0 0 1 4.069 1.565c.267.208.523.445 1.035.917l1.026.955c1.523 1.413 2.286 2.12 3.195 2.592a7.746 7.746 0 0 0 1.584.608c1.005.267 2.08.267 4.235.267h.696c4.914 0 7.373 0 8.968 1.333.146.123.288.253.418.39 1.438 1.482 1.438 3.765 1.438 8.327v3.816c0 6.536 0 9.806-2.187 11.835C46.293 40 42.773 40 35.733 40h-7.466c-7.04 0-10.56 0-12.747-2.03-2.187-2.031-2.187-5.303-2.187-11.837z"
        />
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeWidth={4}
            d="M58.667 53.333H37.333m-32 0h21.334M32 48v-8"
            opacity={0.5}
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M32 58.667A5.333 5.333 0 1 0 32 48a5.333 5.333 0 0 0 0 10.667Z"
        />
    </svg>
);
 
