import * as React from "react";
import type { SVGProps } from "react";
const SvgOutlineWarning = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        fill="none"
        {...props}
    >
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeWidth={4}
            d="M32 18.667v16"
        />
        <path
            fill="#3D9EC4"
            d="M32 45.333A2.667 2.667 0 1 0 32 40a2.667 2.667 0 0 0 0 5.333"
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z"
            opacity={0.5}
        />
    </svg>
);
export default SvgOutlineWarning;
