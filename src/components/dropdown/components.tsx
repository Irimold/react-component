"use client"

import { ElementType, FC, useCallback, useEffect, useRef, useState } from "react";
import { DropdownItemProps, DropdownProps } from "./props";
import { FilledPen, FilledUser, OutlinePen } from "@irimold/react-icons";
import { dropdownClasses, dropdownItemClasses, dropdownItemIconClasses, dropdownListClasses } from "./classes";
import { Active, Bottom, DefaultPosition, Idle, Left, Right, Top } from "@/constants";
import { isIconVariant } from "@/types";

export const Dropdown : FC<DropdownProps> = ({
    togglerElement = FilledUser,
    togglerProps = {},
    children
}) => {
    const [open, setOpen] = useState(false)
    const [vPosition, setVPosition] = useState(Bottom)
    const [hPosition, setHPosition] = useState(Left)

    const elementRef = useRef<HTMLDivElement>(null)

    const Toggler = togglerElement

    const handleSetPosition = useCallback(() => {
        const boundingRect  = elementRef.current?.getBoundingClientRect()
        if (!boundingRect) {
            return
        }

        const windowHeight  = Math.min(window.innerHeight, document.documentElement.clientHeight)
        const windowWidth   = Math.min(window.innerWidth, document.documentElement.clientWidth)

        if (boundingRect.left < windowWidth / 2) {
            setHPosition(Left)
        } else if (boundingRect.right < windowWidth / 2) {
            setHPosition(Right)
        }

        if (boundingRect.top < windowHeight / 2) {
            setVPosition(Top)
        } else if (boundingRect.bottom < windowHeight / 2) {
            setVPosition(Bottom)
        }
    }, [])

    const handleClick = () => {
        setOpen(prevState => !prevState)
    }

    useEffect(() => {
        addEventListener('DOMContentLoaded', handleSetPosition)
        addEventListener('resize', handleSetPosition)
        addEventListener('scroll', handleSetPosition)

        return () => {
            removeEventListener('DOMContentLoaded', handleSetPosition)
            removeEventListener('resize', handleSetPosition)
            removeEventListener('scroll', handleSetPosition)
        }
    }, [handleSetPosition])

    return (
        <div
            ref={elementRef} 
            className={`${
                dropdownClasses.cursor
            } ${
                dropdownClasses.identifier
            } ${
                dropdownClasses.position
            }`}
        >
            <Toggler onClick={handleClick} {...togglerProps} />
            <div 
                className={`${
                    dropdownListClasses.background
                } ${
                    dropdownListClasses.borderRadius
                } ${
                    dropdownListClasses.boxShadow
                } ${
                    dropdownListClasses.display[open ? Active : Idle]
                } ${
                    dropdownListClasses.height[open ? Active : Idle]
                } ${
                    dropdownListClasses.identifier
                } ${
                    dropdownListClasses.overflow
                } ${
                    dropdownListClasses.padding
                } ${
                    dropdownListClasses.position[DefaultPosition]
                } ${
                    dropdownListClasses.position[vPosition]
                } ${
                    dropdownListClasses.position[hPosition]
                } ${
                    dropdownListClasses.transition
                } ${
                    dropdownListClasses.translate[vPosition]
                } ${
                    dropdownListClasses.zIndex
                }`}
            >
                { children }
            </div>
        </div>
    )
}

const DefaultDropdownItem = (props : any) => (
    <div {...props}/>
)

export const DropdownItem : FC<DropdownItemProps> = ({
    element = DefaultDropdownItem,
    icon,
    className = '',
    children,
    ...props
}) => {
    const Element = element

    let ActiveIcon  : ElementType = FilledPen
    let IdleIcon    : ElementType = OutlinePen
    if (isIconVariant(icon)) {
        ActiveIcon  = icon[Active] ? icon[Active] : FilledPen
        IdleIcon    = icon[Idle] ? icon[Idle] : OutlinePen
    } else if (typeof icon != 'undefined') {
        ActiveIcon  = icon
        IdleIcon    = icon
    }

    return (
        <Element 
            className={`${
                dropdownItemClasses.background
            } ${
                dropdownItemClasses.borderRadius
            } ${
                dropdownItemClasses.display
            } ${
                dropdownItemClasses.flex
            } ${
                dropdownItemClasses.group
            } ${
                dropdownItemClasses.padding
            } ${
                className
            }`}
            {...props}
        >
            <ActiveIcon 
                className={`${
                    dropdownItemIconClasses.color
                } ${
                    dropdownItemIconClasses.display[Active]
                } ${
                    dropdownItemIconClasses.margin
                }`}
                size="1.5em"
            />
            <IdleIcon
                className={`${
                    dropdownItemIconClasses.color
                } ${
                    dropdownItemIconClasses.display[Idle]
                } ${
                    dropdownItemIconClasses.margin
                }`}
                size="1.5em"
            />
            <span>
                { children }
            </span>
        </Element>
    );
}
