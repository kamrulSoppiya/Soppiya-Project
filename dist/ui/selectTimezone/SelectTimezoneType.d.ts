import { FocusEvent } from "react";
export type ErrorType = {
    status: boolean;
    message: string;
};
export type ZoneType = {
    value: string;
    label: string;
};
export type SelectTimezoneProps = {
    size?: "sm" | "md" | "lg";
    name?: string;
    label?: string;
    helpText?: string;
    maxLength?: number;
    disabled?: boolean;
    labelHidden?: boolean;
    allowClear?: boolean;
    readOnly?: boolean;
    error?: ErrorType;
    value?: string;
    loaderColor?: string;
    onSelect?: (value: string) => void;
    onBlur?: (event: FocusEvent<HTMLSelectElement>) => void;
    onFocus?: (event: FocusEvent<HTMLSelectElement, Element>) => void;
};
