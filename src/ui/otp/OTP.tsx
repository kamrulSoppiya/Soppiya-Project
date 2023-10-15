import { CrossIcon } from "@/assets/icons/cross";
import { KeyIcon } from "@/assets/icons/key";
import { classNames } from "@/utils";
import React, { useState } from "react";
import { OTPProps } from "./OTPModel";
import style from "./otp.module.scss";

const OTP = React.forwardRef<HTMLInputElement, OTPProps>(
  (
    {
      label = "OTP",
      size = "md",
      name,
      disabled,
      allowClear,
      error,
      helpText,
      onOtpValue,
      onBlur,
      onFocus,
      onClear,
    },
    ref
  ) => {
    //? @___Locale State___@
    const [otpCode, setOtpCode] = useState("");

    //? @___Handler Functions___@
    const handleChangeOtpCode = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value.replace(/[^0-9-]/g, "");
      e.target.value = value;
      value = value.replaceAll("-", "");
      if (value.length > 6) return;
      setOtpCode(value);
      typeof onOtpValue === "function" && onOtpValue(value);
    };

    const handleOTPFormat = (str: string) => {
      return str.replaceAll("-", "").length > 3 ? str.slice(0, 3) + "-" + str.slice(3, 6) : str;
    };

    return (
      <div className={style.wrapper}>
        {label && (
          <div className={style.label_action_wrapper}>
            {label && (
              <label className={classNames(style.label_text)} htmlFor={name}>
                {label}
              </label>
            )}
          </div>
        )}
        <div className={classNames(style.input_field_wrapper, style[size + "_input"])}>
          <input
            ref={ref}
            name={name}
            type="text"
            placeholder="XXX-XXX"
            value={handleOTPFormat(otpCode)}
            disabled={disabled}
            onChange={handleChangeOtpCode}
            onBlur={onBlur}
            onFocus={onFocus}
            className={classNames(
              style.input_field,
              error && error.status && style.error_style,
              style.prefix_icon_padding
            )}
            id={name}
          />
          {allowClear && (
            <button className={classNames(style.cross_icon)} onClick={onClear} type="button">
              <CrossIcon />
            </button>
          )}
          <button className={classNames(style.prefix)} type="button">
            <KeyIcon />
          </button>
        </div>
        {helpText && <p className={style.help_text}>{helpText}</p>}
        {error && error.status && <p className={style.error_text}> {error.message} </p>}
      </div>
    );
  }
);
// eslint-disable-next-line react-refresh/only-export-components
export default OTP;
