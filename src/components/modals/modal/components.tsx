"use client"

import { FC, useEffect, useRef } from "react";
import { ModalProps } from "./props";
import { modalBodyClasses, modalClasses, modalHeaderClasses } from "./classes";
import { NavBtn } from "@/components/navigations";

export const Modal : FC<ModalProps> = ({
    onOpen,
    onClose,
    open = false,
    className = '',
    title = '',
    children,
    ...props
}) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const state     = useRef<boolean>(open)

    const handleOpen = () => {
        if (!dialogRef.current) {
            return
        }

        dialogRef.current.showModal()
        state.current = true

        if (typeof onOpen == 'function') {
            onOpen()
        }
    }

    const handleClose = () => {
        if (!dialogRef.current) {
            return
        }

        dialogRef.current.close()
        state.current = false

        if (typeof onClose == 'function') {
            onClose()
        }
    }

    useEffect(() => {
        if (state.current == open) {
            return
        }

        if (open) {
            handleOpen()
        } else {
            handleClose()
        }
    }, [open])


    return (
        <dialog
            ref={dialogRef}
            className={`${
                modalClasses.backdrop
            } ${
                modalClasses.background
            } ${
                modalClasses.border
            } ${
                modalClasses.borderRadius
            } ${
                modalClasses.boxShadow
            } ${
                className
            }`}
            title={title}
            {...props}
        >
            <header
                className={`${
                    modalHeaderClasses.border
                } ${
                    modalHeaderClasses.display
                } ${
                    modalHeaderClasses.flex
                } ${
                    modalHeaderClasses.font
                } ${
                    modalHeaderClasses.padding
                }`}
            >
                <h3>{ title }</h3>
                <NavBtn
                    showOnLarge
                    isActive
                    onClick={handleClose}
                />
            </header>
            <div
                className={`${
                    modalBodyClasses.padding
                }`}
            >
                { children }
            </div>
        </dialog>
    )
}