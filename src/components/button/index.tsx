import * as React from "react";
import { forwardRef } from "react";
import { ButtonProps, DefaultButtonProps, LinkButtonProps } from "./props";
import { backgroundClasses, borderClasses, borderRadiusClass, colorClasses, displayClass, fontSizeClass, leftIconClasses, rightIconClasses, textAlignClass } from "./classes";

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
            displayClass
        } ${
            fontSizeClass
        } ${
            textAlignClass
        } ${
            className
        }`

    const LeftIcon = leftIcon
    const RightIcon = rightIcon

    const content = (
        <>
            { 
                typeof LeftIcon != 'undefined' && (
                    <span
                        className={`${
                            leftIconClasses.display
                        } ${
                            leftIconClasses.margin
                        }`}
                    >
                        <LeftIcon size={16}/>
                    </span>
                )
            }
            { children }
            { 
                typeof RightIcon != 'undefined' && (
                    <span
                        className={`${
                            rightIconClasses.display
                        } ${
                            rightIconClasses.margin
                        }`}
                    >
                        <RightIcon size={16}/>
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