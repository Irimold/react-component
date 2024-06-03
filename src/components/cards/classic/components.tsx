import { FC } from "react";
import { ClassicCardProps } from "./props";
import { cardActionClasses, cardBodyClasses, cardClasses, cardDetailClasses, cardImageClasses, cardImageContainerClasses, cardTitleClasses } from "./classes";
import { baseCardClasses } from "../classes";
import { Image } from "@/components/multimedias";
import { CardBody, CardTitle } from "../components";
import { Free, Limited } from "./constants";
import { Button } from "@/components/button";

export const ClassicCard : FC<ClassicCardProps> = ({
    className       = '',
    title           = '',
    children,
    content,
    imgSrc          = '',
    disableSrcSet   = false,
    srcSetParser,
    srcSetType,
    availableSrcSets,
    href            = '',
    actionText      = '',
    linkComponent,
    limitHeight     = false,
    ...props
}) => (
    <div
        className={`${
            baseCardClasses.background
        } ${
            baseCardClasses.borderRadius
        } ${
            baseCardClasses.boxShadow
        } ${
            baseCardClasses.overflow
        } ${
            cardClasses.group
        } ${
            cardClasses.position
        } ${
            cardClasses.width
        } ${
            className
        }`}
        {...props}
    >
        { imgSrc ? (
            <div
                className={`${
                    cardImageContainerClasses.height
                } ${
                    cardImageContainerClasses.width
                }`}
            >
                <Image
                    className={`${
                        cardImageClasses.filter
                    } ${
                        cardImageClasses.height
                    } ${
                        cardImageClasses.objectFit
                    } ${
                        cardImageClasses.transform
                    } ${
                        cardImageClasses.transition
                    } ${
                        cardImageClasses.width
                    }`}
                    src={imgSrc}
                    disableSrcSet={disableSrcSet}
                    srcSetParser={srcSetParser}
                    srcSetType={srcSetType}
                    availableSrcSets={availableSrcSets}
                />
            </div>
        ) : (<></>) }
        <div
            className={`${
                cardDetailClasses.padding
            }`}
        >
            { title ? (
                <CardTitle
                    title={title}
                    className={`${
                        cardTitleClasses.margin
                    }`}
                />
            ) : (<></>) }
            { children || content ? (
                <CardBody
                    className={`${
                        cardBodyClasses.height[limitHeight ? Limited : Free]
                    } ${
                        cardBodyClasses.lineClamp[limitHeight ? Limited : Free]
                    } ${
                        cardBodyClasses.margin
                    }`}
                >
                    { children ? children : content }
                </CardBody>
            ) : (<></>) }
            { href ? (
                <Button
                    variant="link"
                    functionality="link"
                    linkComponent={linkComponent}
                    href={href}
                    className={`${
                        cardActionClasses.position
                    }`}
                >
                    { actionText }
                </Button>
            ) : (<></>) }
        </div>
    </div>
)

export const Card = ClassicCard