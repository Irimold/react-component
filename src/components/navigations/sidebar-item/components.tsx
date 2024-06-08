import { forwardRef } from "react";
import { DefaultSidebarComponentProps, SidebarItemProps } from "./props";
import { FilledHome, OutlineHome } from "@irimold/react-icons";
import { sidebarItemClasses, sidebarItemIconClasses } from "./classes";
import { Active, Hover, Idle } from "@/constants";

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
                        } ${
                            sidebarItemIconClasses.margin
                        }`}
                    >
                        <ActiveIconComponent size="1.5em"/>
                    </span>
                    <span 
                        className={`${
                            sidebarItemIconClasses.display[Idle]
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
                        sidebarItemIconClasses.display[Active]
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
