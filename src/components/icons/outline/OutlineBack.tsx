import * as React from "react";
import type { SVGProps } from "react";
const SvgOutlineBack = (props: SVGProps<SVGSVGElement>) => (
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
            strokeLinejoin="round"
            strokeWidth={4}
            d="M53.333 32H10.667m0 0 16-16m-16 16 16 16"
        />
    </svg>
);
export default SvgOutlineBack;
