import { ElementType, FC } from "react";
import { LoaderProps } from "./props";
import { FilledLoader0, FilledLoader1, FilledLoader2, IconProps, OutlineLoader0, OutlineLoader1, OutlineLoader2 } from "@irimold/react-icons";
import { loaderClasses } from "./classes";

export const Loader : FC<LoaderProps> = ({
    size = "1.5rem",
    className = "",
    variant = 1,
    ...props
}) => {
    let Element : ElementType<IconProps>
    switch (variant) {
        case 1:
            Element = OutlineLoader0
            break;

        case 2:
            Element = FilledLoader1
            break;

        case 3:
            Element = OutlineLoader1
            break;

        case 4:
            Element = FilledLoader2
            break;

        case 5:
            Element = OutlineLoader2
            break;
    
        default:
            Element = FilledLoader0
            break;
    }

    return (
        <Element
            className={`${
                loaderClasses.animation
            } ${
                className
            }`}
            size={size}
            {...props}
        />
    )
}