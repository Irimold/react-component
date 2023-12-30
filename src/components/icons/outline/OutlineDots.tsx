import * as React from "react";
import type { SVGProps } from "react";
const SvgOutlineDots = (props: SVGProps<SVGSVGElement>) => (
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
            d="M13.333 37.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666Z"
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M32 37.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666Z"
            opacity={0.5}
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M50.667 37.333a5.333 5.333 0 1 0 0-10.666 5.333 5.333 0 0 0 0 10.666Z"
        />
    </svg>
);
export default SvgOutlineDots;
