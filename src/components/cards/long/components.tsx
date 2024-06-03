import { FC } from "react";
import { CardProps } from "../props";
import { baseCardClasses } from "../classes";
import { cardClasses, cardDetailClasses, cardImageContainerClasses } from "./classes";
import { CardAction, CardBody, CardImage, CardTitle } from "../components";

export const LongCard : FC<CardProps> = ({
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
            cardClasses.display
        } ${
            cardClasses.flex
        } ${
            cardClasses.group
        } ${
            className
        }`}
        {...props}
    >
        <CardImage
            containerClassName={`${
                cardImageContainerClasses.background
            } ${
                cardImageContainerClasses.position
            } ${
                cardImageContainerClasses.width
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
            } ${
                cardDetailClasses.width
            }`}
        >
            <CardTitle title={title} />
            <CardBody>
                { children || content }
            </CardBody>
            <CardAction
                href={href}
                linkComponent={linkComponent}
            >
                { actionText || 'Show more' }
            </CardAction>
        </div>
    </div>
)