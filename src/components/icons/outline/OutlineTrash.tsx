import * as React from "react";
import type { IconProps } from "../types";
export const OutlineTrash = ({
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
            d="M54.667 16H9.333m40.888 6.667-1.226 18.4c-.472 7.077-.707 10.616-3.014 12.773C43.675 56 40.128 56 33.031 56h-2.063c-7.093 0-10.64 0-12.95-2.16-2.306-2.157-2.54-5.696-3.013-12.773l-1.226-18.4"
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M17.333 16h.294a5.333 5.333 0 0 0 4.88-3.52l.09-.275.259-.776c.221-.664.333-.994.48-1.277a4 4 0 0 1 2.917-2.101C26.565 8 26.915 8 27.613 8h8.774c.698 0 1.048 0 1.36.05a4 4 0 0 1 2.917 2.102c.147.283.259.613.48 1.277l.259.776A5.333 5.333 0 0 0 46.667 16"
            opacity={0.5}
        />
    </svg>
);
 
