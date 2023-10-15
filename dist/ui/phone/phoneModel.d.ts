import { FocusEvent } from "react";
export type ErrorType = {
    status: boolean;
    message: string;
};
export type PhoneType = {
    dialing_code: string;
    format: string;
};
export type SelectCountryType = {
    _id: string;
    flag_icon: string;
    name: string;
    phone: PhoneType;
    country: string;
};
export type ValueType = {
    phone: string;
    country: string;
};
export type PhoneProps = {
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
    value?: ValueType;
    loaderColor?: string;
    onPhoneValue?: (data: {
        phone: string;
        country: any;
    }) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
    onClear?: () => void;
};
