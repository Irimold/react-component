"use client"

import { FC, ReactEventHandler, forwardRef, memo, useState } from "react";
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

export const Image = memo(forwardRef<HTMLImageElement, ImageProps>(({
    src,
    availableSrcSets,
    srcSetParser = ImageSrcSetParser,
    srcSetType,
    disableSrcSet = false,
    disablePlaceholder = false,
    onError,
    onClick,
    className,
    ...props
}, ref) => {
    const [failedToLoad, setFailedToLoad] = useState(false)

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

    if (disableSrcSet) {
        return (
            <img
                src={src}
                ref={ref}
                className={className}
                onError={handleError}
                onClick={onClick}
                {...props}
            />
        )
    }

    const separated = src.split('.')
    const extension = separated[separated.length - 1]
    const path = src.replace(`.${extension}`, '')

    let srcSet = ''
    const srcSets = availableSrcSets || DefaultAvailableSrcSets[srcSetType || Width]
    srcSets.forEach((size, index) => {
        srcSet += srcSetParser(path, size, extension)
        
        switch (srcSetType) {
            case Width:
                srcSet += `${size}w`
                break
        
            case PixelDensity:
                srcSet += `${size}x`
                break
            
            default:
                srcSet += `${size}w`
                break
        }

        if (index < srcSets.length - 1) {
            srcSet += ', '
        }
    })

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
}))

Image.displayName = 'Image'
