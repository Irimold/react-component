import * as React from "react";
import type { SVGProps } from "react";
const SvgFilledCheck = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        fill="none"
        {...props}
    >
        <path
            fill="#3D9EC4"
            d="M32 58.667c-12.57 0-18.856 0-22.763-3.907C5.333 50.859 5.333 44.57 5.333 32c0-12.57 0-18.856 3.904-22.763C13.147 5.333 19.43 5.333 32 5.333c12.57 0 18.856 0 22.76 3.904 3.907 3.91 3.907 10.192 3.907 22.763 0 12.57 0 18.856-3.907 22.76-3.901 3.907-10.19 3.907-22.76 3.907"
            opacity={0.5}
        />
        <path
            fill="#3D9EC4"
            d="M42.747 23.92a2 2 0 0 1 0 2.827L29.413 40.08a2 2 0 0 1-2.826 0l-5.334-5.333a2 2 0 1 1 2.827-2.827L28 35.84l11.92-11.92a2 2 0 0 1 2.827 0"
        />
    </svg>
);
export default SvgFilledCheck;
