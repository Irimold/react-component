import React, { forwardRef, memo } from "react";
import { ImageProps } from "./props";
import { DefaultAvailableSrcSets, PixelDensity, Width } from "./constants";
import { ImageSrcSetParser } from "./functions";

export const Image = memo(forwardRef<HTMLImageElement, ImageProps>(({
    src,
    availableSrcSets,
    srcSetParser = ImageSrcSetParser,
    srcSetType,
    disableSrcSet = false,
    ...props
}, ref) => {
    if (!src) {
        return <></>
    }

    if (disableSrcSet) {
        return (
            <img
                src={src}
                ref={ref}
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
            {...props}
        />
    )
}))

Image.displayName = 'Image'
