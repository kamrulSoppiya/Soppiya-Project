import { classNames } from "@/utils";
import React from "react";
import style from "./selectCountry.module.scss";
import { SelectCountryProps } from "./selectCountryModel";
const SelectCountry = React.forwardRef<HTMLSelectElement, SelectCountryProps>(
  (
    {
      label,
      size = "md",
      name,
      disabled,
      error,
      helpText,
      value,
      countries = [],
      onChange,
      onBlur,
      onFocus,
    },
    ref
  ) => {
    //? @___Locale States___@
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
            {countries.map((country) => {
              return (
                <option key={country.value} value={country.value}>
                  {country.name}
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
export default SelectCountry;
