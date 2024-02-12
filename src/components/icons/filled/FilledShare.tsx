import * as React from "react";
import type { IconProps } from "../types";
export const FilledShare = ({
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
            fillRule="evenodd"
            d="M43.32 20.693 57.112 6.904l-.008-.008c-3.165-3.165-9.163-1.168-21.16 2.832l-13.73 4.576c-9.68 3.227-14.52 4.843-15.894 7.208a7.245 7.245 0 0 0 0 7.28c1.373 2.368 6.213 3.981 15.893 7.21 1.2.4 2.552.113 3.451-.775L40.347 20.68a2.107 2.107 0 0 1 2.973.013"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            d="m49.694 41.787 4.578-13.734c3.995-11.986 5.995-17.984 2.837-21.152l-13.791 13.79a2.107 2.107 0 0 1-.014 2.978L28.861 37.981a3.726 3.726 0 0 0-.864 3.803c3.227 9.683 4.84 14.523 7.209 15.899a7.237 7.237 0 0 0 7.28 0c2.367-1.376 3.98-6.214 7.208-15.899z"
            opacity={0.5}
        />
    </svg>
);
 
