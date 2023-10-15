import React from "react";
import { CardBody } from "./cardBody";
import { CardFooter } from "./cardFooter";
import { CardHeader } from "./cardHeader";
import { CardProps } from "./cardModel";
interface CardComponent extends React.FC<CardProps> {
    Body: typeof CardBody;
    Header: typeof CardHeader;
    Footer: typeof CardFooter;
}
declare const Card: CardComponent;
export default Card;
