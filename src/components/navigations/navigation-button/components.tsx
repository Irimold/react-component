import React, { forwardRef } from "react";
import { NavigationButtonProps } from "./props";
import { navBtnBarClasses, navBtnClasses } from "./classes";

export const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(({
    className,
    color,
    isActive,
    showOnLarge = false,
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
                !showOnLarge ? navBtnClasses.display : ''
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
            { [0, 1, 2].map((item) => (
                <span 
                    key={`nav-btn-bar-${item}`}
                    className={`${
                        navBtnBarClasses.background[btnColor]
                    } ${
                        navBtnBarClasses.display
                    } ${
                        navBtnBarClasses.height[btnSize]
                    } ${
                        isActive ? navBtnBarClasses.opacity : ''
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
            )) }
        </button>
    )
})

NavigationButton.displayName = 'NavigationButton'

export const NavBtn = NavigationButton
