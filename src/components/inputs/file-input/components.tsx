'use client'

import { ChangeEventHandler, FC, MouseEventHandler, forwardRef, useEffect, useRef, useState } from "react"
import { FileDisplayPlaceholderProps, FileDisplayProps, FileInputProps, FileInputVariants } from "./props"
import { containerClasses, displayClasses, placeholderClass, imageClass, inputClasses, labelClasses, placeholderIconClass, placeholderLabelClass } from "./classes"
import { Image } from "@/components/multimedias"
import { Separate } from "./constants"
import { FilledFile, FilledUpload } from "@irimold/react-icons"

const FileDisplayPlaceholder : FC<FileDisplayPlaceholderProps> = ({
    filename = '',
    onClick,
}) => {

    const Icon = filename ? FilledFile : FilledUpload

    return (
        <div 
            onClick={onClick}
            className={`${
                placeholderClass.display
            } ${
                placeholderClass.flex
            } ${
                placeholderClass.height
            } ${
                placeholderClass.padding
            } ${
                placeholderClass.width
            }`}
        >
            <Icon
                className={`${
                    placeholderIconClass.color
                } ${
                    placeholderIconClass.display
                } ${
                    placeholderIconClass.margin
                }`}
            />
            <p
                className={`${
                    placeholderLabelClass.color
                } ${
                    placeholderLabelClass.margin
                } ${
                    placeholderLabelClass.padding
                }`}
            >
                { filename ? filename : 'Upload file' }
            </p>
        </div>
    )
}

const FileDisplay : FC<FileDisplayProps> = ({
    src = '',
    variant = Separate,
    filename = '',
    onClick,
}) => {
    const [failedToLoad, setFailedToLoad] = useState(false)

    return (
        <div
            className={`${
                displayClasses.height[variant]
            } ${
                displayClasses.maxWidth[variant]
            } ${
                displayClasses.position
            } ${
                displayClasses.width
            }`}
        >
            { src && !failedToLoad ? (
                <Image
                    disableSrcSet
                    src={src}
                    alt="Uploaded file"
                    className={`${
                        imageClass.height
                    } ${
                        imageClass.objectFit
                    } ${
                        imageClass.width
                    }`}
                    onClick={onClick}
                    onError={() => { setFailedToLoad(true) }}
                />
            ) : (
                <FileDisplayPlaceholder
                    onClick={onClick}
                    filename={filename || src}
                />
            ) }
        </div>
    )
}

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
    const [filename, setFilename] = useState<string>('')
    const inputId = `file-input${name ? `-${name}` : ''}${id ? `-${id}` : ''}`

    const inputRef = useRef<HTMLInputElement|null>(null)

    const handleChange : ChangeEventHandler<HTMLInputElement> = (event) => {
        const input = event.target
        
        let uploadedFile : File | undefined
        if (input.files?.length) {
            uploadedFile = input.files[0]
            setFilename(uploadedFile.name)

            const source = URL.createObjectURL(uploadedFile)
            setFileUrl(source)
        } else {
            uploadedFile = undefined
            setFilename('')

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

    const handleClickDisplay : MouseEventHandler = () => {
        if (!inputRef.current || !readOnly) {
            return
        }

        inputRef.current.focus()
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
                containerClasses.minHeight[variant]
            } ${
                containerClasses.overflow
            } ${
                containerClasses.position
            } ${
                containerClasses.width
            }`}
        >
            { (!withoutDisplay || readOnly) ? (
                <FileDisplay
                    filename={filename}
                    onClick={handleClickDisplay}
                    src={fileUrl}
                    variant={variant as FileInputVariants}
                />
            ) : (<></>) }

            { !readOnly ? (
                <label
                    className={`${
                        labelClasses.background[variant]
                    } ${
                        labelClasses.borderRadius
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
                        ref={(instance) => {
                            inputRef.current = instance

                            if (typeof ref == 'function') {
                                ref(instance)
                            } else if (ref) {
                                ref.current = instance
                            }
                        }}
                        {...props}
                    />
                </label>
            ) : (<></>) }
        </div>
    )
})

FileInput.displayName = 'FileInput'
