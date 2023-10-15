/* eslint-disable react-hooks/exhaustive-deps */
import { classNames } from "@/utils";
import React from "react";
import { SelectTimezoneProps } from "./SelectTimezoneType";
import style from "./selectTimezone.module.scss";
const SelectTimezone = React.forwardRef<HTMLSelectElement, SelectTimezoneProps>(
  (
    {
      timezones,
      label,
      size = "md",
      name,
      disabled,
      error,
      helpText,
      value,
      onChange,
      onBlur,
      onFocus,
    },
    ref
  ) => {
    //? @___Handler Functions___@

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
        <div className={classNames(style.select_field_wrapper, style[size + "_select"])}>
          <select
            ref={ref}
            className={classNames(
              style.select_field,
              error && error.status && style.error_style,
              style.prefix_icon_padding
            )}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
          >
            {timezones.map((timezone) => {
              return (
                <option key={timezone.value} value={timezone.value}>
                  {timezone.name}
                </option>
              );
            })}
          </select>
        </div>
        {helpText && <p className={style.help_text}>{helpText}</p>}
        {error && error.status && <p className={style.error_text}> {error.message} </p>}
      </div>
    );
  }
);

export default SelectTimezone;
