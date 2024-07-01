import { ElementType, forwardRef } from "react";
import { DefaultSidebarComponentProps, SidebarItemProps } from "./props";
import { FilledHome, OutlineHome } from "@irimold/react-icons";
import { sidebarItemClasses, sidebarItemIconClasses } from "./classes";
import { Active, Hover, Idle } from "@/constants";
import { isIconVariant } from "@/types";

const DefaultSidebarComponent = forwardRef<HTMLAnchorElement, DefaultSidebarComponentProps>((props, ref) => (
    <a ref={ref} {...props}/>
))

DefaultSidebarComponent.displayName = 'DefaultSidebarComponent'


export const SidebarItem = forwardRef<HTMLAnchorElement, SidebarItemProps>(({
    component = DefaultSidebarComponent,
    icon,
    isActive,
    className,
    children,
    ...props
}, ref) => {
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
                        <ActiveIcon size="1.5em"/>
                    </span>
                    <span 
                        className={`${
                            sidebarItemIconClasses.display[Idle]
                        } ${
                            sidebarItemIconClasses.margin
                        }`}
                    >
                        <IdleIcon size="1.5em"/>
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
                    <ActiveIcon size="1.5em"/>
                </span>
            ) }
            <span>
                { children }
            </span>
        </AnchorComponent>
    )
})

SidebarItem.displayName = 'SidebarItem'
