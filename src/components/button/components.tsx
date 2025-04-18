import { FC } from "react";
import { ButtonProps, DefaultButtonProps, DefaultLinkProps, LinkButtonProps } from "./props";
import { buttonClasses, childrenClasses, leftIconClasses, rightIconClasses } from "./classes";
import { Solid } from "./constants";
import { Large, Small } from "@/constants";

const DefaultLink : FC<DefaultLinkProps> = (props) => (
    <a {...props}/>
)

DefaultLink.displayName = 'DefaultLink'

export const Button : FC<ButtonProps> = ({
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
}) => {

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
                    <LeftIcon size={ size != Small ? "1.5em" : "1.25em" }/>
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
                    <RightIcon size={ size != Small ? "1.5em" : ".75em" }/>
                </span>
            ) : (<></>)}
        </>
    )

    if (functionality == 'link'){
        const Component = linkComponent || DefaultLink

        return (
            <Component
                className={ClassName}
                {...props as LinkButtonProps}
            >
                { content }
            </Component>
        )
    }

    return (
        <button
            className={ClassName}
            {...props as DefaultButtonProps}
        >
            { content }
        </button>
    )

}
Button.displayName = "Button"
