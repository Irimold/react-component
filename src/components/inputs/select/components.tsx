"use client";

import { FC, FocusEventHandler, MouseEventHandler, useEffect, useRef, useState } from "react";
import { SelectOptionButtonProps, SelectOptionProps, SelectProps } from "./props";
import { containerClasses, optionClasses, optionContainerClasses, optionIconClasses } from "./classes";
import { FilledCheck, FilledPlus } from "@irimold/react-icons";
import { Active, Idle } from "@/constants";
import { GenericStringCallback, TimeoutType } from "@/types";
import { InputChangeHandler } from "../types";
import { Input } from "../input";
import { Loader } from "@/components/misc";

const OptionButton : FC<SelectOptionButtonProps> = (props) => (
    <button
        className={`${
            optionClasses.background
        } ${
            optionClasses.border
        } ${
            optionClasses.borderRadius
        } ${
            optionClasses.display
        } ${
            optionClasses.flex
        } ${
            optionClasses.margin
        } ${
            optionClasses.padding
        } ${
            optionClasses.width
        }`}
        {...props}
    />
) 

const SelectOption : FC<SelectOptionProps> = ({
    label,
    value,
    onClick,
    selected = false
}) => {

    const handleClick : MouseEventHandler<HTMLButtonElement> = () => {
        if (typeof onClick == 'function') {
            onClick(value)
        }
    }

    return(
        <OptionButton
            onClick={handleClick}
        >
            <FilledCheck 
                size="1.5em"
                className={`${
                    optionIconClasses.margin
                } ${
                    optionIconClasses.opacity[ selected ? Active : Idle ]
                }`}
            />
            <span>
                { label || value }
            </span>
        </OptionButton>
    )

}

const SelectOptionCreate : FC<SelectOptionProps> = ({
    value,
    onClick,
}) => {

    const handleClick : MouseEventHandler<HTMLButtonElement> = () => {
        if (typeof onClick == 'function') {
            onClick(value)
        }
    }

    return(
        <OptionButton
            onClick={handleClick}
        >
            <FilledPlus 
                size="1.5em"
                className={`${
                    optionIconClasses.margin
                }`}
            />
            <span>
                Create {'"'}{value}{'"'}
            </span>
        </OptionButton>
    )

}

export const Select : FC<SelectProps> = ({
    name,
    onCreate,
    onChange,
    onFocus,
    onBlur,
    onSearch,
    options = [],
    isLoading,
    value = '',
    ...props
}) => {

    const [search, setSearch] = useState(value as string)
    const [filteredOptions, setFilteredOptions] = useState(options)
    const [open, setOpen] = useState(false)

    const searchTimeoutRef = useRef<TimeoutType>()

    const handleChange : GenericStringCallback = (value) => {
        if (typeof onChange == 'function') {
            onChange({
                name    : name,
                value   : value
            })
        }
    }

    const handleSearch : InputChangeHandler = ({value}) => {
        setSearch(value)
    }

    const handleFocus : FocusEventHandler<HTMLInputElement> = (event) => {
        if (typeof onFocus == 'function') {
            onFocus(event)
        }

        setOpen(true)
    }

    const handleBlur : FocusEventHandler<HTMLInputElement> = (event) => {
        if (typeof onBlur == 'function') {
            onBlur(event)
        }

        setOpen(false)
        setSearch(value as string)
    }

    const filterOptions = () => {
        return options.filter(item => item.label?.includes(search) || item.value?.includes(search))
    }

    useEffect(() => {
        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current)
        }

        
        searchTimeoutRef.current = setTimeout(() => {
            if (typeof onSearch == 'function') {
                onSearch(search)
                return
            }

            setFilteredOptions(filterOptions())
        }, 300)
    }, [search])

    useEffect(() => {
        setFilteredOptions(filterOptions())
    }, [options])

    console.count('Select Rerender')

    return (
        <div 
            className={`${
                containerClasses.position
            }`}
        >
            <Input
                name={name}
                onChange={handleSearch}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={search}
                {...props}
            />
            <div
                className={`${
                    optionContainerClasses.background
                } ${
                    optionContainerClasses.borderRadius
                } ${
                    optionContainerClasses.boxShadow
                } ${
                    optionContainerClasses.display[open ? Active : Idle]
                } ${
                    optionContainerClasses.font
                } ${
                    optionContainerClasses.padding
                } ${
                    optionContainerClasses.position
                } ${
                    optionContainerClasses.transform
                } ${
                    optionContainerClasses.width
                } ${
                    optionContainerClasses.zIndex
                }`}
            >
                { isLoading ? (
                    <Loader/>
                ) : (
                    <>
                        { filteredOptions.map((option, index) => (
                            <SelectOption
                                key={`option-${option.value}-${index}`}
                                onClick={handleChange}
                                {...option}
                            />
                        )) }
                        { typeof onCreate == 'function' && search && !filteredOptions.length ? (
                            <SelectOptionCreate
                                value={search}
                                onClick={onCreate}
                            />
                        ) : (<></>) }
                    </>
                ) }
            </div>
        </div>
    )
}