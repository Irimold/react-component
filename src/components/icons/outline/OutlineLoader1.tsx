import * as React from "react";
import type { SVGProps } from "react";
const SvgOutlineLoader1 = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        fill="none"
        {...props}
    >
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M32 37.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666Z"
        />
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeWidth={4}
            d="M32 26.667c13.333 0 12.267 32-8 32"
            opacity={0.5}
        />
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeWidth={4}
            d="M32.832 37.333c-13.333 0-12.267-32 8-32"
            opacity={0.5}
        />
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeWidth={4}
            d="M26.667 32.832c0-13.333 32-12.267 32 8"
            opacity={0.5}
        />
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeWidth={4}
            d="M37.333 32c0 13.333-32 12.267-32-8"
            opacity={0.5}
        />
    </svg>
);
export default SvgOutlineLoader1;
