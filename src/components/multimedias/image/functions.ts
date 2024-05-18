import { ImageSrcSetParserType } from "./types";

export const ImageSrcSetParser : ImageSrcSetParserType = (imgPath, width, imgExtension) => {
    return `${imgPath}-${width}.${imgExtension}`
}