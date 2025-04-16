import { FC } from "react";
import { DefaultAnchorProps, NavigationItemLineProps, NavigationItemProps } from "./props";
import { navItemClasses, navItemLineClasses } from "./classes";
import { Active, Idle } from "@/constants";

const DefaultAnchor : FC<DefaultAnchorProps> = (props) => (
    <a {...props}/>
)

DefaultAnchor.displayName = 'DefaultAnchor'

const NavigationItemLine : FC<NavigationItemLineProps> = ({
    isActive
}) => (
    <span 
        className={`${
            navItemLineClasses.background
        } ${
            navItemLineClasses.display
        } ${
            navItemLineClasses.height
        } ${
            navItemLineClasses.position
        } ${
            navItemLineClasses.transform
        } ${
            navItemLineClasses.transition
        } ${
            navItemLineClasses.width[isActive ? Active : Idle]
        }`}
    />
)

export const NavigationItem : FC<NavigationItemProps> = ({
    component = DefaultAnchor,
    className = '',
    isActive = false,
    children,
    ref,
    ...props
}) => {
    const Component = component
    return (
        <Component
            className={`${
                navItemClasses.color
            } ${
                navItemClasses.cursor
            } ${
                navItemClasses.display
            } ${
                navItemClasses.font
            } ${
                navItemClasses.group
            } ${
                navItemClasses.margin
            } ${
                navItemClasses.padding
            } ${
                navItemClasses.position
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
}

NavigationItem.displayName = 'NavigationItem'

export const NavItem = NavigationItem