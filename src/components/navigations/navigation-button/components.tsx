import React, { forwardRef } from "react";
import { NavigationButtonProps } from "./props";
import { NavBtnBarClasses, NavBtnClasses } from "./classes";

export const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(({
    className,
    color,
    isActive,
    size,
    ...props
}, ref) => {
    const btnColor = color || 'light'
    const btnSize = size || 'large'

    return (
        <button
            className={`${
                NavBtnClasses.background
            } ${
                NavBtnClasses.border
            } ${
                NavBtnClasses.cursor
            } ${
                NavBtnClasses.display
            } ${
                NavBtnClasses.height[btnSize]
            } ${
                NavBtnClasses.position
            } ${
                NavBtnClasses.width[btnSize]
            } ${
                className
            }`}
            ref={ref}
            {...props}
        >
            <span 
                className={`${
                    NavBtnBarClasses.background[btnColor]
                } ${
                    NavBtnBarClasses.display
                } ${
                    NavBtnBarClasses.height[btnSize]
                } ${
                    NavBtnBarClasses.opacity
                } ${
                    NavBtnBarClasses.position
                } ${
                    NavBtnBarClasses.transform[btnSize][isActive ? 'active' : 'inactive']
                } ${
                    NavBtnBarClasses.transition
                } ${
                    NavBtnBarClasses.width[btnSize]
                }`}
            />
        </button>
    )
})

NavigationButton.displayName = 'NavigationButton'

export const NavBtn = NavigationButton
