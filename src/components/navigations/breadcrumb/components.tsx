import React, { FC, Fragment } from "react";
import { BreadcrumbProps, DefaultBreadcrumbItemProps } from "./props";
import { BreadcrumbClasses, BreadcrumbItemClasses } from "./classes";

const DefaultBreadcrumbItem : FC<DefaultBreadcrumbItemProps> = (props) => (
    <a {...props}/>
)

const BreadcrumbSeparator : FC = () => (
    <div>{'/'}</div>
)

export const Breadcrumb : FC<BreadcrumbProps> = ({
    items,
    itemComponent = DefaultBreadcrumbItem,
}) => {
    const Component = itemComponent

    return (
        <div 
            className={`${
                BreadcrumbClasses.display
            } ${
                BreadcrumbClasses.flex
            } ${
                BreadcrumbClasses.font
            }`}
        >
            { items.map((item, index) => (
                <Fragment key={`breadcrumb-${index}`}>
                    <Component
                        className={`${
                            BreadcrumbItemClasses.color[item.active ? 'active' : 'inactive']
                        } ${
                            BreadcrumbItemClasses.display
                        } ${
                            BreadcrumbItemClasses.padding
                        }`}
                        href={item.href}
                    >
                        { item.label }
                    </Component>
                    { index != items.length - 1 ? (
                        <BreadcrumbSeparator/>
                    ) : (<></>) }
                </Fragment>
            )) }
        </div>
    )
}

Breadcrumb.displayName = 'Breadcrumb'
