import { classNames } from "@/utils";
import React from "react";
import style from "./spinner.module.scss";
import { SpinnerProps } from "./spinnerModel";

const Spinner = ({ size, color, spinnerType }: SpinnerProps) => {
  return (
    <span
      className={classNames(style.spinner, style[size], style["border_" + spinnerType])}
      style={{
        borderColor: color,
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
      }}
    ></span>
  );
};

export default Spinner;
