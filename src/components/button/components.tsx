import { forwardRef } from "react";
import { ButtonProps, DefaultButtonProps, DefaultLinkProps, LinkButtonProps } from "./props";
import { buttonClasses, childrenClasses, leftIconClasses, rightIconClasses } from "./classes";
import { Solid } from "./constants";
import { Large } from "@/constants";

const DefaultLink = forwardRef<HTMLAnchorElement, DefaultLinkProps>((props, ref) => (
    <a ref={ref} {...props}/>
))

DefaultLink.displayName = 'DefaultLink'

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
    variant         = Solid,
    functionality   = 'button',
    display         = 'inline',
    size            = Large,
    className       = '',
    children,
    leftIcon,
    rightIcon,
    linkComponent,
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
            buttonClasses.display[display]
        } ${
            buttonClasses.flex
        } ${
            buttonClasses.font
        } ${
            buttonClasses.outline
        } ${
            buttonClasses.padding[size]
        } ${
            buttonClasses.textAlign
        } ${
            className
        }`

    const LeftIcon = leftIcon
    const RightIcon = rightIcon

    const content = (
        <>
            { typeof LeftIcon != 'undefined' ? (
                <span
                    className={`${
                        leftIconClasses.display
                    } ${
                        children ? leftIconClasses.margin : ''
                    }`}
                >
                    <LeftIcon size="1.5em"/>
                </span>
            ) : (<></>) }
            { children ? (
                <span 
                    className={`${
                        childrenClasses.display
                    } ${
                        childrenClasses.height
                    }`}
                >
                    { children }
                </span>
            ) : (<></>) }
            { typeof RightIcon != 'undefined' ? (
                <span
                    className={`${
                        rightIconClasses.display
                    } ${
                        children ? rightIconClasses.margin : ''
                    }`}
                >
                    <RightIcon size="1.5em"/>
                </span>
            ) : (<></>)}
        </>
    )

    if (functionality == 'link'){
        const Component = linkComponent || DefaultLink

        return (
            <Component
                className={ClassName}
                ref={ref as React.ForwardedRef<HTMLAnchorElement>}
                {...props as LinkButtonProps}
            >
                { content }
            </Component>
        )
    }

    return (
        <button
            className={ClassName}
            ref={ref as React.ForwardedRef<HTMLButtonElement>}
            {...props as DefaultButtonProps}
        >
            { content }
        </button>
    )

})
Button.displayName = "Button"
