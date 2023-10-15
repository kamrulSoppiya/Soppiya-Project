import { classNames } from "@/utils";
import React from "react";
import style from "./divider.module.scss";
import { DividerProps } from "./dividerModel";

const Divider = ({ variant = "default" }: DividerProps) => {
  return <div className={classNames(style.divider, style["divider_" + variant])}></div>;
};
export default Divider;
