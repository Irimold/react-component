import * as React from "react";
import type { SVGProps } from "react";
const SvgOutlineLogin = (props: SVGProps<SVGSVGElement>) => (
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
            d="M21.333 42.667c0 7.541 0 11.314 2.344 13.656 2.342 2.344 6.115 2.344 13.656 2.344H40c7.541 0 11.315 0 13.656-2.344C56 53.98 56 50.208 56 42.667V21.333c0-7.541 0-11.314-2.344-13.656C51.315 5.333 47.54 5.333 40 5.333h-2.667c-7.541 0-11.314 0-13.656 2.344-2.344 2.342-2.344 6.115-2.344 13.656"
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M21.333 52c-6.285 0-9.429 0-11.381-1.952C8 48.093 8 44.952 8 38.667V25.333c0-6.285 0-9.429 1.952-11.381S15.048 12 21.333 12"
            opacity={0.5}
        />
        <path
            stroke="#3D9EC4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M16 32h24m0 0-6.667 6.667M40 32l-6.667-6.667"
        />
    </svg>
);
export default SvgOutlineLogin;
