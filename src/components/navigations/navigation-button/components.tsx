import React, { forwardRef } from "react";
import { NavigationButtonProps } from "./props";
import { navBtnBarClasses, navBtnClasses } from "./classes";

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
                navBtnClasses.background
            } ${
                navBtnClasses.border
            } ${
                navBtnClasses.cursor
            } ${
                navBtnClasses.display
            } ${
                navBtnClasses.height[btnSize]
            } ${
                navBtnClasses.position
            } ${
                navBtnClasses.width[btnSize]
            } ${
                className
            }`}
            ref={ref}
            {...props}
        >
            <span 
                className={`${
                    navBtnBarClasses.background[btnColor]
                } ${
                    navBtnBarClasses.display
                } ${
                    navBtnBarClasses.height[btnSize]
                } ${
                    navBtnBarClasses.opacity
                } ${
                    navBtnBarClasses.position
                } ${
                    navBtnBarClasses.transform[btnSize][isActive ? 'active' : 'inactive']
                } ${
                    navBtnBarClasses.transition
                } ${
                    navBtnBarClasses.width[btnSize]
                }`}
            />
        </button>
    )
})

NavigationButton.displayName = 'NavigationButton'

export const NavBtn = NavigationButton
