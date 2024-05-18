"use client"

import React, { ChangeEventHandler, useRef } from "react";
import { forwardRef } from "react";
import { InputProps } from "./props";
import { containerClasses, inputClasses, labelClasses } from "./classes";

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    name,
    id = '',
    onChange,
    className = '',
    ...props
}, ref) => {

    const inputRef = useRef<HTMLInputElement|null>(null)
    const inputId = `input-${name}-${id}`

    const handleChange : ChangeEventHandler<HTMLInputElement> = (event) => {
        if (typeof onChange != 'function') {
            return
        }

        const target = event.target
        const value = target.value

        onChange({
            name: name, 
            value: value
        })
    }


    return (
        <div 
            className={`${
               containerClasses.font 
            } ${
                containerClasses.position
            }`}
            onClick={() => inputRef.current?.focus()}
        >
            <input
                ref={(instance) => {
                    inputRef.current = instance

                    if (typeof ref == 'function') {
                        ref(instance)
                    } else if (ref) {
                        ref.current = instance
                    }
                }}
                className={`${
                    inputClasses.background
                } ${
                    inputClasses.border
                } ${
                    inputClasses.borderRadius
                } ${
                    inputClasses.display
                } ${
                    inputClasses.outline
                } ${
                    inputClasses.padding
                } ${
                    inputClasses.peer
                } ${
                    inputClasses.placeholder
                } ${
                    inputClasses.width
                } ${
                    className
                }`}
                id={inputId}
                name={name}
                onChange={handleChange}
                { ...props }
            />
            <label
                htmlFor={inputId}
                className={`${
                    labelClasses.color
                } ${
                    labelClasses.display
                } ${
                    labelClasses.padding
                } ${
                    labelClasses.position
                } ${
                    labelClasses.transition
                } ${
                    labelClasses.weight
                }`}
            >
                { label ? label : name }
            </label>
        </div>
    )
})

Input.displayName = "Input"
