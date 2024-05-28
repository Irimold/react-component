import { FC, forwardRef } from "react";
import { DefaultAnchorProps, NavigationItemLineProps, NavigationItemProps } from "./props";
import { navItemClasses, navItemLineClasses } from "./classes";

const DefaultAnchor = forwardRef<HTMLAnchorElement, DefaultAnchorProps>((props, ref) => (
    <a ref={ref} {...props}/>
))

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
            navItemLineClasses.width[isActive ? 'active' : 'inactive']
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
})

NavigationItem.displayName = 'NavigationItem'

export const NavItem = NavigationItem