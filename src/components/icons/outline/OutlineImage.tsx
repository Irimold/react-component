import * as React from "react";
import type { SVGProps } from "react";
const SvgOutlineImage = (props: SVGProps<SVGSVGElement>) => (
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
            d="M5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32Z"
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M42.667 26.667a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667Z"
            opacity={0.5}
        />
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeWidth={4}
            d="m5.333 33.333 4.672-4.088a6.133 6.133 0 0 1 8.374.28l11.44 11.44a5.333 5.333 0 0 0 6.837.592l.797-.56a8 8 0 0 1 9.95.6L56 49.333"
            opacity={0.5}
        />
    </svg>
);
export default SvgOutlineImage;
