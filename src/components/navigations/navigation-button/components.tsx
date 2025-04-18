import { FC } from "react";
import { NavigationButtonProps } from "./props";
import { navBtnBarClasses, navBtnClasses } from "./classes";
import { Active, Idle, Large } from "@/constants";
import { Light } from "./constants";

export const NavigationButton : FC<NavigationButtonProps> = ({
    className = '',
    color,
    isActive,
    showOnLarge = false,
    size,
    ref,
    ...props
}) => {
    const btnColor = color || Light
    const btnSize = size || Large

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
                navBtnClasses.outline
            } ${
                navBtnClasses.padding
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
                        navBtnBarClasses.transform[btnSize][isActive ? Active : Idle]
                    } ${
                        navBtnBarClasses.transition
                    } ${
                        navBtnBarClasses.width[btnSize]
                    }`}
                />
            )) }
        </button>
    )
}

NavigationButton.displayName = 'NavigationButton'

export const NavBtn = NavigationButton
