import React, { forwardRef } from "react";
import { DefaultSidebarComponentProps, SidebarItemProps } from "./props";
import { FilledHome, OutlineHome } from "@irimold/react-icons";
import { sidebarItemClasses, sidebarItemIconClasses } from "./classes";

const DefaultSidebarComponent = forwardRef<HTMLAnchorElement, DefaultSidebarComponentProps>((props, ref) => (
    <a ref={ref} {...props}/>
))

DefaultSidebarComponent.displayName = 'DefaultSidebarComponent'


export const SidebarItem = forwardRef<HTMLAnchorElement, SidebarItemProps>(({
    component = DefaultSidebarComponent,
    icon,
    activeIcon,
    isActive,
    className,
    children,
    ...props
}, ref) => {
    const AnchorComponent = component
    const IconComponent = isActive ? activeIcon || icon || FilledHome : icon || OutlineHome

    return (
        <AnchorComponent
            ref={ref}
            className={`${
                sidebarItemClasses.color[isActive ? 'active' : 'inactive']
            } ${
                sidebarItemClasses.display
            } ${
                sidebarItemClasses.flex
            } ${
                sidebarItemClasses.font
            } ${
                sidebarItemClasses.padding
            } ${
                className
            }`}
            {...props}
        >
            <span 
                className={`${
                    sidebarItemIconClasses.display
                } ${
                    sidebarItemIconClasses.margin
                }`}
            >
                <IconComponent size="1.5em"/>
            </span>
            <span>
                { children }
            </span>
        </AnchorComponent>
    )
})

SidebarItem.displayName = 'SidebarItem'
