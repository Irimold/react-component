import { FC } from "react";
import { CardBodyProps, CardTitleProps } from "./props";
import { cardBodyClasses, cardTitleClasses } from "./classes";

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
            className
        }`}
    >
        { children }
    </p>
)