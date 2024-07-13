import { FC } from "react";
import { ConfirmationModalProps } from "./props";
import { Modal } from "../modal";
import { buttonContainerClasses, cancelButtonClasses, confirmButtonClasses, descriptionClasses } from "./classes";
import { NegativeFlow, PositiveFlow } from "./constants";
import { Button } from "@/components/button";
import { OutlineCheck } from "@irimold/react-icons";

export const ConfirmationModal : FC<ConfirmationModalProps> = ({
    title       = 'Modify data?',
    children    = (<>Are you sure you want to modify this data?</>),
    flow        = PositiveFlow,
    icon        = OutlineCheck,
    onConfirm,
    onCancel,
    ...props
}) => {
    return (
        <Modal
            title={title}
            {...props}
        >
            <p 
                className={`${
                    descriptionClasses.margin
                }`}
            >
                { children }
            </p>
            <div
                className={`${
                    buttonContainerClasses.display
                } ${
                    buttonContainerClasses.flex.default
                } ${
                    buttonContainerClasses.flex[flow]
                }`}
            >
                <Button
                    variant={ flow == PositiveFlow ? "solid" : "outline" }
                    leftIcon={ flow == PositiveFlow ? icon : undefined }
                    onClick={onConfirm}
                    className={`${
                        confirmButtonClasses.margin[flow]
                    }`}
                >
                    Yes
                </Button>
                <Button
                    variant={ flow == NegativeFlow ? "solid" : "outline" }
                    leftIcon={ flow == NegativeFlow ? icon : undefined }
                    onClick={onCancel}
                    className={`${
                        cancelButtonClasses.margin[flow]
                    }`}
                >
                    No
                </Button>
            </div>
        </Modal>
    )
}