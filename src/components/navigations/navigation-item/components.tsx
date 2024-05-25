import React, { FC, forwardRef } from "react";
import { DefaultAnchorProps, NavigationItemLineProps, NavigationItemProps } from "./props";
import { NavItemClasses, NavItemLineClasses } from "./classes";

const DefaultAnchor = forwardRef<HTMLAnchorElement, DefaultAnchorProps>((props, ref) => (
    <a ref={ref} {...props}/>
))

DefaultAnchor.displayName = 'DefaultAnchor'

const NavigationItemLine : FC<NavigationItemLineProps> = ({
    isActive
}) => (
    <span 
        className={`${
            NavItemLineClasses.background
        } ${
            NavItemLineClasses.display
        } ${
            NavItemLineClasses.height
        } ${
            NavItemLineClasses.position
        } ${
            NavItemLineClasses.transform
        } ${
            NavItemLineClasses.transition
        } ${
            NavItemLineClasses.width[isActive ? 'active' : 'inactive']
        }`}
    />
)

export const NavigationItem = forwardRef<HTMLAnchorElement, NavigationItemProps>(({
    component = DefaultAnchor,
    className = '',
    isActive = false,
    children,
    ...props
}, ref) => {
    const Component = component
    return (
        <Component
            className={`${
                NavItemClasses.color
            } ${
                NavItemClasses.display
            } ${
                NavItemClasses.font
            } ${
                NavItemClasses.group
            } ${
                NavItemClasses.margin
            } ${
                NavItemClasses.padding
            } ${
                NavItemClasses.position
            } ${
                className
            }`}
            ref={ref}
            {...props}
        >
            <NavigationItemLine isActive={isActive}/>
            { children }
        </Component>
    )
})

NavigationItem.displayName = 'NavigationItem'

export const NavItem = NavigationItem