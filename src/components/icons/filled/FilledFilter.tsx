import * as React from "react";
import type { IconProps } from "../types";
export const FilledFilter = ({
    size = 64,
    ...props
} : IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.333 8h37.334L23.509 35.157a7.214 7.214 0 0 0-2.074-2.896c-.608-.528-1.46-1.005-3.155-1.962l-7.768-4.374c-2.53-1.421-3.795-2.133-4.485-3.28-.694-1.149-.694-2.536-.694-5.304v-1.84c0-3.536 0-5.306 1.174-6.405C7.675 8 9.56 8 13.333 8"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            d="M58.667 17.344v-1.84c0-3.536 0-5.307-1.174-6.405C56.325 8 54.44 8 50.667 8l-27.16 27.157c.133.344.24.702.322 1.075.17.76.17 1.65.17 3.43v7.12c0 2.423 0 3.637.673 4.58.672.947 1.867 1.414 4.25 2.347 5.011 1.958 7.515 2.936 9.297 1.822 1.78-1.112 1.78-3.659 1.78-8.752v-7.12c0-1.776 0-2.667.169-3.427a7.147 7.147 0 0 1 2.4-3.973c.605-.526 1.453-1.003 3.152-1.96l7.768-4.374c2.528-1.421 3.795-2.133 4.485-3.28.694-1.146.694-2.533.694-5.301"
            opacity={0.5}
        />
    </svg>
);
 
