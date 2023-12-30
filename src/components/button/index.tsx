import * as React from "react";
import { forwardRef } from "react";
import { ButtonProps, DefaultButtonProps, LinkButtonProps } from "./props";
import { backgroundClasses, borderClasses, borderRadiusClass, colorClasses, fontSizeClass, leftIconClasses, rightIconClasses, textAlignClass } from "./classes";

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
    variant         = 'solid',
    functionality   = 'button',
    className       = '',
    children,
    leftIcon,
    rightIcon,
    ...props
}, ref) => {

    const ClassName = `${
            backgroundClasses[variant]
        } ${
            borderClasses[variant]
        } ${
            borderRadiusClass
        } ${
            colorClasses[variant]
        } ${
            fontSizeClass
        } ${
            textAlignClass
        } ${
            className
        }`

    const content = (
        <>
            { 
                typeof leftIcon != 'undefined' && (
                    <span
                        className={`${
                            leftIconClasses.display
                        } ${
                            leftIconClasses.margin
                        }`}
                    >
                        { leftIcon }
                    </span>
                )
            }
            { children }
            { 
                typeof rightIcon != 'undefined' && (
                    <span
                        className={`${
                            rightIconClasses.display
                        } ${
                            rightIconClasses.margin
                        }`}
                    >
                        { rightIcon }
                    </span>
                )
            }
        </>
    )

    if (functionality == 'link'){
        return (
            <a
                className={ClassName}
                ref={ref as React.LegacyRef<HTMLAnchorElement>}
                {...props as LinkButtonProps}
            >
                { content }
            </a>
        )
    }

    return (
        <button
            className={ClassName}
            ref={ref as React.LegacyRef<HTMLButtonElement>}
            {...props as DefaultButtonProps}
        >
            { content }
        </button>
    )

})
Button.displayName = "Button"

export type { ButtonProps }