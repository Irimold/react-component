import { FC } from "react";
import { CardActionProps, CardBodyProps, CardTitleProps } from "./props";
import { cardActionClasses, cardBodyClasses, cardTitleClasses } from "./classes";
import { Button } from "../button";

export const CardTitle : FC<CardTitleProps> = ({
    title,
    className = ''
}) => (
    <h3 
        className={`${
            cardTitleClasses.font
        } ${
            className
        }`}
    >
        {title}
    </h3>
)

export const CardBody : FC<CardBodyProps> = ({
    children,
    className = ''
}) => (
    <p 
        className={`${
            cardBodyClasses.font
        } ${
            cardBodyClasses.height
        } ${
            className
        }`}
    >
        { children }
    </p>
)

export const CardAction : FC<CardActionProps> = ({
    children,
    className = '',
    href = '',
    linkComponent
}) => (
    <Button
        variant="link"
        functionality="link"
        href={href}
        linkComponent={linkComponent}
        className={`${
            cardActionClasses.position
        } ${
            className
        }`}
    >
        { children }
    </Button>
)