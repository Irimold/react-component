import * as React from "react";
import type { SVGProps } from "react";
const SvgFilledUnlock = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        fill="none"
        {...props}
    >
        <path
            fill="#3D9EC4"
            d="M5.333 42.667c0-7.542 0-11.315 2.344-13.656 2.342-2.344 6.115-2.344 13.656-2.344h21.334c7.54 0 11.314 0 13.656 2.344 2.344 2.341 2.344 6.114 2.344 13.656 0 7.541 0 11.314-2.344 13.656-2.342 2.344-6.115 2.344-13.656 2.344H21.333c-7.541 0-11.314 0-13.656-2.344-2.344-2.342-2.344-6.115-2.344-13.656"
            opacity={0.5}
        />
        <path
            fill="#3D9EC4"
            d="M32 48a5.333 5.333 0 1 0 0-10.666A5.333 5.333 0 0 0 32 48M18 21.333a14 14 0 0 1 27.56-3.501 2 2 0 0 0 3.872-.997A18 18 0 0 0 14 21.333v5.48a62.947 62.947 0 0 1 4-.136z"
        />
    </svg>
);
export default SvgFilledUnlock;
