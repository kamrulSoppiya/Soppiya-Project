import React from "react";

export type ButtonProps = {
  children?: React.ReactNode;
  variant?: "default" | "info" | "danger" | "success" | "warning" | "disabled" | "white" | "link";
  size?: "sm" | "md" | "lg" | "xlg";
  display?: "block" | "inline_block";
  type?: "normal" | "outline" | "text";
  spinnerType?:string;
  spinnerColor?:string;
  submit?: boolean;
  disabled?: boolean;
  loading?: boolean;
  isPressed?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
