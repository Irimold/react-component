import { FC } from "react";
import { ClassicCardProps } from "./props";
import { cardBodyClasses, cardClasses, cardDetailClasses, cardImageClasses, cardImageContainerClasses } from "./classes";
import { baseCardClasses } from "../classes";
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
            baseCardClasses.position
        } ${
            cardClasses.group
        } ${
            cardClasses.width
        } ${
            className
        }`}
        {...props}
    >
        <CardImage
            containerClassName={`${
                cardImageContainerClasses.height
            } ${
                cardImageContainerClasses.overflow
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
        <div
            className={`${
                cardDetailClasses.padding
            }`}
        >
            <CardTitle title={title} />
            <CardBody
                className={`${
                    cardBodyClasses.height[limitHeight ? Limited : Free]
                } ${
                    cardBodyClasses.lineClamp[limitHeight ? Limited : Free]
                }`}
            >
                { children || content }
            </CardBody>
            <CardAction
                href={href}
                linkComponent={linkComponent}
            >
                { actionText || 'Click' }
            </CardAction>
        </div>
    </div>
)

export const Card = ClassicCard