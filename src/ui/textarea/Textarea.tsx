import { CrossIcon } from "@/assets/icons/cross";
import { classNames } from "@/utils";
import React from "react";
import style from "./textarea.module.scss";
import { TextareaProps } from "./textareaModel";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      name,
      placeholder = "Placeholder",
      value,
      disabled,
      allowClear,
      error,
      label = "Label",
      labelAction,
      helpText,
      onChange,
      onBlur,
      onFocus,
      onClear,
    },
    ref
  ) => {
    return (
      <div>
        {(label || (labelAction && labelAction.content)) && (
          <div className={style.label_action_wrapper}>
            {label && (
              <label className={classNames(style.label_text)} htmlFor={name}>
                {label}
              </label>
            )}
            {labelAction && (
              <div className={style.action_text_wrapper}>
                <a href={labelAction.url} target={labelAction.target} className={style.action_text}>
                  {labelAction.content}
                </a>
              </div>
            )}
          </div>
        )}
        <div className={classNames(style.input_field_wrapper)}>
          <textarea
            ref={ref}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            className={classNames(style.textarea_field, error && style.error_style)}
            id={name}
          ></textarea>
        </div>
        {allowClear && (
          <button className={classNames(style.cross_icon)} onClick={onClear}>
            <CrossIcon />
          </button>
        )}

        {helpText && <p className={style.help_text}>{helpText}</p>}
        {error && <p className={style.error_text}> {error.message} </p>}
      </div>
    );
  }
);

export default Textarea;
