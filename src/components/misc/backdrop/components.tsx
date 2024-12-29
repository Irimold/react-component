import { FC } from "react";
import { BackdropProps } from "./props";
import { backdropClasses } from "./classes";

export const Backdrop : FC<BackdropProps> = ({
    className = '',
    state,
    ...props
}) => (
    <div
        className={`${
            backdropClasses.background
        } ${
            backdropClasses.display[state]
        } ${
            backdropClasses.identifier
        } ${
            backdropClasses.opacity[state]
        } ${
            backdropClasses.position
        } ${
            backdropClasses.transition
        } ${
            backdropClasses.zIndex
        } ${
            className
        }`}
        {...props}
    />
)
