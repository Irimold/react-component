"use client"

import { FC, ReactEventHandler, forwardRef, useMemo, useState } from "react";
import { BrokenImageProps, ImageProps } from "./props";
import { DefaultAvailableSrcSets, PixelDensity, Width } from "./constants";
import { ImageSrcSetParser } from "./functions";
import { FilledDestroyed } from "@irimold/react-icons";
import { brokenImageClasses, brokenImageIconClasses, brokenImageLabelClasses } from "./classes";

const BrokenImage : FC<BrokenImageProps> = ({
    className = '',
    onClick,
}) => (
    <div 
        className={`${
            brokenImageClasses.background
        } ${
            brokenImageClasses.borderRadius
        } ${
            brokenImageClasses.display
        } ${
            brokenImageClasses.flex
        } ${
            brokenImageClasses.padding
        } ${
            brokenImageClasses.width
        } ${
            className
        }`}
        onClick={onClick}
    >
        <FilledDestroyed
            className={`${
                brokenImageIconClasses.color
            } ${
                brokenImageIconClasses.display
            } ${
                brokenImageIconClasses.margin
            }`}
        />
        <p
            className={`${
                brokenImageLabelClasses.alignment
            } ${
                brokenImageLabelClasses.color
            } ${
                brokenImageLabelClasses.font
            } ${
                brokenImageLabelClasses.margin
            } ${
                brokenImageLabelClasses.padding
            } ${
                brokenImageLabelClasses.text
            } ${
                brokenImageLabelClasses.width
            }`}
        >
            Unable to load image
        </p>
    </div>
)

export const Image = forwardRef<HTMLImageElement, ImageProps>(({
    src,
    availableSrcSets,
    srcSetParser = ImageSrcSetParser,
    srcSetType,
    disableSrcSet = false,
    disablePlaceholder = false,
    onError,
    onClick,
    className = '',
    ...props
}, ref) => {
    const [failedToLoad, setFailedToLoad] = useState(false)

    const srcSet = useMemo(() => {
        if (disableSrcSet) {
            return ''
        }

        if (!src) {
            return ''
        }

        const separated = src.split('.')
        const extension = separated[separated.length - 1]
        const path = src.replace(`.${extension}`, '')
    
        let output = ''
        const srcSets = availableSrcSets || DefaultAvailableSrcSets[srcSetType || Width]
        srcSets.forEach((size, index) => {
            output += srcSetParser(path, size, extension)
            
            switch (srcSetType) {
                case Width:
                    output += `${size}w`
                    break
            
                case PixelDensity:
                    output += `${size}x`
                    break
                
                default:
                    output += `${size}w`
                    break
            }
    
            if (index < srcSets.length - 1) {
                output += ', '
            }
        })

        return output
    }, [disableSrcSet, src, srcSetParser, availableSrcSets, srcSetType])

    const handleError : ReactEventHandler<HTMLImageElement> = (event) => {
        if (typeof onError == 'function') {
            onError(event)
        }

        if (disablePlaceholder) {
            return
        }

        setFailedToLoad(true)
    }

    if (!src || failedToLoad) {
        return ( !disablePlaceholder ? (
            <BrokenImage
                className={className}
                onClick={onClick}
            />
        ) : (<></>) )
    }

    return (
        <img
            src={src}
            srcSet={srcSet}
            ref={ref}
            className={className}
            onClick={onClick}
            onError={handleError}
            {...props}
        />
    )
})

Image.displayName = 'Image'
