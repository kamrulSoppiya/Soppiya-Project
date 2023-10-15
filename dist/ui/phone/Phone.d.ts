import React from "react";
import { PhoneProps } from "./phoneModel";
import "./phone_custom.scss";
declare const Phone: ({ label, size, name, disabled, allowClear, error, helpText, loaderColor, value, onPhoneValue, onBlur, onFocus, onClear, }: PhoneProps) => React.JSX.Element;
export default Phone;
