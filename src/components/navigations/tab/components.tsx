'use client';

import { FC, MouseEvent, useCallback, useState } from "react";
import { TabProps } from "./props";
import { containerClasses, itemClasses } from "./classes";
import { Button } from "@/components/button";

export const Tab : FC<TabProps> = ({
    items,
    className = '',
    onSelect,
}) => {
    const [selected, setSelected] = useState<any>(items[0].value)

    const handleSelect = useCallback((value: any) => {
        return (event: MouseEvent) => {
            (event.currentTarget as Element)?.scrollIntoView()
            setSelected(value)
    
            if (typeof onSelect == 'function') {
                onSelect(value)
            }
        }
    }, [])

    return (
        <nav 
            className={`${
                containerClasses.display
            } ${
                containerClasses.overflow
            } ${
                containerClasses.scroll
            } ${
                containerClasses.snap
            } ${
                containerClasses.width
            } ${
                className
            }`}
        >
            { items.map((item, index) => (
                <Button
                    key={`tab-${item.value}-${index}`}
                    variant={selected == item.value ? 'solid' : 'link'}
                    onClick={handleSelect(item.value)}
                    className={`${
                        itemClasses.flex
                    } ${
                        itemClasses.snap
                    }`}
                >
                    { item.label }
                </Button>
            )) }
        </nav>
    )
}
