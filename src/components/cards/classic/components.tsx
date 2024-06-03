import { FC } from "react";
import { ClassicCardProps } from "./props";
import { cardBodyClasses, cardClasses, cardDetailClasses, cardImageClasses, cardImageContainerClasses, cardTitleClasses } from "./classes";
import { baseCardClasses } from "../classes";
import { Image } from "@/components/multimedias";
import { CardAction, CardBody, CardImage, CardTitle } from "../components";
import { Free, Limited } from "./constants";

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
            <CardImage
                containerClassName={`${
                    cardImageContainerClasses.height
                } ${
                    cardImageContainerClasses.width
                }`}
                className={`${
                    cardImageClasses.filter
                } ${
                    cardImageClasses.transform
                } ${
                    cardImageClasses.transition
                }`}
                src={imgSrc}
                disableSrcSet={disableSrcSet}
                srcSetParser={srcSetParser}
                srcSetType={srcSetType}
                availableSrcSets={availableSrcSets}
            />
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
                <CardAction
                    href={href}
                    linkComponent={linkComponent}
                >
                    { actionText || 'Click' }
                </CardAction>
            ) : (<></>) }
        </div>
    </div>
)

export const Card = ClassicCard