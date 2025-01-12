import { FC } from "react";
import { BackdropProps } from "./props";
import { backdropClasses } from "./classes";

export const Backdrop : FC<BackdropProps> = ({
    className = '',
    state,
    hideOnLarge,
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
            hideOnLarge ? backdropClasses.opacity.default : ''
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
