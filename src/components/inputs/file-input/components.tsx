'use client'

import React, { ChangeEventHandler, FC, forwardRef, useEffect, useState } from "react"
import { FileDisplayProps, FileInputProps } from "./props"
import { containerClasses, displayClasses, imageClass, inputClasses, labelClasses } from "./classes"
import { Image } from "@/components/multimedias"
import { Separate } from "./constants"

const FileDisplay : FC<FileDisplayProps> = ({
    src = ''
}) => (
    <div
        className={`${
            displayClasses.height
        } ${
            displayClasses.maxWidth
        } ${
            displayClasses.position
        } ${
            displayClasses.width
        }`}
    >
        { src ? (
            <Image
                src={src}
                alt="Uploaded file"
                className={`${
                    imageClass.height
                } ${
                    imageClass.objectFit
                } ${
                    imageClass.width
                }`}
            />
        ) : <></> }
    </div>
)

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({
    onChange,
    name,
    label           = '',
    id              = '',
    readOnly        = false,
    src             = '',
    withoutDisplay  = false,
    variant         = Separate,
    ...props
}, ref) => {
    const [fileUrl, setFileUrl] = useState<string>(src)
    const inputId = `file-input${name ? `-${name}` : ''}${id ? `-${id}` : ''}`

    const handleChange : ChangeEventHandler<HTMLInputElement> = (event) => {
        const input = event.target
        
        let uploadedFile : File | undefined
        if (input.files?.length) {
            uploadedFile = input.files[0]

            const source = URL.createObjectURL(uploadedFile)
            setFileUrl(source)
        } else {
            uploadedFile = undefined
            URL.revokeObjectURL(fileUrl)
            setFileUrl('')
        }

        if (typeof onChange == 'function') {
            onChange({
                name    : name,
                value   : uploadedFile
            })
        }
    }

    useEffect(() => {
        if (src == fileUrl) {
            return
        }

        URL.revokeObjectURL(fileUrl)
        setFileUrl(src)
    }, [src])

    return (
        <div
            className={`${
                containerClasses.borderRadius[variant]
            } ${
                containerClasses.display
            } ${
                containerClasses.flex
            } ${
                containerClasses.position
            } ${
                containerClasses.width
            }`}
        >
            { (!withoutDisplay || readOnly) ? (
                <FileDisplay
                    src={fileUrl}
                />
            ) : (<></>) }

            { !readOnly ? (
                <label
                    className={`${
                        labelClasses.background[variant]
                    } ${
                        labelClasses.display
                    } ${
                        labelClasses.position[variant]
                    } ${
                        labelClasses.width
                    }`}
                    htmlFor={inputId}
                >
                    <span className={labelClasses.text}>{ label }</span>
                    <input
                        className={`${
                            inputClasses.background
                        } ${
                            inputClasses.border
                        } ${
                            inputClasses.borderRadius
                        } ${
                            inputClasses.color
                        } ${
                            inputClasses.display
                        } ${
                            inputClasses.margin
                        } ${
                            inputClasses.padding
                        } ${
                            inputClasses.width
                        }`}
                        type="file"
                        name={name}
                        id={inputId}
                        readOnly={readOnly}
                        disabled={readOnly}
                        multiple={false}
                        onChange={handleChange}
                        ref={ref}
                        {...props}
                    />
                </label>
            ) : (<></>) }
        </div>
    )
})

FileInput.displayName = 'FileInput'
