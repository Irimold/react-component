import * as React from "react";
import type { SVGProps } from "react";
const SvgOutlineSave = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.237 54.763c3.91 3.904 10.192 3.904 22.763 3.904 12.57 0 18.856 0 22.76-3.907 3.907-3.901 3.907-10.19 3.907-22.76 0-.91 0-1.365-.04-1.83a10.779 10.779 0 0 0-2.456-5.93 22.11 22.11 0 0 0-1.288-1.344L41.103 9.117A22.5 22.5 0 0 0 39.76 7.83a10.781 10.781 0 0 0-5.93-2.453c-.465-.043-.918-.043-1.83-.043-12.57 0-18.856 0-22.763 3.904C5.333 13.147 5.333 19.43 5.333 32c0 12.57 0 18.859 3.904 22.763Z"
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M45.333 58.667V56c0-5.03 0-7.541-1.562-9.104-1.563-1.563-4.075-1.563-9.105-1.563h-5.333c-5.03 0-7.541 0-9.104 1.563-1.562 1.563-1.562 4.075-1.562 9.104v2.667"
        />
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeWidth={4}
            d="M18.667 21.333h16"
            opacity={0.5}
        />
    </svg>
);
export default SvgOutlineSave;
