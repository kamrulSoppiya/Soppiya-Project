import { classNames } from "@/utils";
import React from "react";
import style from "./cardFooter.module.scss";
import { CardFooterProps } from "./cardFooterModel";

const CardFooter = ({ children, justifyContent, border, padding = "lg", customPadding, className }: CardFooterProps) => {
  const footerClasses = classNames(
    style.card_footer,
    justifyContent && style.flex,
    style["flex_" + justifyContent],
    style["border_" + border],
    style["padding_" + padding], (className || "")
  );
  return <div className={footerClasses} style={{ padding: customPadding }}>{children}</div>;
};
export default CardFooter;
