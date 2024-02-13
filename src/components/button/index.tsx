import * as React from "react";
import { forwardRef } from "react";
import { ButtonProps, DefaultButtonProps, LinkButtonProps } from "./props";
import { buttonClasses, childrenClasses, leftIconClasses, rightIconClasses } from "./classes";

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
            buttonClasses.background[variant]
        } ${
            buttonClasses.border[variant]
        } ${
            buttonClasses.borderRadius
        } ${
            buttonClasses.color[variant]
        } ${
            buttonClasses.display
        } ${
            buttonClasses.font
        } ${
            buttonClasses.padding
        } ${
            buttonClasses.textAlign
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
                        <LeftIcon size="1.25em"/>
                    </span>
                )
            }
            <span 
                className={`${
                    childrenClasses.display
                } ${
                    childrenClasses.height
                }`}
            >
                { children }
            </span>
            { 
                typeof RightIcon != 'undefined' && (
                    <span
                        className={`${
                            rightIconClasses.display
                        } ${
                            rightIconClasses.margin
                        }`}
                    >
                        <RightIcon size="1.25em"/>
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