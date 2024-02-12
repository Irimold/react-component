import * as React from "react";
import type { IconProps } from "../types";
export const FilledDownload = ({
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
            d="M26.667 58.667h10.666c10.056 0 15.086 0 18.208-3.126 3.126-3.122 3.126-8.152 3.126-18.208v-1.165c0-2.328 0-4.077-.115-5.501H47.747c-2.926 0-5.512 0-7.595-.28-2.259-.304-4.517-1-6.36-2.843-1.845-1.845-2.541-4.104-2.845-6.363-.28-2.082-.28-4.666-.28-7.594l.026-7.558c0-.221.019-.437.054-.65-1.091-.046-2.384-.046-4-.046-10.11 0-15.166 0-18.288 3.126-3.126 3.122-3.126 8.152-3.126 18.208v10.666c0 10.056 0 15.086 3.126 18.208 3.122 3.126 8.152 3.126 18.208 3.126"
            clipRule="evenodd"
            opacity={0.5}
        />
        <path
            fill="currentColor"
            d="M24.035 50.792a2 2 0 0 1-2.736 0l-5.334-5a2 2 0 0 1 2.736-2.917l1.966 1.84V36a2 2 0 0 1 4 0v8.717l1.965-1.842a2 2 0 0 1 2.736 2.917zm6.658-44.765-.026 7.56c0 2.925 0 5.509.28 7.594.304 2.259 1 4.518 2.845 6.36 1.84 1.843 4.101 2.542 6.36 2.846 2.083.28 4.67.28 7.595.28h10.805c.035.413.059.856.075 1.333h.04c0-.715 0-1.072-.027-1.493a14.193 14.193 0 0 0-2.555-7.043c-.25-.341-.421-.544-.76-.952-2.114-2.528-4.898-5.68-7.325-7.845-2.16-1.931-5.123-4.04-7.707-5.763-2.218-1.483-3.328-2.224-4.85-2.773a14.635 14.635 0 0 0-1.35-.411c-1.024-.253-2.021-.341-3.426-.373z"
        />
    </svg>
);
 
