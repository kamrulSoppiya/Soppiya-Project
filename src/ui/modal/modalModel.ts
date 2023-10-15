import React from "react";

export type ModalPropsTypes = {
  title?: string;
  children?: React.ReactNode;
  buttonText?: string;
  closeButtonText?:string;
  buttonVariant?:"link" | "default" | "info" | "danger" | "success" | "warning" | "disabled" | "white" ;
  size?: "sm" | "md" | "slg" | "lg";
  loading?:boolean;
  cardBodyPadding?:"sm" | "md" | "lg" | "none";
  scrollOff?:boolean;
  onClose?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickFunc?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
