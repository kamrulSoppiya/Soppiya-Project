import { Spinner } from "@/ui/spinner";
import { classNames } from "@/utils";
import React from "react";
import style from "./button.module.scss";
import { ButtonProps } from "./buttonModel";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      display = "inline_block",
      type = "normal",
      children,
      loading = false,
      submit = false,
      disabled = false,
      isPressed = false,
      spinnerType,
      spinnerColor,
      onClick,
    },
    ref
  ) => {
    const buttonClasses = classNames(
      style.button,
      style[variant],
      { [style["disabled"]]: disabled },
      { [style["isPressed"]]: isPressed },
      { [style["loading"]]: loading },
      style[display],
      style[type],
      style["button_" + size]
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        type={submit ? "submit" : "button"}
      >
        {loading ? <Spinner size="xsm" color={spinnerColor} spinnerType={spinnerType} /> : children}
      </button>
    );
  }
);

export default Button;
