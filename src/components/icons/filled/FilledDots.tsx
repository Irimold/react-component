import * as React from "react";
import type { SVGProps } from "react";
const SvgFilledDots = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        fill="none"
        {...props}
    >
        <path
            fill="#3D9EC4"
            d="M18.667 32A5.333 5.333 0 1 1 8 32a5.333 5.333 0 0 1 10.667 0M56 32a5.333 5.333 0 1 1-10.667 0A5.333 5.333 0 0 1 56 32"
        />
        <path
            fill="#3D9EC4"
            d="M37.333 32a5.333 5.333 0 1 1-10.666 0 5.333 5.333 0 0 1 10.666 0"
            opacity={0.5}
        />
    </svg>
);
export default SvgFilledDots;
