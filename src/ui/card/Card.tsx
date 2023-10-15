import React from "react";
import style from "./card.module.scss";
import { CardBody } from "./cardBody";
import { CardFooter } from "./cardFooter";
import { CardHeader } from "./cardHeader";
import { CardProps } from "./cardModel";
import { classNames } from "@/utils";

interface CardComponent extends React.FC<CardProps> {
  Body: typeof CardBody;
  Header: typeof CardHeader;
  Footer: typeof CardFooter;
}
const Card: CardComponent = ({ children, className }: CardProps) => {
  return <div className={classNames(style.card, (className || ""))}>{children}</div>;
};
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;

export default Card;
