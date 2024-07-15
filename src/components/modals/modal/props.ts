import { GenericVoidCallback } from "@/types";
import { ComponentPropsWithoutRef } from "react";

export interface ModalProps extends ComponentPropsWithoutRef<'dialog'> {
    onOpen?         : GenericVoidCallback
    onClose?        : GenericVoidCallback
    preventEscKey?  : boolean
}
