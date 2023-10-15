import { classNames } from "@/utils";
import React, { useEffect, useState } from "react";
import style from "./select.module.scss";
import { SelectProps } from "./selectModel";

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { size, name, label, helpText, disabled, value, error, onSelect, onBlur, onFocus, options },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedValue(event.target.value);
      typeof onSelect === "function" && onSelect(event.target.value);
    };
    useEffect(() => {
      if (!value) return;
      setSelectedValue(value);
    }, [value]);
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
            value={selectedValue}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={handleSelectChange}
          >
            {options?.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.name}
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

export default Select;
