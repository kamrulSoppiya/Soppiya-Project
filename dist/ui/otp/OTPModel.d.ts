import { FocusEvent } from "react";
export type ErrorType = {
    status: boolean;
    message: string;
};
export type LabelActionType = {
    content: string;
    url?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    onAction?: () => void;
    onMouseEnter?: () => void;
};
export type OTPProps = {
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
    onOtpValue?: (value: string) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onClear?: () => void;
};
