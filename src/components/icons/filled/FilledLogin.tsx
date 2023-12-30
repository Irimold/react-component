import * as React from "react";
import type { SVGProps } from "react";
const SvgFilledLogin = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        fill="none"
        {...props}
    >
        <path
            fill="#3D9EC4"
            d="M40 5.333h-2.667c-7.541 0-11.314 0-13.656 2.344-2.344 2.342-2.344 6.115-2.344 13.656v21.334c0 7.541 0 11.314 2.344 13.656 2.342 2.344 6.115 2.344 13.656 2.344H40c7.541 0 11.315 0 13.656-2.344C56 53.98 56 50.208 56 42.667V21.333c0-7.541 0-11.314-2.344-13.656C51.315 5.333 47.54 5.333 40 5.333"
            opacity={0.6}
        />
        <path
            fill="#3D9EC4"
            d="M21.333 21.333c0-4.101 0-7.085.376-9.333h-.376c-6.285 0-9.429 0-11.381 1.952S8 19.048 8 25.333v13.334c0 6.285 0 9.426 1.952 11.381C11.904 52 15.048 52 21.333 52h.376c-.376-2.248-.376-5.232-.376-9.333z"
            opacity={0.4}
        />
        <path
            fill="#3D9EC4"
            fillRule="evenodd"
            d="M38.747 30.587a2 2 0 0 1 0 2.826l-5.334 5.334a2 2 0 1 1-2.826-2.827l1.92-1.92H13.333a2 2 0 1 1 0-4h19.174l-1.92-1.92a2 2 0 1 1 2.826-2.827z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgFilledLogin;
