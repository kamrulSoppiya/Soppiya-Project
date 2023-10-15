import { ChangeEvent } from "react";
export type CheckboxProps = {
    size?: "sm" | "md" | "lg";
    title?: string;
    name?: string;
    label?: string;
    helpText?: string;
    checked: boolean;
    type?: "default" | "error" | "disabled";
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
