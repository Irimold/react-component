import * as React from "react";
import type { SVGProps } from "react";
const SvgFilledLink = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={64}
        height={64}
        fill="none"
        {...props}
    >
        <path
            fill="#3D9EC4"
            d="M41.941 10.357c3.824-3.84 9.419-3.92 12.518-.81 3.104 3.114 3.018 8.746-.808 12.586l-6.464 6.488a2 2 0 1 0 2.834 2.824l6.464-6.488c5.094-5.117 5.734-13.285.808-18.234-4.933-4.952-13.085-4.307-18.186.81L26.18 20.512c-5.098 5.117-5.738 13.285-.808 18.232a2 2 0 1 0 2.832-2.821c-3.101-3.115-3.018-8.747.808-12.587z"
        />
        <path
            fill="#3D9EC4"
            d="M38.627 25.253a2.002 2.002 0 1 0-2.835 2.827c3.104 3.115 3.019 8.744-.808 12.587l-12.93 12.976c-3.825 3.84-9.42 3.92-12.518.81-3.101-3.114-3.019-8.746.808-12.586l6.464-6.488a2 2 0 1 0-2.832-2.824l-6.464 6.488C2.416 44.16 1.776 52.328 6.707 57.28c4.933 4.955 13.085 4.307 18.184-.81l12.928-12.98c5.093-5.114 5.733-13.285.808-18.231z"
            opacity={0.5}
        />
    </svg>
);
export default SvgFilledLink;
