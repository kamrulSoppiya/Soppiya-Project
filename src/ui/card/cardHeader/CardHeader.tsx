import { classNames } from "@/utils";
import React from "react";
import style from "./cardHeader.module.scss";
import { CardHeaderProps } from "./cardHeaderModel";

const CardHeader = ({ children, justifyContent, border, padding = "lg", customPadding, className }: CardHeaderProps) => {
  const headerClasses = classNames(
    style.card_header,
    justifyContent && style.flex,
    style["flex_" + justifyContent],
    style["border_" + border],
    style["padding_" + padding], (className || "")

  );
  return <div className={headerClasses} style={{ padding: customPadding }}>{children}</div>;
};
export default CardHeader;
