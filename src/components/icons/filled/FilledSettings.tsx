import * as React from "react";
import type { SVGProps } from "react";
const SvgFilledSettings = (props: SVGProps<SVGSVGElement>) => (
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
            d="M42.667 28.667a2 2 0 0 1-2-2V13.333a2 2 0 0 1 4 0v13.334a2 2 0 0 1-2 2m-23.334 8.666a2 2 0 0 1 4 0v13.334a2 2 0 0 1-4 0zm23.334 15.334a2 2 0 0 1-2-2V48a2 2 0 1 1 4 0v2.667a2 2 0 0 1-2 2M19.333 13.333a2 2 0 0 1 4 0V16a2 2 0 0 1-4 0z"
        />
        <path
            fill="#3D9EC4"
            fillRule="evenodd"
            d="M42.667 44.667a7.333 7.333 0 1 0 0-14.667 7.333 7.333 0 0 0 0 14.667m0-4a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666m-14-14a7.333 7.333 0 1 0-14.667 0 7.333 7.333 0 0 0 14.667 0m-4 0a3.333 3.333 0 1 0-6.667 0 3.333 3.333 0 0 0 6.667 0"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgFilledSettings;
