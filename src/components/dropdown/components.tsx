"use client"

import { ElementType, FC, MouseEventHandler, useCallback, useEffect, useRef, useState } from "react";
import { DropdownItemProps, DropdownProps } from "./props";
import { FilledPen, FilledUser, OutlinePen } from "@irimold/react-icons";
import { dropdownClasses, dropdownItemClasses, dropdownItemIconClasses, dropdownListClasses } from "./classes";
import { Active, Bottom, DefaultPosition, Idle, Left, Right, Top } from "@/constants";
import { TimeoutType, isIconVariant } from "@/types";

export const Dropdown : FC<DropdownProps> = ({
    togglerElement = FilledUser,
    togglerProps = {},
    children
}) => {
    const [open, setOpen] = useState(false)
    const [vPosition, setVPosition] = useState(Bottom)
    const [hPosition, setHPosition] = useState(Left)

    const elementRef = useRef<HTMLDivElement>(null)
    const timeoutRef = useRef<TimeoutType>(0)

    const Toggler = togglerElement

    const handleSetPosition = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        const boundingRect  = elementRef.current?.getBoundingClientRect()
        if (!boundingRect) {
            return
        }

        const halfWindowWidth   = Math.min(window.innerWidth, document.documentElement.clientWidth) / 2
        const halfWindowHeight  = Math.min(window.innerHeight, document.documentElement.clientHeight) / 2
        const xCenterPoint      = boundingRect.width / 2
        const yCenterPoint      = boundingRect.height / 2

        timeoutRef.current = setTimeout(() => {
            if (xCenterPoint < halfWindowWidth) {
                setHPosition(Left)
            } else {
                setHPosition(Right)
            }
    
            if (yCenterPoint < halfWindowHeight) {
                setVPosition(Top)
            } else {
                setVPosition(Bottom)
            }
        }, 300)
    }, [])

    const handleClick : MouseEventHandler = () => {
        setOpen(prevState => !prevState)
    }

    useEffect(() => {
        window.addEventListener('DOMContentLoaded', handleSetPosition)
        window.addEventListener('resize', handleSetPosition)
        window.addEventListener('scroll', handleSetPosition)

        return () => {
            window.removeEventListener('DOMContentLoaded', handleSetPosition)
            window.removeEventListener('resize', handleSetPosition)
            window.removeEventListener('scroll', handleSetPosition)

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [handleSetPosition])

    useEffect(() => {
        const closeDropdown = (event) => {
            const target = event.target
            if (target == elementRef.current) {
                return
            }

            if (elementRef.current?.contains(target)) {
                return
            }

            setOpen(false)
        }

        window.addEventListener('click', closeDropdown)

        return () => {
            window.removeEventListener('click', closeDropdown)
            
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={elementRef} 
            className={`${
                dropdownClasses.cursor
            } ${
                dropdownClasses.display
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
