"use client"

import React, { ChangeEventHandler, forwardRef, useRef, useState } from "react";
import { TextAreaProps } from "./props";
import { containerClasses, counterClasses, labelClasses, textAreaClasses } from "./classes";
import { useTextareaAutoResize } from "@irimold/react-hooks";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
    label,
    name,
    id = '',
    onChange,
    className = '',
    maxLength,
    disableAutoResize = false,
    minHeight = 80,
    ...props
}, ref) => {
    const [count, setCount] = useState(0)
    const [content, setContent] = useState(props.value)

    const textAreaRef   = useRef<HTMLTextAreaElement|null>(null)
    const textAreaId    = `textarea-${name}-${id}`

    const handleChange : ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        const target = event.target
        const value = target.value

        if (maxLength) {
            setCount(value.length)
        }

        if (typeof onChange == 'function') {
            onChange({
                name: name, 
                value: value
            })
        }

        setContent(value)
    }

    useTextareaAutoResize({ 
        textareaRef: textAreaRef, 
        disable: disableAutoResize, 
        minHeight: minHeight
    }, [content, props.value])

    return (
        <div
            className={`${
                containerClasses.font
            } ${
                containerClasses.position
            }`}
            onClick={() => textAreaRef.current?.focus()}
        >
            <textarea
                ref={(instance) => {
                    textAreaRef.current = instance

                    if (typeof ref == 'function') {
                        ref(instance)
                    } else if (ref) {
                        ref.current = instance
                    }
                }}
                className={`${
                    textAreaClasses.background
                } ${
                    textAreaClasses.border
                } ${
                    textAreaClasses.borderRadius
                } ${
                    textAreaClasses.display
                } ${
                    textAreaClasses.outline
                } ${
                    textAreaClasses.overflow
                } ${
                    textAreaClasses.padding
                } ${
                    textAreaClasses.peer
                } ${
                    textAreaClasses.placeholder
                } ${
                    textAreaClasses.resize
                } ${
                    textAreaClasses.width
                } ${
                    className
                }`}
                id={textAreaId}
                name={name}
                maxLength={maxLength}
                onChange={handleChange}
                {...props}
            />
            <label
                htmlFor={textAreaId}
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
            { maxLength ? (
                <span
                    className={`${
                        counterClasses.color
                    } ${
                        counterClasses.display
                    } ${
                        counterClasses.font
                    } ${
                        counterClasses.padding
                    } ${
                        counterClasses.position
                    }`}
                >
                    {count} / {maxLength}
                </span>
            ) : (<></>) }
        </div>
    )
})

TextArea.displayName = 'TextArea'
