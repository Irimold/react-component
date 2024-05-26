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
    const IdleIconComponent = icon || OutlineHome
    const ActiveIconComponent = activeIcon || icon || FilledHome

    return (
        <AnchorComponent
            ref={ref}
            className={`${
                sidebarItemClasses.color[isActive ? 'active' : 'inactive']
            } ${
                sidebarItemClasses.cursor
            } ${
                sidebarItemClasses.display
            } ${
                sidebarItemClasses.flex
            } ${
                sidebarItemClasses.font
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
                            sidebarItemIconClasses.display.interacted
                        } ${
                            sidebarItemIconClasses.margin
                        }`}
                    >
                        <ActiveIconComponent size="1.5em"/>
                    </span>
                    <span 
                        className={`${
                            sidebarItemIconClasses.display.idle
                        } ${
                            sidebarItemIconClasses.margin
                        }`}
                    >
                        <IdleIconComponent size="1.5em"/>
                    </span>
                </>
            ) : (
                <span 
                    className={`${
                        sidebarItemIconClasses.display.active
                    } ${
                        sidebarItemIconClasses.margin
                    }`}
                >
                    <ActiveIconComponent size="1.5em"/>
                </span>
            ) }
            <span>
                { children }
            </span>
        </AnchorComponent>
    )
})

SidebarItem.displayName = 'SidebarItem'
