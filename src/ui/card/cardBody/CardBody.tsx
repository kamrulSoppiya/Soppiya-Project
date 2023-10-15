import { classNames } from "@/utils";
import React from "react";
import style from "./cardBody.module.scss";
import { CardBodyProps } from "./cardBodyModel";

const CardBody = ({ children, border, padding="lg", customPadding, className, onClick }: CardBodyProps) => {
  return <div 
  className={classNames(style.card_body, style["border_" + border], style["padding_"+padding], (className || ""))} 
  style={{padding:customPadding}}
  onClick={onClick}
  >{children}</div>;
};
export default CardBody;
