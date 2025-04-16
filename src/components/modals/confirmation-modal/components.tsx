import { FC } from "react";
import { ConfirmationModalProps } from "./props";
import { Modal } from "../modal";
import { buttonContainerClasses, descriptionClasses } from "./classes";
import { NegativeFlow, PositiveFlow } from "./constants";
import { Button } from "@/components/button";
import { OutlineCheck } from "@irimold/react-icons";
import { Loader } from "@/components/misc";

export const ConfirmationModal : FC<ConfirmationModalProps> = ({
    title       = 'Modify data?',
    children    = (<>Are you sure you want to modify this data?</>),
    flow        = PositiveFlow,
    icon        = OutlineCheck,
    loading     = false,
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
                } ${
                    buttonContainerClasses.gap
                }`}
            >
                <Button
                    variant={ flow == PositiveFlow ? "solid" : "outline" }
                    leftIcon={ flow != PositiveFlow ? undefined : loading ? Loader : icon }
                    onClick={onConfirm}
                    disabled={loading}
                >
                    Yes
                </Button>
                <Button
                    variant={ flow == NegativeFlow ? "solid" : "outline" }
                    leftIcon={ flow != NegativeFlow ? undefined : loading ? Loader : icon }
                    onClick={onCancel}
                    disabled={loading}
                >
                    No
                </Button>
            </div>
        </Modal>
    )
}