import * as React from "react";
import type { SVGProps } from "react";
const SvgFilledSearch = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        fill="none"
        {...props}
    >
        <path
            fill="#3D9EC4"
            d="M54.168 29.752a24.417 24.417 0 0 1-33.82 22.79 24.419 24.419 0 1 1 33.82-22.79"
            opacity={0.5}
        />
        <path
            fill="#3D9EC4"
            fillRule="evenodd"
            d="M50.237 50.237a1.928 1.928 0 0 1 2.726 0l5.141 5.139a1.93 1.93 0 0 1-2.728 2.728L50.24 52.96a1.928 1.928 0 0 1 0-2.725z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgFilledSearch;
