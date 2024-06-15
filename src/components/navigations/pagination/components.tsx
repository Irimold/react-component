import { FC, ReactNode } from "react";
import { PaginationProps } from "./props";
import { Button } from "@/components/button";
import { FilledLeft, FilledRight } from "@irimold/react-icons";
import { paginationClasses } from "./classes";

export const Pagination : FC<PaginationProps> = ({
    href,
    page = 1,
    max  = 1,
    onClick,
    linkComponent
}) => {
    const handleClick = (page : number) => {
        if (typeof onClick == 'function') {
            onClick(page)
        }
    }

    const isLink = typeof href == 'function'

    if (max == 1) {
        return <></>
    }

    const items : ReactNode[] = [];

    for (let pageNumber = 1; pageNumber <= max; pageNumber++) {
        if (pageNumber == 1 || 
            pageNumber == max || 
            (pageNumber >= page - 2 && pageNumber <= page + 2)
        ) {
            items.push(
                <Button
                    key={`pagination-item-${pageNumber}`}
                    href={isLink ? href(pageNumber) : ''}
                    functionality={isLink ? 'link' : 'button'}
                    variant={ pageNumber == page ? 'solid' : 'link' }
                    onClick={() => handleClick(pageNumber)}
                    linkComponent={isLink ? linkComponent : undefined}
                >
                    { pageNumber }
                </Button>
            )
        } else if (pageNumber < page - 2) {
            pageNumber = page - 3;
            items.push(
                <Button
                    key={`pagination-item-${pageNumber}`}
                    disabled
                    variant="link"
                >...</Button>
            )
        } else if (pageNumber > page + 2) {
            pageNumber = max - 1;
            items.push(
                <Button
                    key={`pagination-item-${pageNumber}`}
                    disabled
                    variant="link"
                >...</Button>
            )
        }
    }

    return (
        <div 
            className={`${
                paginationClasses.display
            } ${
                paginationClasses.flex
            }`}
        >
            <Button
                href={isLink ? href(page - 1) : ''}
                functionality={isLink ? 'link' : 'button'}
                variant={'link'}
                onClick={() => handleClick(page - 1)}
                linkComponent={isLink ? linkComponent : undefined}
                disabled={page == 1}
                leftIcon={FilledLeft}
            />
            { items }
            <Button
                href={isLink ? href(page + 1) : ''}
                functionality={isLink ? 'link' : 'button'}
                variant={'link'}
                onClick={() => handleClick(page + 1)}
                linkComponent={isLink ? linkComponent : undefined}
                disabled={page == max}
                rightIcon={FilledRight}
            />
        </div>
    )
}