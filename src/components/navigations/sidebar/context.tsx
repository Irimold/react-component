'use client'

import { createContext, FC, PropsWithChildren, useState } from "react"
import { SidebarContextType } from "./types"

export const SidebarContext = createContext<SidebarContextType | null>(null)

export const SidebarProvider : FC<PropsWithChildren> = ({
    children
}) => {
    const state = useState(true)

    return (
        <SidebarContext.Provider value={state}>
            { children }
        </SidebarContext.Provider>
    )
}