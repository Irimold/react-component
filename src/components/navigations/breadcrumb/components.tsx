import { FC, Fragment } from "react";
import { BreadcrumbProps, DefaultBreadcrumbItemProps } from "./props";
import { breadcrumbClasses, breadcrumbItemClasses } from "./classes";
import { Active, Idle } from "@/constants";

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
                breadcrumbClasses.display
            } ${
                breadcrumbClasses.flex
            } ${
                breadcrumbClasses.font
            }`}
        >
            { items.map((item, index) => (
                <Fragment key={`breadcrumb-${index}`}>
                    <Component
                        className={`${
                            breadcrumbItemClasses.color[item.active ? Active : Idle]
                        } ${
                            breadcrumbItemClasses.display
                        } ${
                            breadcrumbItemClasses.padding
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
