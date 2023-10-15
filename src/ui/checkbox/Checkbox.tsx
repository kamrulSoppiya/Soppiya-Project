import { classNames } from "@/utils";
import React from "react";
import style from "./checkbox.module.scss";
import { CheckboxProps } from "./checkboxModels";

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ type = "default", title, name, label, helpText, checked, onChange }, ref) => {
    return (
      <div className={classNames(style.checkbox, style[type + "_type"])}>
        {label && (
          <label htmlFor={name} className={style.label_text}>
            {label}
          </label>
        )}
        <div className={style.checkbox_field_wrapper}>
          <input
            ref={ref}
            type="checkbox"
            id={name}
            checked={checked}
            onChange={onChange}
            className={classNames(style.checkbox_field)}
            disabled={type === "disabled" && true}
          />
          {title && (
            <label htmlFor={name} className={classNames(style.name_text)}>
              {title}
            </label>
          )}
        </div>

        {helpText && (
          <div className={style.help_text_wrapper}>
            <label className={style.help_text}>{helpText}</label>
          </div>
        )}
      </div>
    );
  }
);
export default Checkbox;
