import * as React from "react";
import type { SVGProps } from "react";
const SvgOutlineCopy = (props: SVGProps<SVGSVGElement>) => (
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
            d="M16 29.333c0-7.541 0-11.314 2.344-13.656 2.341-2.344 6.115-2.344 13.656-2.344h8c7.541 0 11.315 0 13.656 2.344C56 18.02 56 21.792 56 29.333v13.334c0 7.541 0 11.314-2.344 13.656-2.341 2.344-6.115 2.344-13.656 2.344h-8c-7.541 0-11.315 0-13.656-2.344C16 53.98 16 50.208 16 42.667z"
        />
        <path
            stroke="#3D9EC4"
            strokeWidth={4}
            d="M16 50.667a8 8 0 0 1-8-8v-16C8 16.61 8 11.58 11.125 8.459c3.123-3.126 8.152-3.126 18.208-3.126H40a8 8 0 0 1 8 8"
            opacity={0.5}
        />
    </svg>
);
export default SvgOutlineCopy;
