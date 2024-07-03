import { GenericVoidCallback } from "@/types";
import { ModalProps } from "../modal";
import { FlowTypes } from "./types";
import { ElementType } from "react";

export interface ConfirmationModalProps extends ModalProps {
    onConfirm?  : GenericVoidCallback
    onCancel?   : GenericVoidCallback
    flow?       : FlowTypes
    icon?       : ElementType
}