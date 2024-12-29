'use client'

import { ElementType, FC, useContext } from "react"
import { SidebarProps } from "./props"
import { SidebarContext } from "./context"
import { SidebarContextType } from "./types"
import { Backdrop } from "@/components/misc"
import { Active, DefaultState, Idle } from "@/constants"
import { sidebarClasses, sidebarItemClasses } from "./classes"
import { SidebarItem } from "../sidebar-item"

export const Sidebar : FC<SidebarProps> = ({
    items,
    linkElement,
    logo,
    currentlyActive,
    className = '',
}) => {
    const [open, setOpen] = useContext(SidebarContext) as SidebarContextType
    const Logo = logo as ElementType
    
    return (
        <>
            <Backdrop
                state={open ? Active : Idle}
                onClick={() => setOpen(false)}
            />
            <nav
                className={`${
                    sidebarClasses.background
                } ${
                    sidebarClasses.flex
                } ${
                    sidebarClasses.height
                } ${
                    sidebarClasses.overflow
                } ${
                    sidebarClasses.padding[open ? Active : Idle]
                } ${
                    sidebarClasses.position
                } ${
                    sidebarClasses.transition
                } ${
                    sidebarClasses.width[DefaultState]
                } ${
                    sidebarClasses.width[open ? Active : Idle]
                } ${
                    sidebarClasses.zIndex
                } ${
                    className
                }`}
            >
                { logo ? (
                    <Logo
                        className={`${
                            sidebarItemClasses.margin
                        }`}
                    />
                ) : (<></>) }
                { items.map((item, index) => (
                    <SidebarItem
                        key={`sidebar-item-${index}`}
                        href={item.href}
                        icon={item.icons}
                        isActive={item.href == currentlyActive}
                        component={linkElement}
                    >
                        { item.label }
                    </SidebarItem>
                )) }
            </nav>
        </>
    )
}
