import { classNames } from "@/utils";
import React from "react";
import style from "./selectLanguage.module.scss";
import { SelectLanguageProps } from "./selectLanguageModel";
const SelectLanguage = React.forwardRef<HTMLSelectElement, SelectLanguageProps>(
  (
    {
      languages,
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
            {languages.map((language) => {
              return (
                <option key={language.value} value={language.value}>
                  {`${language.name} - ${language.native_name}`}
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
export default SelectLanguage;
