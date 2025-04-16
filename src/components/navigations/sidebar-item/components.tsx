import { ElementType, FC } from "react";
import { DefaultSidebarComponentProps, SidebarItemProps } from "./props";
import { FilledHome, OutlineHome } from "@irimold/react-icons";
import { sidebarItemClasses, sidebarItemIconClasses } from "./classes";
import { Active, Hover, Idle } from "@/constants";
import { isIconVariant } from "@/types";

const DefaultSidebarComponent : FC<DefaultSidebarComponentProps> = (props) => (
    <a {...props}/>
)

DefaultSidebarComponent.displayName = 'DefaultSidebarComponent'


export const SidebarItem : FC<SidebarItemProps> = ({
    component = DefaultSidebarComponent,
    icon,
    isActive,
    className = '',
    children,
    ref,
    ...props
}) => {
    const AnchorComponent = component

    let IdleIcon : ElementType = OutlineHome
    let ActiveIcon : ElementType = FilledHome
    if (isIconVariant(icon)) {
        IdleIcon    = icon[Idle] ? icon[Idle] : OutlineHome
        ActiveIcon  = icon[Active] ? icon[Active] : FilledHome
    } else if (typeof icon != 'undefined') {
        IdleIcon = icon
        ActiveIcon = icon
    }

    return (
        <AnchorComponent
            ref={ref}
            className={`${
                sidebarItemClasses.background
            } ${
                sidebarItemClasses.borderRadius
            } ${
                sidebarItemClasses.color[isActive ? Active : Idle]
            } ${
                sidebarItemClasses.cursor
            } ${
                sidebarItemClasses.display
            } ${
                sidebarItemClasses.flex
            } ${
                sidebarItemClasses.font
            } ${
                sidebarItemClasses.gap
            } ${
                sidebarItemClasses.group
            } ${
                sidebarItemClasses.padding
            } ${
                className
            }`}
            {...props}
        >
            { !isActive ? (
                <>
                    <span 
                        className={`${
                            sidebarItemIconClasses.display[Hover]
                        }`}
                    >
                        <ActiveIcon size="1.25em"/>
                    </span>
                    <span 
                        className={`${
                            sidebarItemIconClasses.display[Idle]
                        }`}
                    >
                        <IdleIcon size="1.25em"/>
                    </span>
                </>
            ) : (
                <span 
                    className={`${
                        sidebarItemIconClasses.display[Active]
                    }`}
                >
                    <ActiveIcon size="1.25em"/>
                </span>
            ) }
            <span>
                { children }
            </span>
        </AnchorComponent>
    )
}

SidebarItem.displayName = 'SidebarItem'
