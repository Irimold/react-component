import { SrcSetVariants } from "./constants"

export type SrcSetType = keyof typeof SrcSetVariants
export type ImageSrcSetParserType = (imgPath : string, width : number, imgExtension: string) => string