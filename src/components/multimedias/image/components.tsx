"use client"

import { FC, ReactEventHandler, forwardRef, useMemo, useState } from "react";
import { BrokenImageProps, ImageProps } from "./props";
import { DefaultAvailableSrcSets, PixelDensity, Width } from "./constants";
import { ImageSrcSetParser } from "./functions";
import { FilledDestroyed } from "@irimold/react-icons";
import { brokenImageClasses, brokenImageIconClasses } from "./classes";

const BrokenImage : FC<BrokenImageProps> = ({
    className = '',
    onClick,
    width,
    height
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
            brokenImageClasses.overflow
        } ${
            brokenImageClasses.padding
        } ${
            brokenImageClasses.width
        } ${
            className
        }`}
        onClick={onClick}
        style={{
            width   : typeof width == 'number' ? `${width}px` : width,
            height  : typeof height == 'number' ? `${height}px` : height,
        }}
    >
        <FilledDestroyed
            className={`${
                brokenImageIconClasses.color
            } ${
                brokenImageIconClasses.display
            }`}
            size={typeof width == 'number' ? width * 2/3 : width}
        />
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
                width={props.width}
                height={props.height}
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
