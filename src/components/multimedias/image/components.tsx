import React, { forwardRef, memo } from "react";
import { ImageProps } from "./props";
import { DefaultAvailableSrcSets } from "./constants";
import { ImageSrcSetParser } from "./functions";

export const Image = memo(forwardRef<HTMLImageElement, ImageProps>(({
    src,
    availableSrcSets = DefaultAvailableSrcSets,
    srcSetParser = ImageSrcSetParser,
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
    availableSrcSets.forEach((width, index) => {
        srcSet += srcSetParser(path, width, extension)
        srcSet += ` ${width}w`

        if (index < availableSrcSets.length - 1) {
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
